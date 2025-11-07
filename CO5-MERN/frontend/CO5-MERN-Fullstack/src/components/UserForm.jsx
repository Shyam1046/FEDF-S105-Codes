import { useState } from 'react'
import { createUser } from '../api'   // ✅ consistent lowercase import

export default function UserForm({ onCreated }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [ok, setOk] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setOk('')

    if (!name.trim() || !email.trim()) {
      setError('Please enter both name and email')
      return
    }

    setLoading(true)
    try {
      await createUser({ name, email })
      setOk('User added!')
      setName('')
      setEmail('')
      onCreated && onCreated()
    } catch (err) {
      setError(err.message || 'Error creating user')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h3 style={{ margin: 0 }}>Add User</h3>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={inputStyle}
      />
      <button disabled={loading} style={btnStyle}>
        {loading ? 'Saving…' : 'Save'}
      </button>
      {error && <p style={{ color: 'crimson', margin: 0 }}>{error}</p>}
      {ok && <p style={{ color: 'green', margin: 0 }}>{ok}</p>}
    </form>
  )
}

const formStyle = {
  display: 'grid',
  gap: '8px',
  maxWidth: 360,
  padding: 12,
  border: '1px solid #ddd',
  borderRadius: 8,
}

const inputStyle = {
  padding: '8px 10px',
  borderRadius: 6,
  border: '1px solid #ccc',
}

const btnStyle = {
  padding: '8px 10px',
  borderRadius: 6,
  border: '1px solid #333',
  background: '#111',
  color: 'white',
  cursor: 'pointer',
}
