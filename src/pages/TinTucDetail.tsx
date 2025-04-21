import React from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/home/FloatingButtons";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const newsDetails = {
  1: {
    title: "Địa điểm du lịch Vũng Tàu",
    date: "14/04/2025",
    time: "09:30",
    images: [
      "https://source.unsplash.com/random/1200x800/?vungtau-beach",
      "https://source.unsplash.com/random/1200x800/?beach-resort",
      "https://source.unsplash.com/random/1200x800/?lighthouse",
      "https://source.unsplash.com/random/1200x800/?beach-sunset",
      "https://source.unsplash.com/random/1200x800/?seafood-restaurant",
    ],
    content: `
    <div class="space-y-4">
      <h1 class="text-black">Địa điểm du lịch Vũng Tàu</h1>

      <h1>1. Bãi biển Vũng Tàu</h1>
      <h3>Bãi Sau (Thùy Vân, Thùy Dương)</h3>

      <div class="my-8">
        <img src="/assets/news/TravelAddress/BS.webp" alt="Bãi biển Vũng Tàu" class="w-full rounded-lg shadow-lg"/>
        <p class="text-sm text-gray-600 mt-2 text-center italic">Bãi biển Vũng Tàu - Điểm đến lý tưởng cho du khách</p>
      </div>

      <p>Nằm ở phía Nam của Vũng Tàu, bãi Sau có bãi cát dài phẳng và bờ biển khá đẹp, nước biển trong. Một số resort nổi tiếng ở đây như Long Cung (bãi Thủy Tiên), Lan Rừng với khung cảnh lãng mạn…</p>
      <p>Theo kinh nghiệm du lịch Vũng Tàu thì Bãi Sau đẹp hơn Bãi Trước với biển trong hơn, sóng vừa phải, lại tập trung nhiều khách sạn và dịch vụ ăn uống, vui chơi.</p>

      <h1>2. Các điểm tham quan không thể bỏ qua ở Vũng Tàu</h1>
      <h3>Tượng Chúa Kitô</h3>

      <div class="my-8">
        <img src="/assets/news/TravelAddress/God.webp" alt="Bãi biển Vũng Tàu" class="w-full rounded-lg shadow-lg"/>
        <p class="text-sm text-gray-600 mt-2 text-center italic">Bãi biển Vũng Tàu - Điểm đến lý tưởng cho du khách</p>
      </div>

      <p>Tọa lạc trên núi Nhỏ, tượng Chúa Ki-tô đứng trên độ cao 170 m, cao 32 m và cánh tay sải dài 18.3 m. Bên trong tượng có 133 bậc thềm để bạn có thể leo lên vai Chúa, nhìn ngắm toàn cảnh Vũng Tàu trên bức tượng Chúa cao nhất châu Á.</p>
      <p><strong>Địa chỉ:</strong> Núi Nhỏ, TP. Vũng Tàu</p>

      <h3>Thích Ca Phật Đài</h3>

      <div class="my-8">
        <img src="/assets/news/TravelAddress/Budda.webp" alt="Bãi biển Vũng Tàu" class="w-full rounded-lg shadow-lg"/>
        <p class="text-sm text-gray-600 mt-2 text-center italic">Bãi biển Vũng Tàu - Điểm đến lý tưởng cho du khách</p>
      </div>

      <p>Nơi đây có tháp Bát Giác cao 19 m thờ xá lợi Phật và tượng Phật Thích Ca khổng lồ ngồi trên tòa sen. Chẳng ngạc nhiên khi Thích Ca Phật Đài là ngôi chùa nổi tiếng nhất của thành phố biển.</p>
      <p><strong>Địa chỉ:</strong> 608 Trần Phú, P.5, TP. Vũng Tàu</p>

      <h3>Bạch Dinh (Villa Blanche)</h3>

      <div class="my-8">
        <img src="/assets/news/TravelAddress/Villa.webp" alt="Bãi biển Vũng Tàu" class="w-full rounded-lg shadow-lg"/>
        <p class="text-sm text-gray-600 mt-2 text-center italic">Bãi biển Vũng Tàu - Điểm đến lý tưởng cho du khách</p>
      </div>

      <p>Tòa nhà được xây dựng theo kiến trúc La Mã, dựa lưng vào núi Lớn này là dinh thự nghỉ mát Toàn quyền Đông Dương Paul Doumer tặng cho con gái. Đây là một trong những địa điểm tham quan thu hút khách du lịch vì trưng bày 19 khẩu thần công và rất nhiều đồ cổ có giá trị.</p>
      <p><strong>Địa chỉ:</strong> 04 Trần Phú, P.1, TP. Vũng Tàu</p>

      <h3>Hải Đăng Vũng Tàu</h3>

      <div class="my-8">
        <img src="/assets/news/TravelAddress/HD.webp" alt="Bãi biển Vũng Tàu" class="w-full rounded-lg shadow-lg"/>
        <p class="text-sm text-gray-600 mt-2 text-center italic">Bãi biển Vũng Tàu - Điểm đến lý tưởng cho du khách</p>
      </div>

      <p>Ngọn hải đăng Vũng Tàu được xây dựng từ năm 1862, theo thiết kế kiểu tháp hình trụ cao 18 m. Đường lên hải đăng là đường núi quanh co, hai bên là rừng cây phủ bóng. Đặc biệt nhất là còn có quán Cô Tiên với hai món trứ danh là trứng lòng đào và sữa chua dẻo mà giá lại cực phải chăng.</p>
      <p><strong>Địa chỉ:</strong> Phường 2, TP. Vũng Tàu</p>

      <h1>3. Địa điểm vui chơi mới ở Vũng Tàu</h1>
      <h3>Nhà úp ngược Upside Down House</h3>
      <p>Mô hình Nhà Úp Ngược Upside Down House Vũng Tàu là một tòa nhà 3 tầng, gồm 2 khu vực tham quan chụp ảnh và quán cà phê. Khu vực tham quan có 7 phòng chụp ảnh, mỗi phòng được trang trí theo các chủ đề khác nhau với nội thất và đồ dùng được mô phỏng giống như một căn nhà bên ngoài thực tế.</p>
      <p><strong>Địa chỉ:</strong> 66 Cô Giang, Phường 4, Thành phố Vũng Tàu</p>
      <p><strong>Giá vé:</strong> 40.000 VND / người</p>

      <h3>Bảo tàng vũ khí cổ Robert Taylor</h3>

      <div class="my-8">
        <img src="/assets/news/TravelAddress/weapon.webp" alt="Bãi biển Vũng Tàu" class="w-full rounded-lg shadow-lg"/>
        <p class="text-sm text-gray-600 mt-2 text-center italic">Bãi biển Vũng Tàu - Điểm đến lý tưởng cho du khách</p>
      </div>

      <p>Bảo tàng có 500 hình nộm với kích thước như người thật, mặc những bộ quân phục tuyệt đẹp, đại diện cho binh lính trên khắp mọi nơi trong nhiều thời đại. Nơi đây còn có hơn 1.200 cây súng và 1.000 cây gươm cùng các di vật khác.</p>
      <p><strong>Địa chỉ:</strong> 98 Trần Hưng Đạo, Phường 1, TP. Vũng Tàu</p>
      <p><strong>Thời gian mở cửa:</strong> 8:00 – 17:00</p>
      <p><strong>Giá vé:</strong> 50.000 VND/ người Việt, 100.000 VND/ người nước ngoài, 25.000 VND / trẻ em từ 6 đến 11 tuổi</p>
    </div>
    `,
  },
  2: {
    title: "Địa điểm ăn uống Vũng Tàu",
    date: "10/04/2025",
    time: "10:00",
    images: [
      "https://source.unsplash.com/random/1200x800/?modern-office",
      "https://source.unsplash.com/random/1200x800/?office-building",
      "https://source.unsplash.com/random/1200x800/?reception-desk",
      "https://source.unsplash.com/random/1200x800/?meeting-room",
      "https://source.unsplash.com/random/1200x800/?office-lounge",
    ],
    content: `
     <h1>Địa điểm ăn uống Vũng Tàu</h1>

<h1>1. Bánh khọt</h1>
<div class="my-8">
    <img src="/assets/news/Food/khot.webp" alt="Bãi biển Vũng Tàu" class="w-full rounded-lg shadow-lg"/>
    <p class="text-sm text-gray-600 mt-2 text-center italic">Bãi biển Vũng Tàu - Điểm đến lý tưởng cho du khách</p>
  </div>
<p>Nhắc đến Vũng Tàu thì phải nhớ đến bánh khọt đầu tiên. Bánh khọt Vũng Tàu có chút khác biệt với bánh khọt miền Nam với bột đổ mỏng, chiên ngập dầu giòn rụm. Bánh khọt được dọn kèm với tôm, chấy tôm, mỡ hành; ăn với nước mắm và rau sống.</p>
<p><strong>Địa chỉ:</strong></p>
<ul>
<li>Quán Gốc Vú Sữa: 14 Nguyễn Trường Tộ</li>
<li>Quán Út Loan: 67 Bà Triệu</li>
<li>Quán Bà Hai: 376/27 đường Lê Lợi</li>
<li>Quán Cây Đa: 21 Lý Thường Kiệt</li>
</ul>

<h1>2. Lẩu cá đuối</h1>
<div class="my-8">
    <img src="/assets/news/Food/lau.webp" alt="Bãi biển Vũng Tàu" class="w-full rounded-lg shadow-lg"/>
    <p class="text-sm text-gray-600 mt-2 text-center italic">Bãi biển Vũng Tàu - Điểm đến lý tưởng cho du khách</p>
  </div>
<p>Lẩu cá đuối là một món hải sản giá bình dân của Vũng Tàu. Còn gì tuyệt hơn sau một buổi trưa nóng được "làm" một nồi lẩu chua, đầy ăn măng chua, bắp chuối, và cá đuối mềm ngọt. Các quán lẩu cá đuối nổi tiếng đa số tập trung trên đường Trương Công Định.</p>
<p><strong>Địa chỉ:</strong></p>
<ul>
<li>Quán Hoàng Minh: 40 – 44 Trương Công Định</li>
<li>Quán Trận: 42 Nguyễn Trường Tộ, Phường 3</li>
<li>Quán 7 Lượm: 37 Nguyễn Trường Tộ, Phường 3</li>
</ul>

<h1>3. Kem Alibaba</h1>
<div class="my-8">
    <img src="/assets/news/Food/kem.webp" alt="Bãi biển Vũng Tàu" class="w-full rounded-lg shadow-lg"/>
    <p class="text-sm text-gray-600 mt-2 text-center italic">Bãi biển Vũng Tàu - Điểm đến lý tưởng cho du khách</p>
  </div>
<p>Chỉ là 1 kios nhỏ nhưng kem Alibaba khá nổi tiếng. Kem ở đây rất ngon, thơm, dẻo, béo và có mùi vị riêng biệt của từng loại. Giá của kem cây là 20.000 VND/1 viên kem và kem ly là 28.000 VND/2 viên kem.</p>
<p><strong>Địa chỉ:</strong> Trước cổng cáp treo Hồ Mây, đường Trần Phú, Phường 1</p>

<h1>4. Bánh bông lan trứng muối</h1>
<div class="my-8">
    <img src="/assets/news/Food/bonglan.webp" alt="Bãi biển Vũng Tàu" class="w-full rounded-lg shadow-lg"/>
    <p class="text-sm text-gray-600 mt-2 text-center italic">Bãi biển Vũng Tàu - Điểm đến lý tưởng cho du khách</p>
  </div>
<p>Một món ăn vặt đình đám khác mà ai du lịch Vũng Tàu cũng muốn thử là bánh bông lan trứng muối. Không quá cầu kỳ, món bánh thu hút bởi mùi bánh thơm ngay tại lò, bánh xốp mềm, vị mằn mặn với đủ loại nhân đa dạng như trứng muối, phô mai, chà bông…</p>
<p><strong>Địa chỉ:</strong></p>
<ul>
<li>Tiệm Gốc cột điện: 17 Nguyễn Trường Tộ</li>
<li>Tiệm Ngọc Hiệp: 11 Đồ Chiểu</li>
<li>Tiệm Tấn Phát: 129 Lê Lai, Phường 3</li>
</ul>

<h1>5. Hải sản</h1>
<div class="my-8">
    <img src="/assets/news/Food/haisan.jpg" alt="Bãi biển Vũng Tàu" class="w-full rounded-lg shadow-lg"/>
    <p class="text-sm text-gray-600 mt-2 text-center italic">Bãi biển Vũng Tàu - Điểm đến lý tưởng cho du khách</p>
  </div>
<p>Đến thành phố biển thì hẳn phải ăn hải sản rồi. Khắp mọi nơi ở Vũng Tàu bạn đều có thể tìm được các quán hải sản hấp dẫn. Tuy nhiên theo các kinh nghiệm du lịch Vũng Tàu chia sẻ thì đây là các địa chỉ ăn hải sản hấp dẫn nhất:</p>
<ul>
<li>Ốc Năm Tầng: A12 Nguyễn Thái Học, P.7</li>
<li>Khu hải sản sau lưng khách sạn Imperial</li>
<li>Hải sản Gành Hào: 03 Trần Phú, Phường 5</li>
<li>Quán nướng Cô Nên: 06 Trần Phú</li>
</ul>

<h1>6. Món ăn khác</h1>
<p>Ngoài ra, một số món ăn khác bạn có thể thử ở Vũng Tàu như bánh canh, bún súng, hủ tiếu mỳ, gỏi cá mai… cũng rất ngon. Các địa điểm mà bạn nên tham khảo:</p>
<ul>
<li>Cháo hàu trên đường Trần Đồng (khoảng 30.000 VND/phần)</li>
<li>Cơm tấm Hướng Dương trên đường Nam Kỳ Khởi Nghĩa (30.000 VND/phần)</li>
<li>Cơm niêu Hoa Sữa, Tập Tàng có giá niêm yết.</li>
</ul>

<h1>7. Quán cà phê</h1>
<p>Các quán cà phê dọc Bãi Trước như Ô Cấp, The Heaven, Mr. Két…</p>

<h1>8. Chợ đêm Vũng Tàu</h1>
<p>Còn nếu chưa biết phải ăn món gì thì hãy ghé thăm chợ đêm Vũng Tàu – nơi tập trung các "của ngon vật lạ" của Vũng Tàu. Đừng quên tham khảo bí kíp đánh chén no say ở chợ đêm Vũng Tàu để càn quét hết các món ngon nơi đây nhé!</p>
    `,
  },
  3: {
    title: "Vũng Tàu Có Gì Chơi?",
    date: "05/04/2025",
    time: "11:30",
    images: [
      "https://source.unsplash.com/random/1200x800/?luxury-car",
      "https://source.unsplash.com/random/1200x800/?business-car",
      "https://source.unsplash.com/random/1200x800/?car-interior",
      "https://source.unsplash.com/random/1200x800/?car-fleet",
      "https://source.unsplash.com/random/1200x800/?executive-car",
    ],
    content: `
    <h1>Vũng Tàu Có Gì Chơi?</h1>

  <h1>1. Tận Hưởng Kỳ Nghỉ "Chữa Lành" Ở Minera Hot Springs Bình Châu</h1>
  <div class="my-8">
    <img src="/assets/news/Activity/egg.webp" alt="Bãi biển Vũng Tàu" class="w-full rounded-lg shadow-lg"/>
    <p class="text-sm text-gray-600 mt-2 text-center italic">Bãi biển Vũng Tàu - Điểm đến lý tưởng cho du khách</p>
  </div>
  <p>Minera Hot Springs Bình Châu nằm cách thành phố Hồ Chí Minh chỉ khoảng 2 giờ đi xe, là tổ hợp du lịch theo mô hình Wellness, kết hợp tham quan công viên rừng và tắm suối khoáng nóng thiên nhiên đầu tiên tại Việt Nam. Du khách có cơ hội trải nghiệm dịch vụ spa theo chủ đề đa quốc gia, luộc trứng ở hồ nước nóng, tận hưởng 50 kiểu tắm bùn khoáng theo 7 phong cách khác nhau, vui chơi ở vườn thú, mở tiệc nướng BBQ hay thưởng thức ẩm thực Vũng Tàu thơm ngon.</p>

  <h1>2. Ăn Uống Thả Ga Ở Làng Bè Long Sơn</h1>
  <div class="my-8">
    <img src="/assets/news/Activity/LS.webp" alt="Bãi biển Vũng Tàu" class="w-full rounded-lg shadow-lg"/>
    <p class="text-sm text-gray-600 mt-2 text-center italic">Bãi biển Vũng Tàu - Điểm đến lý tưởng cho du khách</p>
  </div>
  <p>Khởi hành từ bến thuyền Vũng Tàu Marina, du khách có thể chiêm ngưỡng khung cảnh nước non hữu tình và nhìn ngắm cầu Chà Và. Hải sản được nuôi trồng ở Làng Bè Long Sơn rất phong phú, đặc biệt là sò huyết, hàu và các loại cá. Thưởng thức các món ngon dân dã cùng bạn bè, người thân sẽ thêm phần đậm vị.</p>

  <h1>3. Hoà Mình Vào Thiên Nhiên Đảo Ngọc</h1>
  <div class="my-8">
    <img src="/assets/news/Activity/DN.webp" alt="Bãi biển Vũng Tàu" class="w-full rounded-lg shadow-lg"/>
    <p class="text-sm text-gray-600 mt-2 text-center italic">Bãi biển Vũng Tàu - Điểm đến lý tưởng cho du khách</p>
  </div>
  <p>Đảo Ngọc, còn được biết đến với cái tên Cù Lao Bãi Ngựa, là một địa điểm du lịch Vũng Tàu với không gian nghỉ ngơi trong lành, mặt nước lặng sóng và dãy nhà tranh. Du khách có thể bơi lội, chèo thuyền Kayak, câu cá hay thư giãn cùng những người thân yêu.</p>

  <h1>4. Nghỉ Dưỡng Ở Hồ Tràm, Vũng Tàu</h1>
  <div class="my-8">
    <img src="/assets/news/Activity/HT.webp" alt="Bãi biển Vũng Tàu" class="w-full rounded-lg shadow-lg"/>
    <p class="text-sm text-gray-600 mt-2 text-center italic">Bãi biển Vũng Tàu - Điểm đến lý tưởng cho du khách</p>
  </div>
  <p>Cách trung tâm thành phố Vũng Tàu khoảng 30km về phía Đông, Hồ Tràm sở hữu nét đẹp thơ mộng với đường bờ biển cát vàng dịu dàng ôm lấy đại dương xanh và hàng dừa cao vút. Hồ Tràm còn là nơi tập trung nhiều khách sạn, khu nghỉ dưỡng cao cấp với chất lượng dịch vụ hạng nhất và giá thành thân thiện.</p>

  <h1>5. Chụp Ảnh Check-in Ở Vũng Tàu Marina</h1>
  <div class="my-8">
    <img src="/assets/news/Activity/Marina.webp" alt="Bãi biển Vũng Tàu" class="w-full rounded-lg shadow-lg"/>
    <p class="text-sm text-gray-600 mt-2 text-center italic">Bãi biển Vũng Tàu - Điểm đến lý tưởng cho du khách</p>
  </div>
  <p>Bến thuyền Vũng Tàu Marina là điểm xuất phát của nhiều hành trình khám phá Vũng Tàu hấp dẫn như Đảo Ngọc hay Đảo Gò Găng. Nơi đây còn là "tọa độ sống ảo" được nhiều du khách yêu thích với khung cảnh đẹp như mơ của mây trắng, biển xanh, núi non trùng điệp và những cánh thuyền buồm Catamaran.</p>
    `,
  },
};

const TinTucDetail = () => {
  const { id } = useParams();
  const news = newsDetails[Number(id)];

  if (!news) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-center text-xuan-primary">
              Không tìm thấy bài viết
            </h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link
              to="/tin-tuc"
              className="inline-flex items-center text-xuan-primary hover:text-a54a00 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Quay lại danh sách tin tức
            </Link>
          </div>

          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold text-xuan-primary mb-4">
                {news.title}
              </h1>

              <div className="flex items-center gap-4 text-gray-600 mb-6">
                <div className="flex items-center">
                  <CalendarDays className="h-5 w-5 mr-2" />
                  <span>{news.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{news.time}</span>
                </div>
              </div>

              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: news.content }}
              />
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default TinTucDetail;
