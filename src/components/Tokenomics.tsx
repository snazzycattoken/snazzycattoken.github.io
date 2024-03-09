import { ReactElement, useId } from 'react'

import { Container } from '@/components/Container'

const features = [
  {
    name: 'Total Supply',
    description: '100,000,000,000 $SNZY',
    icon: BankNoteIcon,
  },
  {
    name: 'Tax',
    description: '0 %',
    icon: BankNoteIcon,
  },
  {
    name: 'Presale',
    description:
      '30% of Total Supply - The funds raised from the presale will primarily finance the initial stages of the project, including liquidity provision and initial development efforts.',
    icon: BankNoteIcon,
  },
  {
    name: 'Liquidity Pool',
    description:
      "50% of Total Supply - These tokens are allocated for market circulation, including public sales, liquidity provisioning, and other forms of distribution aimed at ensuring the token's widespread availability and liquidity",
    icon: BankNoteIcon,
  },
  {
    name: 'Development, Marketing, and Future Development',
    description:
      '20% of Total Supply - This allocation aims to cover essential development, operational costs, marketing efforts, community engagement, and unforeseen opportunities or challenges.',
    icon: BankNoteIcon,
  },
]

function BankNoteIcon() {
  return <strong className="text-2xl">💰</strong>
}

export function Tokenomics() {
  return (
    <section id="tokenomics" aria-label="Tokenomics" className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Tokenomics
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <feature.icon />
              <h3 className="mt-6 font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
