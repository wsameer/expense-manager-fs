import React from 'react'

import { WalletMinimal } from 'lucide-react'
import { Link } from '@inertiajs/react'

interface BrandLogoProps {
  size?: 'small' | 'large' | 'extra-large'
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'small' }) => {
  const sizeClasses = {
    'small': 'h-8 w-8 text-base',
    'large': 'h-12 w-12 text-lg',
    'extra-large': 'h-16 w-16 text-xl',
  }

  const iconSizeClasses = {
    'small': 'h-4 w-4',
    'large': 'h-6 w-6',
    'extra-large': 'h-8 w-8',
  }

  return (
    <Link
      href="/app"
      className={`group flex ${sizeClasses[size]} shrink-0 items-center justify-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground`}
    >
      <WalletMinimal className={`${iconSizeClasses[size]} transition-all group-hover:scale-110`} />
      <span className="sr-only">Expense Manager</span>
    </Link>
  )
}
