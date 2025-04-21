
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Banner from '@/components/home/Banner';
import Introduction from '@/components/home/Introduction';
import PriceTable from '@/components/home/PriceTable';
import Features from '@/components/home/Features';
import Gallery from '@/components/home/Gallery';
import FloatingButtons from '@/components/home/FloatingButtons';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Banner />
        <Introduction />
        <PriceTable />
        <Features />
        <Gallery />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
