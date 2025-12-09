import React from 'react';

/**
 * PageLayout Component
 * Proporciona una estructura consistente para todas las páginas
 * con nav, header (opcional) y main
 *
 * Props:
 * - title: Título de la página (mostrado en header si no hay children custom)
 * - headerContent: Contenido personalizado del header (opcional)
 * - showHeader: Si debe mostrar header (default: true)
 * - children: Contenido principal de la página
 * - className: Clases CSS adicionales
 */
export default function PageLayout({
  title,
  headerContent,
  showHeader = true,
  children,
  className = '',
  isFullWidth = false
}) {
  return (
    <div className={`page-layout ${isFullWidth ? 'full-width' : ''} ${className}`}>
      {showHeader && (
        <header className="page-header">
          {headerContent || (title && <h1>{title}</h1>)}
        </header>
      )}
      <main className="page-main">
        {children}
      </main>
    </div>
  );
}
