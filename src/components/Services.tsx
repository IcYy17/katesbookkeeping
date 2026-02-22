import { BookOpen, TrendingUp, Users } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'Monthly Bookkeeping & Reporting',
    description: 'Accurate books every month. Clear reports that support confident decisions.'
  },
  {
    icon: TrendingUp,
    title: 'Revenue & Expense Visibility',
    description: 'Retainers and expenses tracked correctly. See client profitability and margins at a glance.'
  },
  {
    icon: Users,
    title: 'Real People, Real Support',
    description: 'Direct access to a bookkeeper who gets your agency. Real support, no chatbots.'
  }
];

export function Services() {
  return (
    <section id="services" className="px-6 py-16 md:py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#6B1F2B] mb-4 text-4xl md:text-5xl" style={{ fontFamily: 'Lora, serif' }}>
            How I Support Your Agency
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-[#F4F6F8] rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#6B8A9A]" />
                </div>
                <h4 className="text-[#6B1F2B] mb-3">{service.title}</h4>
                <p className="text-[#5A5A5A] leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}