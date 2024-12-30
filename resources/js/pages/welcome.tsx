import React from 'react'
import { useTranslation } from 'react-i18next';

import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';


const Welcome = React.memo(() => {
  const { t } = useTranslation('common');

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Head title={t('welcome.title')} />
      <main className="flex h-screen items-center bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {t('welcome.app-name')}
          </h1>
          <p className="mt-2 px-6 sm:px-2">{t('welcome.app-description')}</p>
        </div>
      </main>
    </div>
  )
});

export default Welcome;

