export default function SRKELogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 280 120" className="w-full h-full">
        <defs>
          {/* Orange gradient for the arc */}
          <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff8c00" />
            <stop offset="100%" stopColor="#ff6b35" />
          </linearGradient>
          
          {/* Blue gradient for figures and text */}
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          
          {/* Green gradient */}
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>
        
        {/* Orange arc - left side */}
        <path
          d="M 15 95 Q 15 15 45 15 Q 75 15 75 45"
          stroke="url(#orangeGradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Pink/Magenta starburst - top right */}
        <g transform="translate(70, 25)">
          <circle cx="0" cy="0" r="2" fill="#ec4899" />
          <line x1="0" y1="0" x2="12" y2="0" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />
          <line x1="0" y1="0" x2="8" y2="8" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="0" y1="0" x2="0" y2="12" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />
          <line x1="0" y1="0" x2="-8" y2="8" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="0" y1="0" x2="-12" y2="0" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />
          <line x1="0" y1="0" x2="-8" y2="-8" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="0" y1="0" x2="0" y2="-12" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />
          <line x1="0" y1="0" x2="8" y2="-8" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        
        {/* Blue figures - adult and child */}
        <g transform="translate(35, 40)">
          {/* Adult figure */}
          <circle cx="18" cy="10" r="5" fill="url(#blueGradient)" />
          <rect x="14" y="15" width="8" height="18" rx="2" fill="url(#blueGradient)" />
          
          {/* Child figure */}
          <circle cx="6" cy="15" r="4" fill="url(#blueGradient)" />
          <rect x="3" y="19" width="6" height="14" rx="1.5" fill="url(#blueGradient)" />
          
          {/* Raised arms indicating joy/success */}
          <line x1="8" y1="20" x2="4" y2="12" stroke="url(#blueGradient)" strokeWidth="3" strokeLinecap="round" />
          <line x1="26" y1="18" x2="30" y2="10" stroke="url(#blueGradient)" strokeWidth="3" strokeLinecap="round" />
        </g>
        
        {/* Green curved line at bottom */}
        <path
          d="M 25 85 Q 45 75 65 85 Q 85 95 105 85"
          stroke="url(#greenGradient)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* SRKE Text */}
        <text x="130" y="45" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="28" fill="url(#blueGradient)">
          SRKE
        </text>
        
        {/* SOCIETY Text */}
        <text x="130" y="75" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" fill="url(#greenGradient)">
          SOCIETY
        </text>
        
        {/* Tagline */}
        <text x="130" y="95" fontFamily="Arial, sans-serif" fontStyle="italic" fontSize="12" fill="#ec4899">
          Where Thinking Begins
        </text>
      </svg>
    </div>
  );
}