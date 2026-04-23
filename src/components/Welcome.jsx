import { useEffect, useRef } from 'react';
import Marquee from "react-fast-marquee";

export default function Welcome() {

  return (
    <section
      className="w-full bg-[#f0f4f8] text-black pt-2 md:pt-2 font-semibold"
      id="welcome"
    >
      <Marquee
        speed={60}          // scroll speed
        gradient={true}    // disable built-in fade if you don't want it
        gradientColor={[150, 1, 200]} // RGB values for white
        gradientWidth={200} // Width in pixels
        pauseOnHover={true} // optional: pause scroll when mouse is over
      >
        <span>
          
          <span className="blinking-colorful">
            Launching soon Vidya Margadarshi !!!{'  '}
          </span>
          {/* Enroll to have an immersive hands-on experience at iksha institute of technologies. */}
        </span>
      </Marquee>
    </section>
  );
}

// Add styles for blinking and color-changing animation
const style = document.createElement('style');
style.innerHTML = `
  .blinking-colorful {
    animation: blinkColor 2s infinite;
    font-weight: bold;
    font-size: 1.5rem;
  }
  @keyframes blinkColor {
    0% { opacity: 1; color: #e63946; }
    20% { color: #0d1cec; }
    40% { color: #24bc0d; }
    60% { color: #3498db; }
    80% { color: #d61629; }
    100% { opacity: 0.2; color: #e63946; }
  }
`;
if (typeof document !== 'undefined' && !document.getElementById('blinking-colorful-style')) {
  style.id = 'blinking-colorful-style';
  document.head.appendChild(style);
}

