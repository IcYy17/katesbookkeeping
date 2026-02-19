import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="px-6 py-16 md:py-20 bg-[#6B8A9A] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full opacity-5 blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-white mb-6 text-5xl md:text-6xl leading-tight" style={{ fontFamily: 'Lora, serif' }}>
          Ready to get your books in order?
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
          Let's talk about your business and how I can help. Book a free consultation — 
          no pressure, just a friendly conversation about your goals.
        </p>
        
        <a
          href="https://cal.com/katenashbooks"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-[#6B8A9A] px-8 py-4 rounded-xl hover:bg-[#F4F6F8] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
        >
          Schedule Your Free Call
          <ArrowRight className="w-5 h-5" />
        </a>
        
        <p className="text-white/80 mt-6 text-sm">
          No commitment required • 30-minute call • Let's see if we're a good fit
        </p>
      </div>
    </section>
  );
}