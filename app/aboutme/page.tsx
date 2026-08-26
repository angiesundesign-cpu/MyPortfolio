import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';

export const metadata: Metadata = { title: 'About Me | AngieSun' };

const portrait = '/assets/angie-portrait.jpg';

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="about-hero">
        <div>
          <p>Keep Exploring and Crafting</p>
          <h1>A Sustainable<br />Future.</h1>
        </div>
        <img src={portrait} alt="Angie Sun" />
      </section>

      <section className="about-sections">
        <article>
          <h2>Profile</h2>
          <div><h3>Angie Sun</h3><p>Industrial designer working across product, furniture, strategy, research, sustainability, and digital experiences.</p></div>
        </article>
        <article>
          <h2>Education</h2>
          <div className="timeline-row"><h3>Master of Science</h3><p>Parsons School of Design<br />2023–2025 · GPA 3.83</p></div>
          <div className="timeline-row"><h3>Bachelor of Fine Art</h3><p>Purdue University<br />2017–2021 · GPA 3.54</p></div>
        </article>
        <article>
          <h2>Work Experience</h2>
          <div className="timeline-row"><h3>Search For High School</h3><p>Design and product strategy</p></div>
          <div className="timeline-row"><h3>Nanchang Yisheng Auto Parts Ltd.</h3><p>Industrial design experience</p></div>
          <div className="timeline-row"><h3>Flexsteel Industries, Inc.</h3><p>Furniture and product design</p></div>
          <a className="green-pill" href="/assets/angie-resume.pdf" target="_blank" rel="noreferrer">Download my Resume</a>
        </article>
        <article>
          <h2>Honor</h2>
          <ul className="honor-list">
            <li>Rotman Design Challenges 2024 — Third Place</li>
            <li>Hult Prize 2024 — Global Summits Top 1%</li>
            <li>Parsons School of Design 2023–2025 — Scholarship</li>
            <li>Green Concept Award 2021 — Nominee of the Year</li>
            <li>Ringle Galleries Undergraduate Design Exhibition 2021 — ID First Place</li>
          </ul>
        </article>
      </section>
      <Footer />
    </main>
  );
}
