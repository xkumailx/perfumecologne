"use client";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [menu, setMenu] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // ✅ wait until client
    fetch("https://perfumencologne.com/wp-json/custom/v1/menu/primary")
      .then((res) => res.json())
      .then((data) => setMenu(Array.isArray(data) ? data : []));
  }, []);

  if (!mounted) return null;

  // ✅ Recursive function to render menu levels
  const renderMenu = (parentId) => {
    const items = menu.filter((item) => item.parent === String(parentId));

    if (!items.length) return null;

    return (
      <ul className="sub-menu">
        {items.map((item) => (
          <li className="menu-item" key={item.ID}>
            <a className="menu" href={item.url}>
              {item.title}
            </a>
            {/* ✅ Recursively render children */}
            {renderMenu(item.ID)}
          </li>
        ))}
      </ul>
    );
  };

  // ✅ Top-level parents (parent === "0")
  const parentItems = menu.filter((item) => item.parent === "0");

  return (
    <header className="site-header">
      <div className="container">
        <div className="flex-row align-cen">
          <div className="col-3">
            <div className="logo">
              <img src="Perfume And Cologne.png" alt="Logo" />
            </div>
          </div>
          <div className="col-6">
            <nav className="navigation">
              <ul className="menu-wrapper">
                {parentItems.map((item) => (
                  <li id={`menu-item-${item.ID}`} className="menu-item" key={item.ID}>
                    <a className="menu" href={item.url}>
                      {item.title}
                    </a>
                    {renderMenu(item.ID)}
                  </li>

                ))}
              </ul>
            </nav>
          </div>
          <div className="col-3">

          </div>
        </div>
      </div>
    </header>
  );
}
