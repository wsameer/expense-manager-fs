import { BrandLogo } from '@/components/navigation/brand-logo'
import { Head } from '@inertiajs/react'
import React from 'react'

type LayoutProps = {
  children: React.ReactNode
  title: string
}

export const AuthLayout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div className="flex min-h-screen flex-col justify-center bg-zinc-50 py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <BrandLogo size="large" />
          </div>
        </div>

        <div className="mt-8 px-4">{children}</div>
      </div>
    </>
  )
}
