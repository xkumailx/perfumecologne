"use client";
import React, { useEffect, useState } from "react";
import CategoryCard from "./BrandCard"; // Make sure this is the correct file/component
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CategorySection({ parentId, parentSlug, title }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      `https://perfumencologne.com/wp-json/wc/v3/products/categories?parent=${parentId}&consumer_key=ck_f16debed7850a13033557dfc48fd8465830e0ae5&consumer_secret=cs_6bafb8da6eddea2f80daf1ddc74652d496921843`
    )
      .then((res) => res.json())
      .then((data) => setCategories(Array.isArray(data) ? data : []))
      .catch((err) => {
        console.error("Failed to fetch categories", err);
      });
  }, [parentId]);

  // Slick slider settings
  const settings = {
    dots: false,
    arrows: true,
    infinite: categories.length > 5,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="brand-section mg-top">
      <div className="container">
        <h2 className="site-head">{title}</h2>

        {categories.length > 0 ? (
          <Slider {...settings} className="mg-top-med">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} parentSlug={parentSlug} />
            ))}
          </Slider>
        ) : (
          <p>Loading categories...</p>
        )}
      </div>
    </section>
  );
}
