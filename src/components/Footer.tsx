import Image from 'next/image'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

import { Container } from '@/components/Container'
import { NavLinks } from '@/components/NavLinks'

import Logo from '@/images/logo.svg'

function QrCodeBorder(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-center justify-center gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Image src={Logo} alt="Logo" width={100} height={100} />
              <div>
                <p className="text-base font-semibold">SnazzyCat</p>
                <p className="mt-1 text-sm">One meme at a time! 🐾</p>
              </div>
            </div>
            <p className="flex w-full items-center gap-2">
              <EnvelopeIcon className="h-6 w-6 text-gray-400" />
              <a href="mailto:team@snazzycattoken.com" className="text-sm">
                team@snazzycattoken.com
              </a>
            </p>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:justify-between md:pt-6">
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
