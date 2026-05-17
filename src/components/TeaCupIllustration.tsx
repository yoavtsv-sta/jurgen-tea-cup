export default function TeaCupIllustration() {
  return (
    <div className="relative w-72 h-72 md:w-80 md:h-80">
      <svg
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl"
        aria-label="Jurgen Tea Cup illustration"
      >
        {/* Saucer shadow */}
        <ellipse cx="160" cy="278" rx="90" ry="12" fill="#d6d3d1" opacity="0.5" />

        {/* Saucer */}
        <ellipse cx="160" cy="265" rx="85" ry="14" fill="#e7e5e4" />
        <ellipse cx="160" cy="262" rx="75" ry="10" fill="#f5f5f4" />

        {/* Cup body */}
        <path
          d="M105 155 L118 262 H202 L215 155 Z"
          fill="#f5f5f4"
          stroke="#d6d3d1"
          strokeWidth="2"
        />

        {/* Cup rim */}
        <ellipse cx="160" cy="155" rx="55" ry="10" fill="#e7e5e4" stroke="#d6d3d1" strokeWidth="1.5" />

        {/* Cup interior */}
        <ellipse cx="160" cy="155" rx="48" ry="8" fill="#a8a29e" opacity="0.3" />

        {/* Tea surface */}
        <ellipse cx="160" cy="158" rx="44" ry="7" fill="#92400e" opacity="0.8" />

        {/* Handle */}
        <path
          d="M215 175 C240 175 250 195 250 210 C250 225 240 240 215 240"
          stroke="#d6d3d1"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M215 175 C236 175 244 193 244 210 C244 227 236 240 215 240"
          stroke="#f5f5f4"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />

        {/* Steam wisps */}
        <path
          d="M145 138 C145 128 155 125 150 112 C145 99 155 95 155 85"
          stroke="#d6d3d1"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M160 132 C160 122 170 118 165 105 C160 92 170 88 170 78"
          stroke="#d6d3d1"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M175 138 C175 128 185 125 180 112 C175 99 185 95 185 85"
          stroke="#d6d3d1"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Subtle glaze highlight */}
        <path
          d="M118 180 L122 225"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    </div>
  )
}
