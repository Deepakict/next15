'use client'

import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { apiClient } from '@/lib/apiClient'

export default function DummyPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['dummy-users'],
    queryFn: () => apiClient<any[]>('https://jsonplaceholder.typicode.com/users'),
  })

  return (
    <main style={{ padding: 20 }}>
      <h1>Dummy Users</h1>

      {isLoading && <p>Loading...</p>}
      {error instanceof Error && <p>Error: {error.message}</p>}

      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            <Link href={`/dummy/${user.id}`}>
              {user.name} ({user.email})
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}