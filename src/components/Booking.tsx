export function Booking() {
  return (
    <section id="booking" className="px-4 sm:px-6 py-16 md:py-20 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#6B1F2B] mb-8 text-4xl md:text-5xl text-center" style={{ fontFamily: 'Lora, serif' }}>
          Book a Free Consultation
        </h2>
        <div className="shadow-lg border border-[#EFE8DC] min-h-[650px]">
          <iframe
            src="https://cal.com/katenashbooks"
            title="Book a consultation with Kate"
            className="w-full h-[750px] border-0 rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
