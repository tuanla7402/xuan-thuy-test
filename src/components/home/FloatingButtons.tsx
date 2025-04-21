import React from "react";
import { Phone } from "lucide-react";
import ZaloIcon from "../icon/Zalo";

declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: any;
  }
}

const FloatingButtons = () => {
  React.useEffect(() => {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/67fe594483106b190ee333bb/1iosopdh6";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode?.insertBefore(s1, s0);
  }, []);

  return (
    <div className="fixed bottom-28 right-14 mr-5 mb-10 flex flex-col space-y-20 z-50">
      <div className="button-container">
        {/* Phone Button */}
        <a
          href="tel:0983566979"
          className="floating-btn bg-xuan-primary hover:bg-xuan-primary/90"
          title="Gọi ngay: 0983 566 979"
        >
          <Phone className="h-6 w-6 text-white" />
          <span className="absolute right-full mr-3 bg-xuan-primary text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Gọi ngay
          </span>
        </a>
      </div>

      <div className="button-container">
        {/* Zalo Button */}
        <a
          href="https://zalo.me/0983566979"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn bg-blue-500 hover:bg-blue-600"
          title="Chat Zalo"
        >
          <ZaloIcon/>
        </a>
      </div>
    </div>
  );
};

export default FloatingButtons;
