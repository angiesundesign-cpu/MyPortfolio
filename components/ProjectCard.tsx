type CardProps = {
  title: string;
  image: string;
  href?: string;
  tag: string;
};

export function ProjectCard({ title, image, href, tag }: CardProps) {
  const content = (
    <>
      <div className="work-card-image"><img src={image} alt={title} loading="lazy" /></div>
      <div className="work-card-caption"><span>{title}</span><span>,&nbsp; {tag}</span></div>
    </>
  );

  return href ? <a className="work-card" href={href}>{content}</a> : <div className="work-card is-disabled">{content}</div>;
}
