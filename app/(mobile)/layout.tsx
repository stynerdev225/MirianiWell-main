import { useEffect } from "react";
import DeviceRedirect from "@/components/DeviceRedirect";
import "../mobile-styles.css";

export default function MobileRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Add a special class for mobile pages
  useEffect(() => {
    document.body.classList.add("mobile-view");

    return () => {
      document.body.classList.remove("mobile-view");
    };
  }, []);

  return (
    <>
      <DeviceRedirect />
      <div className="mobile-layout min-h-screen bg-white">{children}</div>
    </>
  );
}
