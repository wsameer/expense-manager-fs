import React from 'react'
import { useTranslation } from 'react-i18next'

import { AuthLayout } from '@/layouts/auth-layout'
import RegisterForm from '@/features/auth/register-form'
import { PageProps } from '@/types'

export default function Register({ errors }: PageProps) {
  const { t } = useTranslation('auth')

  return (
    <AuthLayout title={t('sign-up')}>
      <RegisterForm onSuccess={() => console.log('registration form submitted')} errors={errors} />
    </AuthLayout>
  )
}
