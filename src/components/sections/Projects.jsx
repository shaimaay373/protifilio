import { lazy, Suspense } from 'react';
import { projects } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';

const ProjectCard = lazy(() => import('../ui/ProjectCard'));

function ProjectSkeleton() {
  return <div className="project-card project-card--skeleton glass-card" aria-hidden="true" />;
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeader
        tag="Featured Work"
        title="Projects"
        subtitle="Full-stack applications and web solutions I've built"
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Suspense key={project.id} fallback={<ProjectSkeleton />}>
            <ProjectCard project={project} index={index} />
          </Suspense>
        ))}
      </div>

    </section>
  );
}
