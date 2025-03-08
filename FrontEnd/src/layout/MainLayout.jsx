import Navbar from './../components/ui/Navbar';
import Footer from './../components/ui/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = ({cartItems}) => {
  return (
    <div className="layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar cartItems={cartItems} />
      <main className="content" style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
