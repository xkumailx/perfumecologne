"use client";
import Link from "next/link";
import React from "react";

function formatPrice(price) {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
  }).format(price);
}

function getDisplayPrice(product) {
  if (product.type === "variable") {
    const min = product.price_range?.min_price || product.min_price || product.price;
    const max = product.price_range?.max_price || product.max_price || product.price;
    return min !== max ? `${formatPrice(min)} – ${formatPrice(max)}` : formatPrice(min);
  }
  return formatPrice(product.price || product.regular_price || 0);
}

export default function ProductCard({ product }) {
  return (
    <div className="product">
      <Link href={`/products/${product.slug}`} className="product-card">
        <img src={product.images?.[0]?.src} alt={product.name} />
        <h3>{product.name}</h3>
        <p className="price">{getDisplayPrice(product)}</p> 
      </Link>
    </div>
  );
}
