import { ArrowRight } from "lucide-react";
import { motion } from 'motion/react';
import logo from 'figma:asset/26fb579544545ed52d17ee92cb23dea2cb8e9fd2.png';

export function Hero() {
  return (
    <section className="relative px-6 py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFE8DC] rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#6B1F2B] rounded-full opacity-10 blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-full mx-auto px-4">
          <div className="relative flex flex-col items-center justify-center mb-10 min-h-[280px] md:min-h-[320px]">
            {/* Logo in background */}
            <img src={logo} alt="Kate's Bookkeeping Logo" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[360px] w-[360px] md:h-[460px] md:w-[460px] object-contain opacity-20" style={{ filter: 'brightness(0) saturate(100%) invert(70%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)' }} />
            
            {/* Text content on top */}
            <div className="text-center relative z-10">
              <motion.h1
                className="text-[#6B1F2B] text-4xl md:text-6xl leading-tight mb-6"
                style={{ fontFamily: "Lora, serif" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "linear" }}
              >
                Behind on your books?
                <br />
                <span className="inline-block">
                  Let's fix that.
                </span>
              </motion.h1>

              <p className="text-lg md:text-xl text-[#5A5A5A] leading-relaxed max-w-4xl mx-auto">
                Professional bookkeeping services for small business owners, freelancers, and creatives — bringing clarity and peace of mind.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://cal.com/katenashbooks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#6B8A9A] text-white px-8 py-4 rounded-xl hover:bg-[#5A7686] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-white text-[#6B8A9A] px-8 py-4 rounded-xl hover:bg-[#F4F6F8] transition-all duration-200 border-2 border-[#6B8A9A]"
            >
              See Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}