import { Check, Star } from 'lucide-react';
import { motion } from 'motion/react';

const plans = [
  {
    name: 'Starter',
    //price: '$325',
    //period: '/month',
    description: 'Best for small agencies with low transaction volume',
    features: [
      'Monthly bank & credit card reconciliation',
      'Up to 75 transactions per month',
      'Monthly financial reports (Profit & Loss, Balance Sheet)',
      'Includes 1 bank account & 1 credit card',
      'Email support',
      'All software fees included'
    ],
    popular: false
  },
  {
    name: 'Professional',
    //price: '$575',
    //period: '/month',
    description: 'Best for agencies managing multiple clients and contractors',
    features: [
      'Everything in Starter',
      'Up to 200 transactions per month',
      'Multiple bank & credit card accounts',
      'Monthly 30-minute Zoom financial review (Profit & Loss, Balance Sheet)',
      'Guidance on cash flow & spending trends'
    ],
    popular: true
  },
  {
    name: 'Premium',
    //price: '$850',
    //period: '/month',
    description: 'Best for growing teams with complex operations',
    features: [
      'Everything in Starter & Professional',
      'Up to 400 transactions per month',
      'Priority email support',
      'Monthly 45-60 minute Zoom call',
      'Light cleanup included (up to 1 hour/month)'
    ],
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-16 md:py-20 bg-[#EFE8DC] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#6B1F2B] mb-4 text-5xl md:text-6xl" style={{ fontFamily: 'Lora, serif' }}>
            Simple, transparent plans
          </h2>
          <p className="text-lg text-[#5A5A5A] max-w-2xl mx-auto italic mt-6">
            Book a free consultation for pricing details.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1
              }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: "linear"
              }}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-200 relative ${
                plan.popular ? 'ring-2 ring-[#6B8A9A] scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#6B8A9A] text-white px-4 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">Most Popular</span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-[#6B1F2B] mb-2 text-2xl md:text-3xl font-extrabold tracking-tight">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-semibold text-[#2D2D2D]">{plan.price}</span>
                  <span className="text-[#5A5A5A]">{plan.period}</span>
                </div>
                <p className="text-[#5A5A5A]">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#6B8A9A] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2D2D2D]">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://cal.com/katenashbooks"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center px-6 py-3 rounded-xl transition-all duration-200 ${
                  plan.popular
                    ? 'bg-[#6B8A9A] text-white hover:bg-[#5A7686] shadow-md hover:shadow-lg'
                    : 'bg-[#F4F6F8] text-[#6B8A9A] hover:bg-[#EFE8DC]'
                }`}
              >
                Book a Consultation
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
