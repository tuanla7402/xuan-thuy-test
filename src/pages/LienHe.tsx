
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/home/FloatingButtons';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ZaloIcon from '@/components/icon/Zalo';

const LienHe = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-10 text-xuan-primary">LIÊN HỆ</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-xuan-primary mb-6">THÔNG TIN LIÊN HỆ</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-xuan-primary p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-xuan-primary mb-1">Địa chỉ</h3>
                    <p>217 Nguyễn Hữu Cảnh, Phường Thắng Nhất, TP Vũng Tàu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-xuan-primary p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-xuan-primary mb-1">Điện thoại</h3>
                    <p>0983 566 979</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-xuan-primary p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-xuan-primary mb-1">Email</h3>
                    <p>dichvuxexuanthuy@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-xuan-primary p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-xuan-primary mb-1">Giờ làm việc</h3>
                    <p>Phục vụ 24/7 - Cả ngày lễ và cuối tuần</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-xuan-primary mb-3">Kết nối với chúng tôi</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61553377016727" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#1877f2] text-white p-3 rounded-full hover:opacity-90"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a 
                    href="https://zalo.me/0983566979" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#0068ff] text-white rounded-full hover:opacity-90"
                  >
                    <ZaloIcon/>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-xuan-primary mb-6">BẢN ĐỒ</h2>
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.2832572441446!2d107.08250187592802!3d10.33532466814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31756fdca9d254c9%3A0x8f78678659bc8d20!2zMjE3IE5ndXnhu4VuIEjhu691IEPhuqNuaCwgVGjhuq9uZyBOaOG6pXQsIFbFqW5nIFTDoHUsIELDoCBS4buLYSAtIFbFqW5nIFTDoHUsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1681718378188!5m2!1svi!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default LienHe;
