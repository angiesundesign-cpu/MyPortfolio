import type { Project } from '@/lib/portfolio-data';
import { Footer } from './Footer';
import { SiteHeader } from './SiteHeader';

export function ProjectPage({ project, nextSlug }: { project: Project; nextSlug?: string }) {
  return (
    <main>
      <SiteHeader />
      <section className="project-intro">
        <div>
          <h1>{project.title}</h1>
          <div className="project-tags">{project.disciplines.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div className="project-description">
          <div className="project-place"><span>{project.location}</span><span>{project.year}</span></div>
          <p>{project.summary}</p>
          {project.externalLabel && project.externalHref ? (
            <a className="text-link" href={project.externalHref} target="_blank" rel="noreferrer">{project.externalLabel} ↗</a>
          ) : null}
        </div>
      </section>

      <section className="project-gallery" aria-label={`${project.title} project images`}>
        {project.gallery.map((image, index) => (
          <figure key={`${image}-${index}`}>
            <img src={image} alt={`${project.title} project view ${index + 1}`} loading={index < 2 ? 'eager' : 'lazy'} />
          </figure>
        ))}
      </section>

      {nextSlug ? <a className="next-project" href={`/${nextSlug}`}>Next Project <span>↘</span></a> : null}
      <Footer />
    </main>
  );
}
