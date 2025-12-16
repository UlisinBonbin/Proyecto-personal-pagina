import React from 'react';
import Header from '../03-organisms/Header';


const MainLayout = ({ children }) => {
  return (
    <> 
      <Header /> 
      <div className="content-wrapper"> 
        
        <main style={{ minHeight: '80vh', padding: '20px' }}>
          {children} 
        </main>
        
        <footer style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
          Pie de Página (Footer)
        </footer>
      </div>
    </>
  );
};

export default MainLayout;