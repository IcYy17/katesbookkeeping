import { Settings, Link2, BookOpen, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Settings,
    title: 'Agency Onboarding & Setup',
    description: 'We get you set up in QuickBooks Online. If your books need cleanup, I review your existing records, correct inconsistencies, and build a clean structure that supports retainers, projects, and contractor-heavy operations.'
  },
  {
    icon: Link2,
    title: 'Accounts Connected & Organized',
    description: 'Your bank accounts, credit cards, and payment platforms are synced correctly. Income and expenses are categorized so your numbers reflect real activity without clutter or duplication.'
  },
  {
    icon: BookOpen,
    title: 'Monthly Bookkeeping & Reconciliation',
    description: 'Each month, your accounts are reconciled, transactions are reviewed, and your books are kept current. No chasing receipts. No guesswork. Just consistent, dependable bookkeeping.'
  },
  {
    icon: BarChart3,
    title: 'Clear Reporting & Ongoing Support',
    description: 'You receive financial reports that make sense. I explain what matters, answer questions, and help you understand how your numbers support growth and better decision-making.'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-16 md:py-20 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#6B1F2B] mb-4 text-4xl md:text-5xl" style={{ fontFamily: 'Lora, serif' }}>
            What does it look like?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-200 border border-[#EFE8DC]/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F4F6F8] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#6B8A9A]" />
                  </div>
                  <div>
                    <h4 className="text-[#6B1F2B] mb-3 font-semibold">{step.title}</h4>
                    <p className="text-[#5A5A5A] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
