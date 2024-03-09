'use client'

import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'

import Logo from '@/images/logo.svg'
import Image from 'next/image'

const plans = [
  {
    name: 'Phase 1',
    description: 'Launch and Foundation',
    features: [
      'Presale of $SNZY tokens on PinkSale',
      'Launch of $SNZY on PancakeSwap',
      'Development of core features and initial market growth',
    ],
  },
  {
    name: 'Phase 2',
    description: 'Expansion to Ethereum Network',
    features: [
      'Development of $SNZY bridge to Ethereum network',
      'Launch of $SNZY on Uniswap',
      'Launch of AI-Generated NFT features and integration with $SNZY ecosystem',
    ],
  },
  {
    name: 'Phase 3',
    description: 'Long-Term Growth',
    features: [
      'Renouncing the ownership of $SNZY to the community, ensuring a truly decentralized governance structure and aligning with DeFi principles.',
      'Continuous development, community engagement, and exploration of new use cases to enhance the $SNZY ecosystem',
    ],
  },
]

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  description,
  features,
}: {
  name: string
  description: string
  features: Array<string>
  featured?: boolean
}) {
  return (
    <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5">
      <h3 className="flex items-center text-sm font-semibold">
        <Image src={Logo} alt="Logo" width={40} height={40} />
        <span className="ml-4">{name}</span>
      </h3>
      <p className="mt-3 text-sm">{description}</p>
      <div className="order-last mt-6">
        <ul role="list" className="-my-2 divide-y text-sm">
          {features.map((feature) => (
            <li key={feature} className="flex py-2">
              <CheckIcon className="h-6 w-6 flex-none text-yellow-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Roadmap() {
  return (
    <section
      id="roadmap"
      aria-labelledby="roadmap-title"
      className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="roadmap-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Roadmap
          </h2>
          <p className="mt-10 text-lg text-gray-600">
            $SNZY may start as a meme coin, but our roadmap looks far ahead.
            We're committed to long-term development, from our ICO launch on
            PancakeSwap to pioneering NFT features. Join us as we build a
            lasting legacy in the crypto world.
          </p>
        </div>
        <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <Plan key={plan.name} {...plan} />
          ))}
        </div>
      </Container>
    </section>
  )
}
