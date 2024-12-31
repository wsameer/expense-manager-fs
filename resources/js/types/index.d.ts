export interface User {
  id: number
  name: string
  email: string
}

export interface PageProps {
  auth: {
    user: User
  }
  errors?: Record<string, string>
}
