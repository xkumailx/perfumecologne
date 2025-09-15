"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductSection({ categoryId, title }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `https://perfumencologne.com/wp-json/wc/v3/products?category=${categoryId}&per_page=100&consumer_key=ck_f16debed7850a13033557dfc48fd8465830e0ae5&consumer_secret=cs_6bafb8da6eddea2f80daf1ddc74652d496921843`
    )
      .then((res) => res.json())
      .then((data) => setProducts(Array.isArray(data) ? data : []));
  }, [categoryId]);

  // Slick slider settings
  const settings = {
    dots: false,
    arrows: true,
    infinite: products.length > 1,
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
    <section className="product-section mg-top products">
      <div className="container">
        <h2 className="site-head">{title}</h2>

        {/* All products in a single slider */}
        {products.length > 0 && (
          <div className="mg-top-med">
            <Slider {...settings}>
              {products.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
}
