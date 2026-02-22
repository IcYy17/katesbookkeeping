import { Shield, Heart, Award } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="px-6 py-16 bg-[#EFE8DC]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Shield className="w-8 h-8 text-[#6B1F2B] mb-3" />
            <h4 className="text-[#6B1F2B] mb-2">Professional</h4>
            <p className="text-[#5A5A5A] text-sm">
              Certified bookkeeper ready to deliver clear financials for marketing agencies
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Heart className="w-8 h-8 text-[#6B1F2B] mb-3" />
            <h4 className="text-[#6B1F2B] mb-2">Personal</h4>
            <p className="text-[#5A5A5A] text-sm">
              One-on-one attention and care for every client, every month
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Award className="w-8 h-8 text-[#6B1F2B] mb-3" />
            <h4 className="text-[#6B1F2B] mb-2">Reliable</h4>
            <p className="text-[#5A5A5A] text-sm">
              Confidential, precise bookkeeping built for marketing and creative agencies
            </p>
          </div>
        </div>
        
        <div className="border-t border-[#5A5A5A]/20 pt-8 text-center">
          <h3 className="text-[#6B1F2B] mb-6">Kate's Bookkeeping</h3>
          
          <a
            href="https://cal.com/katenashbooks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#6B8A9A] hover:text-[#5A7686] underline underline-offset-4 mb-8"
          >
            Book a Consultation
          </a>
          
          <p className="text-[#5A5A5A]/70 text-sm">
            © {currentYear} Kate's Bookkeeping. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}