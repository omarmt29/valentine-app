import { useParams } from 'react-router-dom'
import { supabase } from './supabase'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export default function valentine() {
    const { slug } = useParams()
    const [showGif, setShowGif] = useState(false)

    const [noPos, setNoPos] = useState({ x: 50, y: 50 })
    const [noMoved, setNoMoved] = useState(false)
    const [scaled, setscaled] = useState(false)
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!slug) return

        setLoading(true)
        setError(false)
        setName('')

        const fetchValentine = async () => {
            const { data, error } = await supabase
                .from('valentines')
                .select('name')
                .eq('slug', slug)
                .maybeSingle()

            if (error || !data) {
                setError(true)
                setLoading(false)
                return
            }

            setName(data.name)
            setLoading(false)
        }

        fetchValentine()
    }, [slug])



    const moveNo = () => {
        setNoMoved(true)

        setNoPos({
            x: Math.random() * 80,
            y: Math.random() * 80
        })
    }

    const scalerhandler = () => {
        setscaled(true)

    }

    const copyLink = async () => {
        const url = window.location.href

        try {
            await navigator.clipboard.writeText(url)

            Swal.fire({
            icon: 'success',
            title: '¡Link copiado! 💖',
            text: 'Comparte esta invitación con tu persona especial',
            timer: 2500,
            showConfirmButton: false
            })
        } catch (error) {
            Swal.fire({
            icon: 'error',
            title: 'Oops 😢',
            text: 'No se pudo copiar el link'
            })
        }
    }

    if (loading) {
    return (
        <div style={{ height: '100dvh', display: 'grid', placeItems: 'center' }}>
        <h2>Cargando… 💖</h2>
        </div>
    )
    }

    if (error) {
    return (
        <div style={{ height: '100dvh', display: 'grid', placeItems: 'center' }}>
        <h2>Esta invitación no existe 😢</h2>
        </div>
    )
    }
    return (
        <div
            style={{
                height: '100dvh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative'
            }}
        >   
            {/* compartir invitacion */}
            <button
                onClick={copyLink}
                style={{
                    marginBottom: 30,
                    padding: '10px 20px',
                    fontSize: 14,
                    borderRadius: 8,
                    border: '1px solid #ddd',
                    cursor: 'pointer',
                    background: '#fff',
                    color: "black"
                }}
                >
                🔗 Copiar invitación
            </button>
            {/* compartir invitacion */}

            <h1 style={{ marginBottom: 50 }}>
                {name} will you be my valentine? 💖
            </h1>

            {showGif && (
                <img
                    src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHRmb2kzemF4cHYxcmU5anp4YzR2MXhvaGRkaDY2bnIxd3RkYnR1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ytu2GUYbvhz7zShGwS/giphy.gif"
                    alt="valentine"
                    style={{ width: 260, marginBottom: 20 }}
                />
            )}

            {/* BOTONES */}
            <div style={{ display: 'flex', gap: 20 }}>
                {/* YES */}
                <button
                    onClick={() => setShowGif(true)}
                    onMouseEnter={scalerhandler}
                    style={{
                        padding: '14px 26px',
                        fontSize: 18,
                        transform: scaled ? 'scale(1.5)' : '',
                        cursor: 'pointer'
                    }}
                >
                    YES 💘
                </button>

                {/* NO */}
              <button
                onMouseEnter={moveNo}     // desktop
                onFocus={moveNo}          // TAB / teclado
                onTouchStart={moveNo}     // mobile touch
                tabIndex={0}
                style={{
                    display: 'block',
                    padding: '14px 26px',
                    fontSize: 18,
                    cursor: 'pointer',
                    position: noMoved ? 'absolute' : 'static',
                    left: noMoved ? `${noPos.x}%` : 'auto',
                    top: noMoved ? `${noPos.y}%` : 'auto'
                }}
                >
                NO 😈
                </button>
            </div>
        </div>
    )
}
