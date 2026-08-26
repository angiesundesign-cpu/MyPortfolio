import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { ProjectCard } from '@/components/ProjectCard';
import { SiteHeader } from '@/components/SiteHeader';
import { projects, regoCard } from '@/lib/portfolio-data';

export const metadata: Metadata = { title: 'Work | AngieSun' };

export default function WorkPage() {
  return (
    <main>
      <SiteHeader />
      <section className="work-page">
        <h1>My work</h1>
        <div className="work-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} title={project.cardTitle} image={project.cover} href={`/${project.slug}`} tag={project.disciplines.some((item) => item.includes('UI')) ? 'UIUX' : 'ID'} />
          ))}
          <ProjectCard title={regoCard.cardTitle} image={regoCard.cover} tag="ID" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
