"use client";
import React from "react";

export default function CategoryCard({ category, parentSlug }) {
  const categoryLink = `https://perfumencologne.com/product-category/${parentSlug}/${category.slug}/`;

  return (
    <div className="brand-card">
      <a href={categoryLink}>
        <img src={category.image?.src} alt={category.name} />
        {/* <h3>{category.name}</h3> */}
      </a>
    </div>
  );
}
