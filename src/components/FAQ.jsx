import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { HelpCircle, MessageCircle, ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'ARE YOU LICENSED AND INSURED?',
    answer:
      'Yes. The WashFather is fully licensed and insured in New York State. We carry general liability and workers\' comp — protecting you and your property on every job.',
  },
  {
    question: 'WHAT IS SOFT WASHING?',
    answer:
      'Soft washing uses low pressure and biodegradable cleaning solutions to safely remove mold, algae, and staining from delicate surfaces like roofs, siding, and painted wood — without the damage high-pressure can cause.',
  },
  {
    question: 'WILL POWER WASHING DAMAGE MY SURFACES?',
    answer:
      'Not when done right — and we always do it right. We adjust pressure levels and use soft washing techniques for delicate surfaces like vinyl siding, wood decks, and painted areas. Our crew is trained to match the right method to every material.',
  },
  {
    question: 'HOW LONG DOES A TYPICAL JOB TAKE?',
    answer:
      'Most residential jobs are completed in 3–6 hours. Larger properties or commercial projects may take a full day. We\'ll give you a clear time estimate during your free consultation so you can plan accordingly.',
  },
  {
    question: 'DO I NEED TO BE HOME DURING THE SERVICE?',
    answer:
      'Not necessarily. As long as we have access to the areas being cleaned and a working outdoor water connection, we can get the job done. We\'ll send you before-and-after photos when we\'re finished.',
  },
  {
    question: 'WHAT AREAS DO YOU SERVE?',
    answer:
      'We serve most of Long Island, NY, including all of Nassau County and limited parts of Suffolk County. Not sure if you\'re in our service area? Give us a call — we\'re happy to check.',
  },
  {
    question: 'DO YOU OFFER RECURRING SERVICE PLANS?',
    answer:
      'Absolutely. Many of our clients schedule quarterly or biannual cleanings to keep their properties looking sharp year-round. Recurring customers get priority scheduling and discounted rates.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="section-padding relative bg-[var(--color-bg-secondary)] flex justify-center">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />

      <div className="max-w-7xl w-full px-6 relative">
        <div className="mb-16 reveal flex flex-col items-center text-center">
          <span className="text-xs font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4">
            Intel &amp; Logistics
          </span>
          <h2 className="font-bebas text-[var(--color-text-primary)]" style={{fontSize: 'clamp(3rem, 7vw, 6rem)'}}>
            INTEL &amp; LOGISTICS
          </h2>
        </div>

        <div className="flex justify-center reveal">
          <AccordionPrimitive.Root
            type="single"
            collapsible
            className="space-y-4 w-full max-w-3xl"
          >
            {faqs.map((faq, index) => (
              <AccordionPrimitive.Item
                key={index}
                value={`item-${index}`}
                className="rounded-2xl border border-[var(--color-border)] overflow-hidden transition-colors duration-300 data-[state=open]:border-[var(--color-accent)]/30"
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="group flex flex-1 items-center justify-between gap-4 px-6 py-5 md:px-8 md:py-6 text-left bg-[var(--color-bg-card)]/50 hover:bg-[var(--color-bg-card)] transition-all duration-300 data-[state=open]:bg-[var(--color-bg-card)] focus-visible:outline-none w-full">
                    <div className="flex items-center gap-4">
                      <HelpCircle className="h-5 w-5 text-[var(--color-accent)] shrink-0" />
                      <span className="font-bebas text-base md:text-lg tracking-wider text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] group-data-[state=open]:text-[var(--color-text-primary)] transition-colors duration-300 pr-2">
                        {faq.question}
                      </span>
                    </div>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-bg-primary)] group-data-[state=open]:bg-[var(--color-accent)]/20 transition-all duration-300 group-data-[state=open]:rotate-180">
                      <ChevronDown className="h-4 w-4 text-[var(--color-text-muted)] group-data-[state=open]:text-[var(--color-accent)] transition-colors duration-300" />
                    </div>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>

                <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up bg-[var(--color-bg-card)]/50">
                  <div className="px-6 pb-5 md:px-8 md:pb-6 pt-2 ml-9">
                    <div className="flex items-start gap-4 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border)] p-4">
                      <p className="flex-1 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {faq.answer}
                      </p>
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 transition-transform hover:scale-105">
                        <MessageCircle className="h-4 w-4 text-[var(--color-accent)]" />
                      </div>
                    </div>
                  </div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </div>
      </div>
    </section>
  )
}
