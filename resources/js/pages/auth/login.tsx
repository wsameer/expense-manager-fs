import React from 'react'
import { useTranslation } from 'react-i18next'

import { AuthLayout } from '@/layouts/auth-layout'

export default function Login() {
  const { t } = useTranslation('auth')

  return (
    <AuthLayout title={t('login')}>
      <div>login now</div>
    </AuthLayout>
  )
}
