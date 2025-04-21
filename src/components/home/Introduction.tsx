import React from "react";
import { Phone, CheckCircle } from "lucide-react";

const Introduction = () => {
  const benefits = [
    "Đội xe đa dạng từ 4 chỗ đến 16 chỗ",
    "Tài xế chuyên nghiệp, lái xe an toàn",
    "Giá cả hợp lý, minh bạch",
    "Phục vụ 24/7 kể cả ngày lễ",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-2xl md:text-4xl font-bold text-xuan-primary text-center">
              XE HỢP ĐỒNG XUÂN THỦY
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-xuan-green text-center">
              ƯU ĐÃI HẤP DẪN CHO KHÁCH HÀNG ĐẶT XE SỚM
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed font-semibold">
              <p>
                Xe Dịch vụ Hợp Đồng Xuân Thủy với hệ thống quy mô hiện đại về:
                đầu xe, tài xế sẵn sàng đi tour, phục vụ quý khách với chi phí
                tiết kiệm và rẻ nhất hiện nay.
              </p>

              <ul className="space-y-3 mt-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-xuan-secondary mt-1 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center pt-4">
              <div className="bg-xuan-primary rounded-xl py-3 px-6 flex items-center shadow-md transform transition-all duration-300 hover:translate-y-[-5px]">
                <div className="mr-4">
                  <h3 className="text-white font-medium">Tổng đài đặt xe:</h3>
                  <a
                    href="tel:0983566979"
                    className="flex items-center text-xl md:text-2xl font-bold text-xuan-secondary"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    0983 566 979
                  </a>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center animate-pulse-light">
                  <Phone className="h-6 w-6 text-xuan-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Video Content */}
          <div className="w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-card">
            <video
              className="w-full h-full object-cover"
              src="/assets/car-image/car-video.mp4"
              title="Xe Hợp Đồng Xuân Thủy"
              controls
              controlsList="nodownload"
              playsInline
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
