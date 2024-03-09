import { forwardRef } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import Logo from '@/images/logo.svg'

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function AppScreen({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx('flex flex-col', className)} {...props}>
      <div className="flex justify-between px-4 pt-4">
        <Image src={Logo} alt="SnazzyCat Logo" width={40} height={40} />
      </div>
      {children}
    </div>
  )
}

AppScreen.Header = forwardRef<
  React.ElementRef<'div'>,
  { children: React.ReactNode }
>(function AppScreenHeader({ children }, ref) {
  return (
    <div ref={ref} className="mt-6 px-4 text-white">
      {children}
    </div>
  )
})

AppScreen.Title = forwardRef<
  React.ElementRef<'div'>,
  { children: React.ReactNode }
>(function AppScreenTitle({ children }, ref) {
  return (
    <div ref={ref} className="text-2xl text-white">
      {children}
    </div>
  )
})

AppScreen.Subtitle = forwardRef<
  React.ElementRef<'div'>,
  { children: React.ReactNode }
>(function AppScreenSubtitle({ children }, ref) {
  return (
    <div ref={ref} className="text-sm text-gray-500">
      {children}
    </div>
  )
})

AppScreen.Body = forwardRef<
  React.ElementRef<'div'>,
  { className?: string; children: React.ReactNode }
>(function AppScreenBody({ children, className }, ref) {
  return (
    <div
      ref={ref}
      className={clsx('mt-6 flex-auto rounded-t-2xl bg-white', className)}
    >
      {children}
    </div>
  )
})
