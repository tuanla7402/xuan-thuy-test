import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/home/FloatingButtons';
import { Car, Clock, CheckCircle, Phone } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'XE 4 CHỖ',
    icon: <Car className="h-12 w-12 text-xuan-secondary" />,
    description: 'Phù hợp cho cá nhân, cặp đôi hoặc gia đình nhỏ. Xe trang bị đầy đủ tiện nghi, điều hòa, âm thanh, ghế êm ái.',
    features: [
      'Đưa đón tận nơi', 
      'Tài xế chuyên nghiệp',
      'Đặt xe 24/7',
      'Giá cả phải chăng'
    ],
    image: 'assets/car-service/car-4.jpg'
  },
  {
    id: 2,
    title: 'XE 7 CHỖ',
    icon: <Car className="h-12 w-12 text-xuan-secondary" />,
    description: 'Lựa chọn hoàn hảo cho gia đình hoặc nhóm bạn. Rộng rãi, thoải mái với không gian chở hành lý lớn.',
    features: [
      'Phù hợp cho 5-7 người',
      'Không gian hành lý rộng',
      'Tiện nghi đầy đủ',
      'Các dòng xe hiện đại: Innova, Xpander...'
    ],
    image: 'assets/car-service/car-7.jpg'
  },
  {
    id: 3,
    title: 'XE 9 CHỖ',
    icon: <Car className="h-12 w-12 text-xuan-secondary" />,
    description: 'Đáp ứng nhu cầu di chuyển của nhóm đông người. Xe rộng rãi, tiện nghi và an toàn cho mọi hành trình.',
    features: [
      'Phù hợp cho 7-9 người',
      'Chuyến du lịch nhóm',
      'Đưa đón đoàn công tác',
      'Trang bị hiện đại, sang trọng'
    ],
    image: 'assets/car-service/car-9.jpg'
  },
  {
    id: 4,
    title: 'XE 16 CHỖ',
    icon: <Car className="h-12 w-12 text-xuan-secondary" />,
    description: 'Giải pháp tối ưu cho chuyến đi tập thể, đoàn công tác hoặc tour du lịch. Xe rộng rãi, thiết kế hiện đại.',
    features: [
      'Phù hợp cho 12-16 người',
      'Đi tour, du lịch nhóm',
      'Không gian rộng rãi',
      'Hệ thống âm thanh, điều hòa chuyên nghiệp'
    ],
    image: 'assets/car-service/car-16.jpg'
  }
];

const destinations = [
  {
    id: 1,
    name: 'Đưa đón sân bay Tân Sơn Nhất',
    image: 'assets/car-service/place/TSN.jpg'
  },
  {
    id: 2,
    name: 'Vũng Tàu đi Sài Gòn và ngược lại',
    image: 'assets/car-service/place/SG-VT.jpg'
  },
  {
    id: 3,
    name: 'Vũng Tàu đi bệnh viện và ngược lại',
    image: 'assets/car-service/place/BV.webp'
  },
  {
    id: 4,
    name: 'Vũng Tàu đi Bình Dương, Đồng Nai, Biên Hòa',
    image: 'assets/car-service/place/BH-DN.jpg'
  }
];

const DichVu = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-10 text-xuan-primary">DỊCH VỤ XE HỢP ĐỒNG</h1>
          
          {/* Service Process */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h2 className="text-2xl font-bold text-xuan-primary mb-6 text-center">QUY TRÌNH PHỤC VỤ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-xuan-primary text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">1</div>
                <h3 className="text-xl font-semibold text-xuan-primary mb-2">ĐẶT XE</h3>
                <p>Liên hệ qua hotline, Zalo hoặc Facebook để đặt xe. Cung cấp thông tin về lịch trình, số lượng người và yêu cầu đặc biệt (nếu có).</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-xuan-primary text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">2</div>
                <h3 className="text-xl font-semibold text-xuan-primary mb-2">XÁC NHẬN</h3>
                <p>Nhân viên xác nhận thông tin chuyến đi, báo giá cụ thể và thỏa thuận các điểm đón trả khách.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-xuan-primary text-white rounded-full flex items-center justify-center mb-4 text-xl font-bold">3</div>
                <h3 className="text-xl font-semibold text-xuan-primary mb-2">PHỤC VỤ</h3>
                <p>Tài xế đón khách đúng giờ, phục vụ chuyến đi an toàn, thoải mái và trả khách tại điểm đến theo yêu cầu.</p>
              </div>
            </div>
          </div>
          
          {/* Car Services */}
          <h2 className="text-2xl font-bold text-xuan-primary mb-6 text-center">CÁC LOẠI XE PHỤC VỤ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map(service => (
              <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-60 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-2xl font-bold text-xuan-primary ml-3">{service.title}</h3>
                  </div>
                  <p className="mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-xuan-secondary mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Destinations */}
          <h2 className="text-2xl font-bold text-xuan-primary mb-6 text-center">TUYẾN ĐƯỜNG PHỔ BIẾN</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {destinations.map(destination => (
              <div key={destination.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-xuan-primary text-center">{destination.name}</h3>
                </div>
              </div>
            ))}
          </div>
          
          {/* Booking CTA */}
          <div 
            className="bg-xuan-primary text-white rounded-lg shadow-md p-8 text-center" 
            style={{ backgroundImage: 'url(assets/car-service/contact.png)', backgroundSize: 'cover' }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">ĐẶT XE NGAY</h2>
            <p className="mb-6">Liên hệ với chúng tôi để được tư vấn và đặt xe với giá ưu đãi nhất!</p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <a 
                href="tel:0983566979" 
                className="flex items-center justify-center bg-xuan-secondary text-xuan-primary px-6 py-3 rounded-md font-bold hover:bg-white transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Gọi Ngay: 0983 566 979
              </a>
              <div className="flex items-center justify-center bg-white text-xuan-primary px-6 py-3 rounded-md font-bold">
                <Clock className="h-5 w-5 mr-2" />
                Phục vụ 24/7
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

export default DichVu;
