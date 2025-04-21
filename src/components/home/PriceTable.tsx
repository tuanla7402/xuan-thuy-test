import React from 'react';

const routes = [
  {
    id: 1,
    name: 'VŨNG TÀU <=> SÀI GÒN',
    prices: {
      car4: { oneWay: '850.000 vnđ', roundTrip: '1.400.000 vnđ' },
      car7: { oneWay: '950.000 vnđ', roundTrip: '1.600.000 vnđ' },
      car9: { oneWay: '2.000.000 vnđ', roundTrip: '3.600.000 vnđ' },
      car16: { oneWay: '2.000.000 vnđ', roundTrip: '3.700.000 vnđ' },
    },
  },
  {
    id: 2,
    name: 'VŨNG TÀU <=> ĐỒNG NAI',
    prices: {
      car4: { oneWay: '900.000 vnđ', roundTrip: '1.500.000 vnđ' },
      car7: { oneWay: '950.000 vnđ', roundTrip: '1.650.000 vnđ' },
      car9: { oneWay: '2.100.000 vnđ', roundTrip: '3.800.000 vnđ' },
      car16: { oneWay: '2.200.000 vnđ', roundTrip: '3.900.000 vnđ' },
    },
  },
  {
    id: 3,
    name: 'VŨNG TÀU <=> BÌNH DƯƠNG',
    prices: {
      car4: { oneWay: '900.000 vnđ', roundTrip: '1.500.000 vnđ' },
      car7: { oneWay: '950.000 vnđ', roundTrip: '1.650.000 vnđ' },
      car9: { oneWay: '2.100.000 vnđ', roundTrip: '3.800.000 vnđ' },
      car16: { oneWay: '2.200.000 vnđ', roundTrip: '3.900.000 vnđ' },
    },
  },
  {
    id: 4,
    name: 'SÀI GÒN <=> BÌNH DƯƠNG',
    prices: {
      car4: { oneWay: 'Liên hệ', roundTrip: 'Liên hệ' },
      car7: { oneWay: 'Liên hệ', roundTrip: 'Liên hệ' },
      car9: { oneWay: 'Liên hệ', roundTrip: 'Liên hệ' },
      car16: { oneWay: 'Liên hệ', roundTrip: 'Liên hệ' },
    },
  },
];

const PriceTable = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-center mb-5 text-xuan-primary relative pb-4 inline-block mx-auto">
          BẢNG GIÁ XE HỢP ĐỒNG LIÊN TỈNH
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-xuan-secondary rounded-full"></span>
        </h2>
        
        <p className="text-lg font-semibold text-red-600 mb-5">
          <strong>Lưu ý</strong>: Bảng giá dưới đây chỉ dành cho khách thuê xe trọn gói, <strong>không bán vé lẻ</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {routes.map((route) => (
            <div key={route.id} className="bg-white rounded-2xl shadow-card overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover">
              <div className="bg-xuan-primary text-white p-5 text-center">
                <h3 className="text-xl font-medium mb-1 text-white">HÀNH TRÌNH</h3>
                <p className="text-lg font-bold mb-1 text-white">{route.name}</p>
              </div>
              
              <div className="p-6">
                {/* 4 seats */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-xuan-primary mb-3 flex items-center">
                    <span className="flex items-center justify-center bg-xuan-primary text-white w-8 h-8 rounded-full mr-2 text-sm">4</span>
                    XE 4 CHỖ
                  </h4>
                  <div className="flex justify-between items-center mb-3 border-b border-gray-100 pb-3">
                    <span className="text-gray-600">1 Chiều</span>
                    <span className="font-bold text-xuan-secondary">{route.prices.car4.oneWay}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">2 Chiều</span>
                    <span className="font-bold text-xuan-secondary">{route.prices.car4.roundTrip}</span>
                  </div>
                </div>
                
                {/* 7 seats */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-xuan-primary mb-3 flex items-center">
                    <span className="flex items-center justify-center bg-xuan-primary text-white w-8 h-8 rounded-full mr-2 text-sm">7</span>
                    XE 7 CHỖ
                  </h4>
                  <div className="flex justify-between items-center mb-3 border-b border-gray-100 pb-3">
                    <span className="text-gray-600">1 Chiều</span>
                    <span className="font-bold text-xuan-secondary">{route.prices.car7.oneWay}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">2 Chiều</span>
                    <span className="font-bold text-xuan-secondary">{route.prices.car7.roundTrip}</span>
                  </div>
                </div>
                
                {/* 9 seats */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-xuan-primary mb-3 flex items-center">
                    <span className="flex items-center justify-center bg-xuan-primary text-white w-8 h-8 rounded-full mr-2 text-sm">9</span>
                    XE 9 CHỖ
                  </h4>
                  <div className="flex justify-between items-center mb-3 border-b border-gray-100 pb-3">
                    <span className="text-gray-600">1 Chiều</span>
                    <span className="font-bold text-xuan-secondary">{route.prices.car9.oneWay}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">2 Chiều</span>
                    <span className="font-bold text-xuan-secondary">{route.prices.car9.roundTrip}</span>
                  </div>
                </div>
                
                {/* 16 seats */}
                <div>
                  <h4 className="text-lg font-bold text-xuan-primary mb-3 flex items-center">
                    <span className="flex items-center justify-center bg-xuan-primary text-white w-8 h-8 rounded-full mr-2 text-sm">16</span>
                    XE 16 CHỖ
                  </h4>
                  <div className="flex justify-between items-center mb-3 border-b border-gray-100 pb-3">
                    <span className="text-gray-600">1 Chiều</span>
                    <span className="font-bold text-xuan-secondary">{route.prices.car16.oneWay}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">2 Chiều</span>
                    <span className="font-bold text-xuan-secondary">{route.prices.car16.roundTrip}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 text-center bg-gray-50">
                <a href="tel:0983566979" className="btn-primary inline-block">
                  Đặt Xe Ngay
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceTable;
