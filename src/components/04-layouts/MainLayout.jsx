import React from 'react';
import Header from '../03-organisms/Header';


const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      
      {/* 'children' es donde se inyectará el contenido de HomePage.jsx */}
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