import React from 'react'

const AdmissionAnimation = () => {

    const textAnimation = [
        "🎈 Admission Open",
        "🧸 Safe & Caring Environment",
        "🎨 Activity Based Learning",
        "⭐ Limited Seats Available"
    ];    


  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0b3c8f] via-[#1e5bbf] to-[#0b3c8f] py-3">
      <div className="flex w-[200%] text-white text-lg font-semibold animate-marquee hover:[animation-play-state:paused]">

        {textAnimation.map((text, i) => (
          <span
            key={i}
            className="mx-10 flex items-center gap-2 tracking-wide"
          >
            {text}
          </span>
        ))}

        {/* duplicate for smooth loop */}
        {textAnimation.map((text, i) => (
          <span key={i + 'dup'} className="mx-10 flex items-center gap-2">
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}

export default AdmissionAnimation
