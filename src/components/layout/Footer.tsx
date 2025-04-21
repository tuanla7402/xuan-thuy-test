import React from 'react';
import { Mail, MapPin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-xuan-primary bg-opacity-95 text-white pt-12 pb-6 footer-with-bg relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-blend-overlay mix-blend-overlay"
        style={{ 
          backgroundImage: "url('assets/bg/footer.png')",
        }} 
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-xuan-secondary">XE HỢP ĐỒNG XUÂN THỦY</h3>
            <p className="mb-2">Nhanh chóng, an toàn, giá rẻ</p>
            <p className="mb-2">Về phương diện khách hàng: Luôn nỗ lực và thực hiện cam kết phục vụ quý khách hàng hơn cả mong đợi.</p>
            <p className="mb-2">Về phương diện xã hội: Thực hiện xây dựng nếp văn hóa và luôn luôn chấp hành nghiêm chỉnh khi tham gia giao thông.</p>
            <p>Không ngừng đầu tư trang thiết bị, phương tiện phục vụ chất lượng, đảm bảo.</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-xuan-secondary">LIÊN HỆ</h3>
            <div className="flex items-start mb-3">
              <MapPin className="h-5 w-5 mr-2 mt-1 text-xuan-secondary" />
              <p>217 Nguyễn Hữu Cảnh, Phường Thắng Nhất, TP Vũng Tàu</p>
            </div>
            <div className="flex items-center mb-3">
              <span className="eicon text-xuan-secondary mr-2 text-xl">&#xe8b5;</span>
              <p>0983 566 979</p>
            </div>
            <div className="flex items-center mb-3">
              <Mail className="h-5 w-5 mr-2 text-xuan-secondary" />
              <p>dichvuxexuanthuy@gmail.com</p>
            </div>
            <div className="flex items-center mb-3">
              <span className="h-5 w-5 mr-2 text-xuan-secondary">🌐</span>
              <p>dichvuxexuanthuy.com</p>
            </div>
            <div className="flex items-center mt-4">
              <Facebook className="h-6 w-6 text-xuan-secondary" />
              <a 
                href="https://www.facebook.com/profile.php?id=61553377016727" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-2 hover:text-xuan-secondary"
              >
                Facebook Fanpage
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-xuan-secondary">DỊCH VỤ</h3>
            <ul className="space-y-2">
              <li>Đưa đón sân bay Tân Sơn Nhất</li>
              <li>Vũng Tàu đi Sài Gòn và ngược lại</li>
              <li>Xe Vũng Tàu đi bệnh viện và ngược lại</li>
              <li>Xe Vũng Tàu đi Bình Dương, Đồng Nai, Biên Hòa và ngược lại</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-xuan-secondary">LIÊN KẾT NHANH</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-xuan-secondary">Trang chủ</Link>
              </li>
              <li>
                <Link to="/gioi-thieu" className="hover:text-xuan-secondary">Giới thiệu</Link>
              </li>
              <li>
                <Link to="/dich-vu" className="hover:text-xuan-secondary">Dịch vụ</Link>
              </li>
              <li>
                <Link to="/tin-tuc" className="hover:text-xuan-secondary">Tin tức</Link>
              </li>
              <li>
                <Link to="/lien-he" className="hover:text-xuan-secondary">Liên hệ</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Xe Hợp Đồng Xuân Thủy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
