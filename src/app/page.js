"use client";
import React, { useEffect, useState } from "react";
import Banner from "/components/Banner";
import ProductSection from "/components/ProductSection";
import YourTrustedSource from "../../components/YourTrustedSource";
import BrandSection from "../../components/BrandSection";
import AnOlfactive from "../../components/AnOlfactive";
import FragrncesLover from "../../components/FragrncesLover";
import BlogSection from "../../components/BlogSection";
export default function HomePage() {
  return (
    <>
      <Banner />
      <main>
        <ProductSection categoryId={6874} title="Special Deals"/>
        <ProductSection categoryId={6953} title="Bundle Offers"/>
        <YourTrustedSource></YourTrustedSource>
        <ProductSection categoryId={6659} title="Flavia"/>
        <ProductSection categoryId={6658} title="Estiara"/>
        <BrandSection parentId={223} parentSlug="showers" title="Shop by Brands" />
        <AnOlfactive></AnOlfactive>
        <ProductSection categoryId={44} title="Jenny Glow"/>
        <FragrncesLover></FragrncesLover>
        <BlogSection title="Notes From the Fragrance World" />
      </main>
    </>
  );
}