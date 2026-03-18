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
          Enroll to have an immersive hands-on experience at iksha institute of technologies
        </span>
      </Marquee>
    </section>
  );
}
