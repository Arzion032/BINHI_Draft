import Navbar from './../components/ui/Navbar';
import Footer from './../components/ui/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main className="content" style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
