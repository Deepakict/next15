import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/lib/apiClient'

interface CreateUserPayload {
  name: string
  email: string
}

export const useCreateUser = (token: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CreateUserPayload) =>
      apiClient('/api/users', {
        method: 'POST',
        body: data,
        headers: { Authorization: `Bearer ${token}` },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })
}