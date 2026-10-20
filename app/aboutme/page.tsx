import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import { PartnerMarquee } from '@/components/PartnerMarquee';

export const metadata: Metadata = { title: 'About Me | AngieSun' };

const honors = [
  'Rotman Design Challenges 2024 - Third Place',
  'Hult Prize 2024 - Global Summits Top 1%',
  'Parsons School of Design 2023–2025 - Scholarship',
  'Green Concept Award 2021 - Nominee of the Year',
  'Ringle Galleries Undergraduate Design Exhibition 2021 - ID First Place',
];
const employers = ['Search For High School', 'Nanchang Yisheng Auto Parts Ltd.', 'Flexsteel Industries, Inc.'];

export default function AboutPage() {
  return (
    <main className="about-page">
      <SiteHeader />
      <header className="about-intro">
        <p>Keep Exploring and Crafting</p>
        <h1>A Sustainable Future.</h1>
      </header>

      <section className="about-overview" aria-label="Profile and education">
        <h2 className="about-label"><span aria-hidden="true">↱</span> Profile</h2>
        <figure className="profile-card">
          <img src="/assets/angie-portrait.jpg" alt="Angie Sun" />
          <figcaption>Angie Sun</figcaption>
        </figure>
        <h2 className="about-label"><span aria-hidden="true">↱</span> Education</h2>
        <div className="education-cards">
          <article className="education-card">
            <div className="school-name"><img src="/assets/logos/parsons.png" alt="The New School Parsons" /></div>
            <p>Master of Science</p>
            <h3>Strategic Design and Management</h3>
            <div className="education-meta"><span>2023–2025</span><span>GPA 3.83</span></div>
          </article>
          <article className="education-card">
            <div className="school-name"><img src="/assets/logos/purdue.png" alt="Purdue University" /></div>
            <p>Bachelor of Fine Art</p>
            <h3>Industrial and Product Design</h3>
            <div className="education-meta"><span>2017–2021</span><span>GPA 3.54</span></div>
          </article>
        </div>
      </section>

      <section className="about-detail about-experience" aria-labelledby="experience-title">
        <h2 className="about-label" id="experience-title"><span aria-hidden="true">↱</span><span>Work<br />Experience</span></h2>
        <ul className="about-lines">{employers.map((name) => <li key={name}>{name}</li>)}</ul>
      </section>
      <section className="about-partners" aria-labelledby="partners-title">
        <h2 id="partners-title">Who I worked with before <span aria-hidden="true">↓</span></h2>
        <PartnerMarquee />
      </section>
      <section className="about-detail about-honors" aria-labelledby="honor-title">
        <h2 className="about-label" id="honor-title"><span aria-hidden="true">↱</span> Honor</h2>
        <ul className="about-lines">{honors.map((honor) => <li key={honor}>{honor}</li>)}</ul>
      </section>
      <div className="about-resume"><a href="/assets/angie-resume.pdf" target="_blank" rel="noreferrer">Download my Resume</a></div>
      <Footer />
    </main>
  );
}
