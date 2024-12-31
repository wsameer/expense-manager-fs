/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
const LoginController = () => import('#controllers/auth/login_controller')
const RegisterController = () => import('#controllers/auth/register_controller')
import router from '@adonisjs/core/services/router'

export const ROUTES = {
  WELCOME: '/',
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
  },
} as const

router
  .group(() => {
    router.get('/register', [RegisterController, 'show']).as('register')
    router.get('/login', [LoginController, 'store']).as('login')
  })
  .as('auth')
  .prefix('/auth')

router
  .get(ROUTES.WELCOME, async ({ inertia }) => {
    return inertia.render('welcome')
  })
  .as('welcome')
