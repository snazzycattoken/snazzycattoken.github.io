import Image from 'next/image'

import { Container } from '@/components/Container'
import logo1024 from '@/images/logo-1024x1024.png'
import logo1000 from '@/images/logo-1000x300.svg'
import bscScanLogo from '@/images/logos/bscscan.svg'
import twitterXLogo from '@/images/logos/twitterx.svg'

export function Hero() {
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <Image
              src={logo1000}
              alt="SnazzyCat Logo"
              width={1000}
              height={300}
            />
            <p className="mt-6 text-lg text-gray-600">
              Welcome to SnazzyCat (SNZY), the meme coin where crypto meets
              kitty charm! Dive into our purr-fect world where every transaction
              is a playful adventure, and every investment brings a smile. Let's
              make the crypto space a little more snazzy – one meme at a time!
              🐾
            </p>
            <p className="mt-10 flex w-full justify-center">
              <a
                className="flex items-center gap-2 text-lg font-medium text-gray-600 underline"
                href={`https://bscscan.com/address/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`}
                target="_blank"
              >
                <Image
                  src={bscScanLogo}
                  width={40}
                  height={40}
                  alt="BscScan Logo"
                />
                See smart contract on BscScan
              </a>
            </p>
            <p className="mt-10 flex w-full justify-center">
              <a
                className="flex items-center gap-2 text-lg font-medium text-gray-600 underline"
                href={`https://twitter.com/SnazzyCatToken`}
                target="_blank"
              >
                <Image
                  src={twitterXLogo}
                  width={40}
                  height={40}
                  alt="TwitterX Logo"
                />
                Follow us on X
              </a>
            </p>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <div className="-mx-4 h-[448px] px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:px-0 lg:pt-10 xl:-bottom-32">
              <Image
                src={logo1024}
                alt="SnazzyCat Profile Picture"
                layout="fill"
                objectFit="contain"
                quality={100}
                className="h-full w-full animate-fade-in lg:p-20"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
