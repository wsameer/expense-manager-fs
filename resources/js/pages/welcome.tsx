import React from 'react'
import { Github } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Head, Link, router } from '@inertiajs/react'
import { Button } from '@/components/ui/button'

const Welcome = React.memo(() => {
  const { t } = useTranslation('common')
  const user = null

  const handleStart = () => {
    if (user) {
      // navigate(APP_ROUTE);
    } else {
      router.visit('/auth/register', {
        method: 'get',
        preserveScroll: true,
        preserveState: true,
      })
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Head title={t('welcome.title')} />
      <main className="flex h-screen items-center bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {t('welcome.app-name')}
          </h1>
          <p className="mt-2 px-6 sm:px-2">{t('welcome.app-description')}</p>
          <div className="mt-8 flex justify-center">
            {user ? (
              <Button variant="default" asChild>
                <a href="todo">{t('welcome.dashboard')}</a>
              </Button>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Button variant="default">
                  <Link href="/auth/login" preserveScroll>
                    {t('welcome.login')}
                  </Link>
                </Button>
                <Button variant="destructive" onClick={handleStart}>
                  {t('welcome.get-started')}
                </Button>
                <a
                  href="https://github.com/wsameer/expense-manager-fs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" /> {t('welcome.github-repo')}
                  </Button>
                </a>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
})

export default Welcome
