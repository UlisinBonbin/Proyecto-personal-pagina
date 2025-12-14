import React from 'react';


const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      {/* 03-organisms/Header.jsx (aún no existe, ¡pero lo haremos!) */}
      <header style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        Barra de Navegación Global (Header)
      </header>
      
      {/* 'children' es donde se inyectará el contenido de HomePage.jsx 
      */}
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        {children} 
      </main>
      
      {/* 03-organisms/Footer.jsx */}
      <footer style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
        Pie de Página (Footer)
      </footer>
    </div>
  );
};

export default MainLayout;