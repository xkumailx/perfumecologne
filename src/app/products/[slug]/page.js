"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
// import { useCart } from "../../context/CartContext";
import { useCart } from "../../../../context/CartContext";

export default function ProductPage({ params }) {
    const { addToCart } = useCart();
    const { slug } = useParams(); // ✅ gets slug from URL
    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(1);

    useEffect(() => {
        if (!slug) return;
        fetch(
            `https://perfumencologne.com/wp-json/wc/v3/products?slug=${slug}&consumer_key=ck_f16debed7850a13033557dfc48fd8465830e0ae5&consumer_secret=cs_6bafb8da6eddea2f80daf1ddc74652d496921843`
        )
            .then((res) => res.json())
            .then((data) => setProduct(data[0])); // API returns array
    }, [slug]);

    function stripShortcodes(content) {
        return content.replace(/\[\/?vc_[^\]]+\]/g, ""); // removes [vc_row], [/vc_column] etc
    }

    function increaseQty() {
        setQty((prev) => prev + 1);
    }

    function decreaseQty() {
        setQty((prev) => (prev > 1 ? prev - 1 : 1));
    }

    // async function addToCart2() {
    //     // Example local storage approach (since WC REST API doesn’t directly manage cart sessions)
    //     let cart = JSON.parse(localStorage.getItem("cart")) || [];
    //     const existing = cart.find((item) => item.id === product.id);

    //     if (existing) {
    //         existing.qty += qty;
    //     } else {
    //         cart.push({
    //             id: product.id,
    //             name: product.name,
    //             price: product.price,
    //             image: product.images?.[0]?.src,
    //             qty,
    //         });
    //     }

    //     localStorage.setItem("cart", JSON.stringify(cart));
    //     alert("Product added to cart!");
    // }

    if (!product) return <p>Loading...</p>;

    return (
        <div className="single-product container">
            <div className="product-details">
                <div className="flex-row">
                    <div className="col-6">
                        {product.images?.map((img, index) => (
                            <img
                                key={index}
                                src={img.src}
                                alt={product.name}
                                style={{ width: "100%", marginBottom: "10px" }}
                            />
                        ))}
                    </div>
                    <div className="col-6">
                        <h1>{product.name}</h1>
                        <p className="price" dangerouslySetInnerHTML={{ __html: product.price_html }} />
                        <div dangerouslySetInnerHTML={{ __html: stripShortcodes(product.short_description) }} />
                        {/* Quantity Selector */}
                        <div className="qty-controls" style={{ display: "flex", gap: "10px", alignItems: "center", margin: "20px 0" }}>
                            <button onClick={decreaseQty} style={{ padding: "5px 10px" }}>-</button>
                            <input type="text" value={qty} readOnly style={{ width: "50px", textAlign: "center" }} />
                            <button onClick={increaseQty} style={{ padding: "5px 10px" }}>+</button>
                        </div>
                        {/* Add to Cart */}
                        <button onClick={() => addToCart(product.id, qty)}> Add to Cart</button>
                    </div>
                    <div className="col-12">
                        <div dangerouslySetInnerHTML={{ __html: stripShortcodes(product.description) }} />
                    </div>
                </div>

            </div>
        </div>
    );
}
