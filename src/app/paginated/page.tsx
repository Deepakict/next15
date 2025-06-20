// ✅ Server Component: no "use client"
import { notFound } from 'next/navigation';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function PaginatedPostsPage({ searchParams }: {
  searchParams?: { page?: string }
}) {
  const page = parseInt(searchParams?.page || '1', 10);

  // Safety check
  if (isNaN(page) || page < 1) return notFound();

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`, {
    cache: 'no-store' // 👈 disable caching for dynamic pagination
  });

  if (!res.ok) return notFound();

  const posts: Post[] = await res.json();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Paginated Posts (Page {page})</h1>

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} style={{ marginBottom: '1.5rem' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      )}

      <div style={{ marginTop: '2rem' }}>
        {page > 1 && (
          <a href={`/paginated?page=${page - 1}`}>
            <button>⬅️ Prev</button>
          </a>
        )}
        <a href={`/paginated?page=${page + 1}`}>
          <button style={{ marginLeft: 10 }}>Next ➡️</button>
        </a>
      </div>
    </main>
  );
}