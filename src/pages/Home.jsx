import React from "react";
import SEO from "../components/SEO";
import PageLayout from "../components/PageLayout";

export default function Home() {
  return (
    <PageLayout showHeader={false} isFullWidth={true}>
      <SEO
        title="Inicio - Mi E-commerce"
        description="Bienvenido a Mi E-commerce, la mejor tienda de ropa online."
      />
      {/* Hero principal */}
      <section className="hero">
        {/* imagen en public/ image.png se sirve desde la raíz */}
        <img src="/image.png" alt="Mi E-commerce" className="hero__bg" />
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1 className="hero__title">Bienvenido a Mi E-commerce</h1>
          <p className="hero__subtitle">Ropa con estilo — encuentra tu próxima prenda favorita</p>
          <a href="/products" className="hero__cta">Ver Productos</a>
        </div>
      </section>
    </PageLayout>
  );
}
