import Header from '../03-organisms/Header'
import Footer from '../03-organisms/Footer'
import './Layout.css'

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Header />

      <main className="main-content">
        {children}
      </main>

      <Footer />
    </div>
  )
}
