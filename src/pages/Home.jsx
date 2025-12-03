import React from "react";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <div className="page">
      <SEO
        title="Inicio - Mi E-commerce"
        description="Bienvenido a Mi E-commerce, la mejor tienda de ropa online."
      />
      {/* Hero principal */}
      <header className="hero">
        {/* imagen en public/ image.png se sirve desde la raíz */}
        <img src="/image.png" alt="Mi E-commerce" className="hero__bg" />
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1 className="hero__title">Bienvenido a Mi E-commerce</h1>
          <p className="hero__subtitle">Ropa con estilo — encuentra tu próxima prenda favorita</p>
          <a href="/products" className="hero__cta">Ver Productos</a>
        </div>
      </header>
    </div>
  );
}
