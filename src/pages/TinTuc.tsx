
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/home/FloatingButtons';
import { CalendarDays, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const news = [
  {
    id: 1,
    title: 'Địa điểm du lịch Vũng Tàu',
    date: '14/04/2025',
    excerpt: '1. Bãi biển Vũng Tàu Bãi Sau (Thùy Vân, Thùy Dương) Nằm ở phía Nam của Vũng Tàu, bãi Sau có bãi cát dài phẳng và bờ biển khá đẹp, nước biển trong. Một số resort nổi...',
    image: 'assets/news/TravelAddress/Villa.webp'
  },
  {
    id: 2,
    title: 'Địa điểm ăn uống Vũng Tàu',
    date: '10/04/2025',
    excerpt: 'Bánh khọt Nhắc đến Vũng Tàu thì phải nhớ đến bánh khọt đầu tiên. Bánh khọt Vũng Tàu có chút khác biệt với bánh khọt miền Nam với bột đổ mỏng, chiên ngập dầu giòn rụm. Bánh...',
    image: 'assets/news/Food/khot.webp'
  },
  {
    id: 3,
    title: 'Vũng Tàu Có Gì Chơi?',
    date: '05/04/2025',
    excerpt: 'Vũng Tàu Có Gì Chơi? Các Hoạt Động Du Lịch Vũng Tàu Bạn Không Nên Bỏ Lỡ 1. Tận Hưởng Kỳ Nghỉ “Chữa Lành” Ở  Minera Hot Springs Bình Châu Minera Hot Springs Bình Châu nằm cách thành...',
    image: 'assets/news/Activity/HT.webp'
  }
];

const TinTuc = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-10 text-xuan-primary">TIN TỨC & SỰ KIỆN</h1>
          
          {/* News List */}
          <h2 className="text-2xl font-bold text-xuan-primary mb-6">TIN TỨC MỚI NHẤT</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {news.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center text-gray-500 mb-2">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-xuan-primary mb-2">{item.title}</h3>
                  <p className="text-gray-700 mb-3 text-sm line-clamp-2">{item.excerpt}</p>
                  <Link to={`/tin-tuc/${item.id}`} className="inline-flex items-center text-xuan-secondary font-semibold hover:underline">
                    Xem chi tiết
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default TinTuc;
