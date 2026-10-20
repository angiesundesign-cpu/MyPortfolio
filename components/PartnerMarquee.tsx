'use client';

import { useState } from 'react';

const brands = [
  ['Delta', 'delta.png', 'delta'],
  ['Flexsteel', 'flexsteel.png', 'flexsteel'],
  ['LumiSource', 'lumisource.jpg', 'lumisource'],
  ['Hasbro', 'hasbro.png', 'hasbro'],
  ['Microsoft', 'microsoft.png', 'microsoft'],
  ['Costco', 'costco.png', 'costco'],
  ['Emerson', 'emerson.png', 'emerson'],
];

export function PartnerMarquee() {
  const [paused, setPaused] = useState(false);
  return (
    <div className="partner-marquee" data-paused={paused}>
      <div className="partner-window">
        <div className="partner-track">
          {[0, 1].map((copy) => (
            <ul className="partner-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {brands.map(([name, file, key]) => (
                <li className={`partner-logo partner-logo-${key}`} key={key}>
                  <img src={`/assets/logos/${file}`} alt={copy === 0 ? name : ''} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <button className="partner-pause" type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>
        {paused ? 'Play animation' : 'Pause animation'}
      </button>
    </div>
  );
}
