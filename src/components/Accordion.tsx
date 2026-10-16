import { useState, useId } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const baseId = useId()

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="divide-y divide-border rounded-lg border border-border">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const headingId = `${baseId}-heading-${index}`
        const panelId = `${baseId}-panel-${index}`

        return (
          <div key={index} className="group">
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-base font-semibold text-navy transition-colors hover:bg-cream/50 sm:px-6 sm:py-5 sm:text-lg"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-text-secondary transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              hidden={!isOpen}
              className="px-5 pb-5 sm:px-6 sm:pb-6"
            >
              <p className="text-text-secondary leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
