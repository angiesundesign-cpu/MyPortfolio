import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import { expertise, getProject } from '@/lib/portfolio-data';

const featuredSlugs = ['bsc', 'waterfall', 'boulder', 'fillin', 'emard'];
const homeCovers: Record<string, string> = {
  bsc: '/assets/home/blank-street-coffee.png',
  emard: '/assets/home/emard-delta-expanded.png',
};

export default function Home() {
  const featured = featuredSlugs.map((slug) => getProject(slug)).filter(Boolean);

  return (
    <main>
      <SiteHeader />
      <section className="hero">
        <p>Hi, I&apos;m Angie</p>
        <h1>Welcome to my<br />portfolio.</h1>
        <a className="featured-jump" href="#featured">Featured Work <span>↓</span></a>
      </section>

      <section className="featured-mosaic" id="featured" aria-label="Featured work">
        {featured.map((project) => project ? (
          <a className={`mosaic-card mosaic-card-${project.slug}`} href={`/${project.slug}`} key={project.slug}>
            <img src={homeCovers[project.slug] ?? project.cover} alt={project.cardTitle} loading="lazy" />
            <span>{project.cardTitle}</span>
          </a>
        ) : null)}
      </section>
      <div className="center-action"><a className="green-pill" href="/work">Check More Work</a></div>

      <section className="expertise-section" id="expertise">
        <div className="expertise-side">
          <p>→&nbsp; My Expertise</p>
          <a className="green-pill" href="/aboutme">More About Me</a>
        </div>
        <div className="expertise-list">
          {expertise.map(([title, description]) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
