"use client";

import dynamic from "next/dynamic";
import "react-cookie-manager/style.css";

const CookieManager = dynamic(
  () => import("react-cookie-manager").then((mod) => mod.CookieManager),
  { ssr: false }
);

export default function CookieConsentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CookieManager
      translations={{
        title: "Cookie Preferences",
        message: "We use cookies to improve your experience.",
      }}
      showManageButton={true}
      privacyPolicyUrl={`${process.env.NEXT_PUBLIC_SERVER_URL}/privacy`}
      displayType="popup"
      theme="light"
      position="bottom"
    >
      {children}
    </CookieManager>
  );
}
