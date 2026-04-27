'use client'

import { useEffect, useState } from 'react'

const COOKIE_KEY = 'marfex_cookie_accepted'
const AUTO_DISMISS_MS = 15_000

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    const already = localStorage.getItem(COOKIE_KEY)
    if (!already) {
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(() => dismiss(), AUTO_DISMISS_MS)
    return () => clearTimeout(timer)
  }, [visible])

  function dismiss() {
    setHiding(true)
    setTimeout(() => {
      localStorage.setItem(COOKIE_KEY, 'true')
      setVisible(false)
      setHiding(false)
    }, 400)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        width: 'min(560px, calc(100vw - 32px))',
        background: 'linear-gradient(135deg, #0f2744 0%, #1B7FC3 100%)',
        borderRadius: '16px',
        boxShadow: '0 8px 40px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.18)',
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        border: '1px solid rgba(255,255,255,0.12)',
        backdropFilter: 'blur(8px)',
        animation: hiding ? 'cookieFadeOut 0.4s ease forwards' : 'cookieFadeIn 0.45s cubic-bezier(0.22,1,0.36,1) both',
      }}
    >
      {/* Cookie icon */}
      <span
        aria-hidden="true"
        style={{ fontSize: '2rem', flexShrink: 0, lineHeight: 1 }}
      >
        🍪
      </span>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            margin: 0,
            color: '#ffffff',
            fontSize: '0.875rem',
            lineHeight: '1.55',
            fontFamily: 'var(--font-sans, Inter, sans-serif)',
          }}
        >
          Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa{' '}
          <a
            href="/politica-de-privacidade"
            style={{
              color: '#93c5fd',
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
              fontWeight: 500,
            }}
          >
            Política de Privacidade
          </a>
          .
        </p>
      </div>

      {/* OK button */}
      <button
        onClick={dismiss}
        style={{
          flexShrink: 0,
          background: '#ffffff',
          color: '#1B7FC3',
          border: 'none',
          borderRadius: '8px',
          padding: '9px 22px',
          fontFamily: 'var(--font-sans, Inter, sans-serif)',
          fontWeight: 700,
          fontSize: '0.875rem',
          cursor: 'pointer',
          letterSpacing: '0.03em',
          transition: 'background 0.2s, color 0.2s, transform 0.15s',
          outline: 'none',
        }}
        onMouseEnter={e => {
          ;(e.currentTarget as HTMLButtonElement).style.background = '#e0f0ff'
          ;(e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.04)'
        }}
        onMouseLeave={e => {
          ;(e.currentTarget as HTMLButtonElement).style.background = '#ffffff'
          ;(e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'
        }}
      >
        OK
      </button>

      <style>{`
        @keyframes cookieFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(24px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes cookieFadeOut {
          from { opacity: 1; transform: translateX(-50%) translateY(0); }
          to   { opacity: 0; transform: translateX(-50%) translateY(24px); }
        }
      `}</style>
    </div>
  )
}
