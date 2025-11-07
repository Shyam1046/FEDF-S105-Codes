import { useEffect, useState } from 'react'
import { fetchUsers } from '../api.js'

export default function UserList({ refreshKey }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true
    setLoading(true)
    setError('') // clear previous error before fetching

    fetchUsers()
      .then(data => {
        if (isMounted) setUsers(data || [])
      })
      .catch(err => {
        if (isMounted) setError(err.message || 'Failed to load users')
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [refreshKey])

  if (loading) return <p>Loading users…</p>
  if (error) return <p style={{ color: 'crimson' }}>Error: {error}</p>
  if (!users.length) return <p>No users yet. Add one!</p>

  return (
    <ul style={{ lineHeight: '1.9' }}>
      {users.map(u => (
        <li key={u._id || u.id}>
          <strong>{u.name}</strong> — <code>{u.email}</code>
        </li>
      ))}
    </ul>
  )
}
