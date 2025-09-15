"use client";
import React, { useState, useEffect } from "react";

export default function BlogSection({ title }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(
            "https://sanimax.pk/wp-json/wp/v2/posts?per_page=6&_embed" // include featured image
        )
            .then((res) => res.json())
            .then((data) => setPosts(Array.isArray(data) ? data : []));
    }, []);

    return (
        <section className="blog-section mg-top">
            <div className="container">
                <h2 className="site-head tex-cen">{title}</h2>
                <div className="flex-row mg-top-med blog-list">
                    {posts.map((post) => {
                        const featuredImage =
                            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/no-image.jpg";

                        return (
                            <div className="blog-card-parent">
                                <div key={post.id} className="blog-card">
                                    <div className="blog-thumb">
                                        <img src={featuredImage} alt={post.title.rendered} />
                                    </div>
                                    <div className="blog-content">
                                        <h3
                                            className="blog-title"
                                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                        />
                                        <div
                                            className="blog-excerpt"
                                            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                        />
                                        <a
                                            href={post.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="read-more-btn"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
