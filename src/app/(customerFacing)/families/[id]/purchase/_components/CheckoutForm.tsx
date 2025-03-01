"use client";

import { userOrderExists } from "@/app/actions/orders";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCurrency } from "@/lib/formatters";
import {
  Elements,
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { FormEvent, useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import MDEditor from "@uiw/react-md-editor";

type CheckoutFormProps = {
  product: {
    id: string;
    imagePath: string;
    name: string;
    priceInCents: number;
    description: string;
    videoUrl: string;
    markdownContent: string;
  };
  clientSecret: string;
  images: { imagePath: string }[];
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

export function CheckoutForm({
  product,
  clientSecret,
  images = [],
}: CheckoutFormProps) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);

  const handleImageClick = (imagePath: string) => {
    setFullScreenImage(imagePath);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  useEffect(() => {
    if (fullScreenImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [fullScreenImage]);

  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => {
      const newState = !prev;
      if (newState) {
        setTimeout(() => {
          formRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          setTimeout(() => {
            window.scrollBy({ top: 500, behavior: "smooth" }); // Adjust `100` for more space
          }, 300); // Delay to ensure scrollIntoView completes first
        }, 100);
      }
      return newState;
    });
  };

  return (
    <div className="max-w-7xl w-full mx-auto flex flex-col gap-6 py-6 text-white">
      <div className="flex gap-10 items-start">
        <div className="w-2/3">
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Navigation, Thumbs, Pagination]}
            className="aspect-video flex-shrink-0 rounded-lg"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image.imagePath}
                  alt={product.name}
                  fill
                  className="cursor-pointer"
                  onClick={() => handleImageClick(image.imagePath)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <div className="text-2xl">
            {formatCurrency(product.priceInCents / 100)}
          </div>
          <div className="text-gray-400">{product.description}</div>
          <button
            className="bg-revitGreen text-black py-2 px-4 rounded hover:bg-revitDarkGreen"
            onClick={toggleFormVisibility}
          >
            {isFormVisible ? "Hide Payment Form" : "Proceed to Payment"}
          </button>
        </div>
      </div>
      {product.videoUrl && (
        <iframe
          width="560"
          height="315"
          src={getEmbedUrl(product.videoUrl)}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      {product.markdownContent && (
        <div data-color-mode="light" className="border border-slate-600">
          <div className="wmde-markdown-var">
            <MDEditor.Markdown
              source={product.markdownContent}
              style={{ padding: 16 }}
            />
          </div>
        </div>
      )}
      <button
        className="bg-revitGreen text-black py-2 px-4 rounded hover:bg-revitDarkGreen w-1/6"
        onClick={toggleFormVisibility}
      >
        {isFormVisible ? "Hide Payment Form" : "Proceed to Payment"}
      </button>
      {isFormVisible && (
        <div ref={formRef} className="w-2/3">
          <Elements options={{ clientSecret }} stripe={stripePromise}>
            <Form priceInCents={product.priceInCents} productId={product.id} />
          </Elements>
        </div>
      )}

      {/* Full-Screen Image Viewer */}
      {fullScreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeFullScreen}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex justify-center items-center">
            <button
              className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-50 w-8 h-8 flex items-center justify-center rounded-full hover:bg-opacity-75 z-50"
              onClick={closeFullScreen}
            >
              ✕
            </button>
            <img
              src={fullScreenImage}
              alt="Full-Screen View"
              className="w-auto max-h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function getEmbedUrl(url: string) {
  const videoId = url.split("v=")[1];
  return `https://www.youtube-nocookie.com/embed/${videoId}`;
}

function Form({
  priceInCents,
  productId,
}: {
  priceInCents: number;
  productId: string;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [email, setEmail] = useState<string>();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (stripe == null || elements == null || email == null) return;

    setIsLoading(true);

    const orderExists = await userOrderExists(email, productId);

    if (orderExists) {
      setErrorMessage(
        "You have already purchased this product. Try downloading it from the My Orders page"
      );
      setIsLoading(false);
      return;
    }

    stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/stripe/purchase-success`,
        },
      })
      .then(({ error }) => {
        if (error.type === "card_error" || error.type === "validation_error") {
          setErrorMessage(error.message);
        } else {
          setErrorMessage("An unknown error occurred");
        }
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
          {errorMessage && (
            <CardDescription className="text-destructive">
              {errorMessage}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <PaymentElement />
          <div className="mt-4">
            <LinkAuthenticationElement
              onChange={(e) => setEmail(e.value.email)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            size="lg"
            disabled={stripe == null || elements == null || isLoading}
          >
            {isLoading
              ? "Purchasing..."
              : `Purchase - ${formatCurrency(priceInCents / 100)}`}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
