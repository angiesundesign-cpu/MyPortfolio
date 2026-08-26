import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectPage } from '@/components/ProjectPage';
import { getProject, projects } from '@/lib/portfolio-data';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | AngieSun Portfolio`,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary, images: [{ url: project.cover }] },
    twitter: { card: 'summary_large_image', title: project.title, description: project.summary, images: [project.cover] },
  };
}

export default async function ProjectRoute({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  return <ProjectPage project={project} nextSlug={next.slug} />;
}
