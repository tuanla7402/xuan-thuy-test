import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GioiThieu from "./pages/GioiThieu";
import DichVu from "./pages/DichVu";
import TinTuc from "./pages/TinTuc";
import LienHe from "./pages/LienHe";
import NotFound from "./pages/NotFound";
import TinTucDetail from "./pages/TinTucDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gioi-thieu" element={<GioiThieu />} />
          <Route path="/dich-vu" element={<DichVu />} />
          <Route path="/tin-tuc" element={<TinTuc />} />
          <Route path="/tin-tuc/:id" element={<TinTucDetail />} />
          <Route path="/lien-he" element={<LienHe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
