'use client'

import { useUsers } from '@/hooks/useUsers'
import { useCreateUser } from '@/hooks/useCreateUser'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/Button'
// Ideally: token comes from AuthContext or cookies
const token = 'your_token_here'

export default function HomePage() {
  const { data: users, isLoading, error } = useUsers(token)
  const query = useCreateUser(token)
  const [form, setForm] = useState({ name: '', email: '' })
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    query.mutate(form, {
      onSuccess: () => {
        setForm({ name: '', email: '' })
      },
    })
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Users List</h1>

      {isLoading && <p>Loading...</p>}
      {error instanceof Error && <p>Error: {error.message}</p>}
      {!isLoading && users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      )}

      <hr />
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          type="email"
        />
        <button type="submit" disabled={query.isPending}>
          {query.isPending ? 'Creating...' : 'Create User'}
        </button>
      </form>

      <hr />
      <Button
        label="Go to Dummy Users"
        onClick={() => router.push('/dummy')}
      />
    </main>
  )
}