import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/assets/logo/logo.png" alt="Logo" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-9">
            <Link to="/" className="text-xuan-primary hover:text-xuan-secondary font-bold">
              Trang chủ
            </Link>
            <Link to="/gioi-thieu" className="text-xuan-primary hover:text-xuan-secondary font-bold">
              Giới thiệu
            </Link>
            <Link to="/dich-vu" className="text-xuan-primary hover:text-xuan-secondary font-bold">
              Dịch vụ
            </Link>
            <Link to="/tin-tuc" className="text-xuan-primary hover:text-xuan-secondary font-bold">
              Tin tức
            </Link>
            <Link to="/lien-he" className="text-xuan-primary hover:text-xuan-secondary font-bold">
              Liên hệ
            </Link>
          </nav>

          {/* Call Button */}
          <Button className="hidden md:flex items-center bg-xuan-green hover:bg-xuan-secondary font-bold text-white rounded-full">
            <Phone className="mr-2 h-4 w-4" />
            Gọi Đặt Xe: 0983 566 979
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden text-xuan-primary"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-xuan-primary hover:text-xuan-secondary font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Trang chủ
              </Link>
              <Link 
                to="/gioi-thieu" 
                className="text-xuan-primary hover:text-xuan-secondary font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Giới thiệu
              </Link>
              <Link 
                to="/dich-vu" 
                className="text-xuan-primary hover:text-xuan-secondary font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Dịch vụ
              </Link>
              <Link 
                to="/tin-tuc" 
                className="text-xuan-primary hover:text-xuan-secondary font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tin tức
              </Link>
              <Link 
                to="/lien-he" 
                className="text-xuan-primary hover:text-xuan-secondary font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Liên hệ
              </Link>
              <Button 
                className="flex items-center bg-xuan-primary hover:bg-xuan-secondary text-white mx-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="mr-2 h-4 w-4" />
                Gọi Đặt Xe: 0983 566 979
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
