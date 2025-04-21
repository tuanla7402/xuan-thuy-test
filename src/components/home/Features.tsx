import React from 'react';
import { Clock, Shield, ThumbsUp } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <h2 className="text-3xl font-bold text-center mb-16 text-xuan-primary relative">
          <span className="relative inline-block">
            DỊCH VỤ CHẤT LƯỢNG CAO
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 h-1 w-24 bg-xuan-secondary rounded-full"></span>
          </span>
        </h2>
        
        {/* Quality Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1 animate-slide-up">
            <div className="flex items-start mb-4">
              <div className="bg-xuan-primary p-2 rounded-full mr-4 shadow-lg">
                <ThumbsUp className="h-8 w-8 text-xuan-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-xuan-primary">UY TÍN, CHẤT LƯỢNG</h2>
            </div>
            <p className="text-gray-700 leading-relaxed pl-16">
              Phục vụ với tiêu chí mỗi Khách hàng là Hồng Ân. Chúng tôi không ngừng nỗ lực để phục vụ tận tình, chu đáo đáp ứng được nhu cầu của khách hàng. Sự hài lòng của Quý khách hàng là niềm vui lớn của chúng tôi.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden h-60 w-120 mx-auto shadow-card relative transform transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-tr from-xuan-primary/20 to-transparent z-10"></div>
              <img
                src="assets/car-service/car-ser-at.jpg"
                alt="Premium Service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Quality Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="rounded-2xl overflow-hidden h-60 w-120 mx-auto shadow-card relative transform transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-tr from-xuan-primary/20 to-transparent z-10"></div>
              <img
                src="assets/car-service/car-ser.jpg"
                alt="Quality Service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="animate-slide-up">
            <div className="flex items-start mb-4">
              <div className="bg-xuan-primary p-2 rounded-full mr-4 shadow-lg">
                <Shield className="h-8 w-8 text-xuan-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-xuan-primary">DỊCH VỤ CHẤT LƯỢNG</h2>
            </div>
            <p className="text-gray-700 leading-relaxed pl-16">
              Chúng tôi đón/ trả hành khách theo yêu cầu tận nơi - đúng giờ. Chính sách hoãn hủy linh hoạt, dễ dàng, minh bạch... đảm bảo tối đa quyền lợi cho quý hành khách.
            </p>
          </div>
        </div>

        {/* 24/7 Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-slide-up">
            <div className="flex items-start mb-4">
              <div className="bg-xuan-primary p-2 rounded-full mr-4 shadow-lg">
                <Clock className="h-8 w-8 text-xuan-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-xuan-primary">PHỤC VỤ 24/7</h2>
            </div>
            <p className="text-gray-700 leading-relaxed pl-16">
              Quý khách có thể đặt xe trực tuyến, đặt qua tổng đài, Zalo hoặc đến hệ thống văn phòng của chúng tôi tại Vũng Tàu để được sử dụng dịch vụ. Quý khách hàng cần dịch vụ xin hãy liên hệ với chúng tôi qua Hotline: 0983 566 979
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden h-60 w-120 mx-auto shadow-card relative transform transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-tr from-xuan-primary/20 to-transparent z-10"></div>
              <img
                src="assets/car-service/car-ser-dem.jpg"
                alt="24/7 Service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
