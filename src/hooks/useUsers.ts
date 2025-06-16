import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/lib/apiClient'

interface User {
  id: number
  name: string
  email: string
}

export const useUsers = (token: string) => {
  return useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () =>
      apiClient<User[]>('/api/users', {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      }),
  })
}