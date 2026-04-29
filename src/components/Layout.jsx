import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

export default function Layout({ children }) {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ minHeight: '100vh' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
