// src/Home.jsx
import { useState } from 'react'
import { supabase } from './supabase'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const createValentine = async () => {
    const slug = name.toLowerCase().replace(/\s+/g, '-')

    await supabase.from('valentines').insert({
      name,
      slug
    })

    navigate(`/v/${slug}`)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: 80 }}>
      <h1>💘 Valentine App</h1>

      <input
        placeholder="Nombre de la victima"
        value={name}
        style={{
          border:"none",
          padding: "10px",
          borderRadius: '6px',  
          marginBottom: '30px'
        }}
        onChange={e => setName(e.target.value)}
      />

      <br /><br />

      <button onClick={createValentine}>
        Crear invitación  
      </button>
    </div>
  )
}
