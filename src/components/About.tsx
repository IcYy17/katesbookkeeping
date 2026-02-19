import katePhoto from 'figma:asset/4750205eb49dda48758e33109eb62c5f8f3d4bfe.png';
import { Mail, Linkedin, Facebook } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="px-6 py-16 md:py-20 bg-[#EFE8DC] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-[#6B1F2B] mb-8 text-4xl md:text-5xl" style={{ fontFamily: 'Lora, serif' }}>
              Your finances, in good hands
            </h2>
            <div className="space-y-4 text-[#5A5A5A] leading-relaxed text-lg">
              <p>
                Bookkeeping is important... but rarely enjoyable. That's why I'm here! I deliver clear communication, accurate books, and dependable support.
              </p>
              <p>
                Outside of bookkeeping, I love weightlifting, reading, and enjoying Utah outdoors with my husband.
              </p>
              <p>
                You can feel confident knowing your books are organized, up to date, and handled with care. I can't wait to connect with you!
              </p>
            </div>
            <div className="flex gap-6 mt-8 items-center">
              <a href="mailto:katenashbooks@gmail.com" className="text-[#6B1F2B] hover:text-[#5A5A5A] transition-colors">
                <Mail size={30} />
              </a>
              <a href="https://www.linkedin.com/in/kate-nash-337529221" target="_blank" rel="noopener noreferrer" className="text-[#6B1F2B] hover:text-[#5A5A5A] transition-colors">
                <Linkedin size={30} />
              </a>
              <a href="https://www.facebook.com/kateinash" target="_blank" rel="noopener noreferrer" className="text-[#6B1F2B] hover:text-[#5A5A5A] transition-colors -ml-2">
                <Facebook size={30} />
              </a>
            </div>
          </div>
          
          <div>
            <img 
              src={katePhoto} 
              alt="Kate - Professional Bookkeeper" 
              className="rounded-2xl shadow-lg w-full h-auto object-cover max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}