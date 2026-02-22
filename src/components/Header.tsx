import { Calendar } from 'lucide-react';
import logo from '../assets/26fb579544545ed52d17ee92cb23dea2cb8e9fd2.png';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#6B1F2B] backdrop-blur-sm border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Kate's Bookkeeping Logo" className="h-16 w-16 invert" />
            <h4 className="text-white text-xl" style={{ fontFamily: "'Lora', serif" }}>Kate's Bookkeeping</h4>
          </div>
          
          <nav className="hidden md:flex items-center gap-10">
            <a href="#about" className="text-white/90 hover:text-white transition-colors text-lg">
              About
            </a>
            <a href="#services" className="text-white/90 hover:text-white transition-colors text-lg">
              Services
            </a>
            <a href="#pricing" className="text-white/90 hover:text-white transition-colors text-lg">
              Plans
            </a>
            <a href="#how-it-works" className="text-white/90 hover:text-white transition-colors text-lg">
              How It Works
            </a>
          </nav>
          
          <a
            href="https://cal.com/katenashbooks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#6B8A9A] text-white px-6 py-2.5 rounded-lg hover:bg-[#5A7686] transition-all duration-200 font-bold"
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">Book Consultation</span>
            <span className="sm:hidden">Book</span>
          </a>
        </div>
      </div>
    </header>
  );
}