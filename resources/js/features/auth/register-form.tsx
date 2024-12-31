import React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useTranslation } from 'react-i18next'

type RegisterFormProps = {
  onSuccess: () => void
  errors?: Record<string, string>
}

const RegisterForm = ({ onSuccess, errors }: RegisterFormProps) => {
  const { t } = useTranslation('auth')

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">{t('sign-up')}</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="registration-form" className="grid gap-4">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </form>
      </CardContent>
    </Card>
  )
}

export default RegisterForm
