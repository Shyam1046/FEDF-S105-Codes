import React, { useEffect, useState } from 'react'

function StudentForm({ onAdd, onUpdate, editingStudent }) {
  const [form, setForm] = useState({ name: '', email: '', age: '', course: '' })

  useEffect(() => {
    if (editingStudent) setForm(editingStudent)
  }, [editingStudent])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingStudent) onUpdate(form)
    else onAdd(form)
    setForm({ name: '', email: '', age: '', course: '' })
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
      />
      <input
        name="course"
        placeholder="Course"
        value={form.course}
        onChange={handleChange}
      />
      <button type="submit">
        {editingStudent ? 'Update Student' : 'Add Student'}
      </button>
    </form>
  )
}

export default StudentForm