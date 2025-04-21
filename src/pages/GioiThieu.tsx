
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/home/FloatingButtons';

const GioiThieu = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-10 text-xuan-primary">GIỚI THIỆU</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-xuan-primary mb-4">VỀ CHÚNG TÔI</h2>
            <p className="mb-4">
              Xe Hợp Đồng Xuân Thủy là đơn vị hàng đầu trong lĩnh vực cung cấp dịch vụ xe hợp đồng tại Vũng Tàu và các tỉnh lân cận. Với đội xe đa dạng từ 4 chỗ đến 16 chỗ, chúng tôi tự hào mang đến dịch vụ vận chuyển an toàn, tiện nghi và giá cả hợp lý.
            </p>
            <p className="mb-4">
              Thành lập và phát triển trong nhiều năm qua, Xe Hợp Đồng Xuân Thủy đã trở thành đối tác đáng tin cậy của nhiều cá nhân, tổ chức trong và ngoài tỉnh Bà Rịa - Vũng Tàu.
            </p>
            <p>
              Chúng tôi không ngừng nỗ lực nâng cao chất lượng dịch vụ, đầu tư vào đội xe hiện đại và đào tạo đội ngũ tài xế chuyên nghiệp để đáp ứng tốt nhất nhu cầu của quý khách hàng.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-xuan-primary mb-4">TẦM NHÌN</h2>
              <p>
                Trở thành đơn vị hàng đầu trong lĩnh vực cung cấp dịch vụ xe hợp đồng tại khu vực phía Nam, mang đến trải nghiệm di chuyển an toàn, tiện nghi và chuyên nghiệp cho khách hàng.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-xuan-primary mb-4">SỨ MỆNH</h2>
              <p>
                Cung cấp dịch vụ vận chuyển chất lượng cao với giá cả hợp lý, đáp ứng đa dạng nhu cầu di chuyển của khách hàng. Chúng tôi cam kết mang đến sự hài lòng tuyệt đối qua từng chuyến đi.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-xuan-primary mb-4">GIÁ TRỊ CỐT LÕI</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <h3 className="text-xl font-semibold text-xuan-primary mb-3">AN TOÀN</h3>
                <p>
                  An toàn của khách hàng là ưu tiên hàng đầu. Chúng tôi đảm bảo xe luôn trong tình trạng tốt và tài xế tuân thủ nghiêm ngặt quy tắc giao thông.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <h3 className="text-xl font-semibold text-xuan-primary mb-3">CHUYÊN NGHIỆP</h3>
                <p>
                  Đội ngũ nhân viên và tài xế được đào tạo bài bản, phục vụ khách hàng với thái độ chuyên nghiệp, tận tâm.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <h3 className="text-xl font-semibold text-xuan-primary mb-3">TIỆN NGHI</h3>
                <p>
                  Các phương tiện của chúng tôi được trang bị đầy đủ tiện nghi, đảm bảo trải nghiệm thoải mái cho khách hàng trong suốt hành trình.
                </p>
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

export default GioiThieu;
