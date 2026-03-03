export function MarfexLogo({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  const primaryColor = dark ? "#FFFFFF" : "#1A1A1A"
  const blueColor = "#1B7FC3"

  return (
    <svg
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Marmoraria Marfex"
    >
      {/* Geometric M icon */}
      <path d="M30 10 L50 10 L65 30 L50 30 L40 18 L30 30 L15 30 Z" fill={primaryColor} />
      <path d="M20 25 L40 25 L55 45 L40 45 L30 33 L20 45 L5 45 Z" fill={primaryColor} opacity="0.7" />
      <line x1="8" y1="48" x2="58" y2="48" stroke={blueColor} strokeWidth="3" />
      <line x1="12" y1="53" x2="54" y2="53" stroke={blueColor} strokeWidth="2.5" />
      <line x1="16" y1="57" x2="50" y2="57" stroke={blueColor} strokeWidth="2" />

      {/* MARMORARIA text */}
      <text
        x="70"
        y="30"
        fontFamily="sans-serif"
        fontSize="10"
        letterSpacing="4"
        fill={primaryColor}
      >
        MARMORARIA
      </text>

      {/* Marfex text */}
      <text
        x="70"
        y="55"
        fontFamily="serif"
        fontSize="28"
        fontWeight="600"
        fontStyle="italic"
        fill={primaryColor}
      >
        Marfex
      </text>
    </svg>
  )
}
