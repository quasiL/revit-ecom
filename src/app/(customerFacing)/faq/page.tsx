"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What is Simple Revit?",
    answer:
      "Simple Revit is a platform that provides digital tools and resources to enhance your experience with Revit software, including plugins and learning materials.",
  },
  {
    question: "How do I purchase a product?",
    answer:
      "To purchase a product, simply add it to your cart, proceed to checkout, and complete the payment process. A download link will be sent to your email.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Refunds are available under specific conditions. Please refer to our refund policy for details on eligibility and the refund process.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach out to our support team by emailing support@simplerevit.com. We aim to respond within 24-48 hours.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl text-revitGold font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-card text-card-foreground rounded-lg shadow-md"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-4 text-lg font-semibold cursor-pointer"
            >
              {item.question}
              <ChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-600 border-t">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
