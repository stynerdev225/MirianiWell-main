"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ProductNameDisplayProps {
  defaultText: string;
  isNotification?: boolean;
}

export default function ProductNameDisplay({
  defaultText,
  isNotification = false,
}: ProductNameDisplayProps) {
  const searchParams = useSearchParams();
  const [productName, setProductName] = useState("");

  useEffect(() => {
    const product = searchParams.get("product");
    if (product) {
      setProductName(product);
    }
  }, [searchParams]);

  if (isNotification) {
    return (
      <>
        We'll notify you when{" "}
        {!productName ? "our new features are" : productName + " is"} ready to
        launch.
      </>
    );
  }

  return <>{!productName ? defaultText : productName}</>;
}
