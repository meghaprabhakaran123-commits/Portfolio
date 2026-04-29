import ProjectCard from './ProjectCard';

export default function MasonryGrid({ projects, onProjectClick }) {
  return (
    <div className="masonry-grid">
      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} onClick={() => onProjectClick(project)} />
      ))}
    </div>
  );
}
