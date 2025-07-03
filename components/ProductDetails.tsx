"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const searchParams = useSearchParams();
  const [productName, setProductName] = useState("Product");

  useEffect(() => {
    const product = searchParams.get("product");
    if (product) {
      setProductName(product);
    }
  }, [searchParams]);

  return { productName };
}
