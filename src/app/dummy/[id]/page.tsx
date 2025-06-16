'use client'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { apiClient } from '@/lib/apiClient'

export default function UserDetailPage() {
  const { id } = useParams()
  const { data, isLoading, error } = useQuery({
    queryKey: ['dummy-user', id],
    queryFn: () => apiClient<any>(`https://jsonplaceholder.typicode.com/users/${id}`),
    enabled: !!id,
  })

  return (
    <main style={{ padding: 20 }}>
      <h1>User Detail</h1>

      {isLoading && <p>Loading...</p>}
      {error instanceof Error && <p>Error: {error.message}</p>}

      {data && (
        <div>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
          <p><strong>Website:</strong> {data.website}</p>
          <p><strong>Company:</strong> {data.company?.name}</p>
        </div>
      )}
    </main>
  )
}