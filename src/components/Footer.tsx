import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="container mx-auto flex items-center justify-between p-8">
        <div className="flex gap-8">
          {[
            { text: "About", href: "/about" },
            { text: "FAQ", href: "/faq" },
            { text: "Roadmap", href: "/roadmap" },
            { text: "Terms of Use", href: "/terms" },
            { text: "Privacy Policy", href: "/privacy" },
          ].map((item) => (
            <Link
              href={item.href}
              key={item.text}
              className="hover:text-gray-500"
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          {[
            { iconClass: "mgc_linkedin_line", href: "https://linkedin.com" },
            { iconClass: "mgc_youtube_line", href: "https://youtube.com" },
            { iconClass: "mgc_social_x_line", href: "https://twitter.com" },
            { iconClass: "mgc_ins_line", href: "https://instagram.com" },
            { iconClass: "mgc_facebook_line", href: "https://facebook.com" },
            { iconClass: "mgc_telegram_line", href: "https://telegram.org" },
          ].map((item, index) => (
            <Link href={item.href} key={index} className="hover:text-gray-500">
              <span
                className={`${item.iconClass} text-3xl text-gray-500`}
              ></span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
