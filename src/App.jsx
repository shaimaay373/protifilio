import { lazy, Suspense } from 'react';
import BackgroundOrbs from './components/layout/BackgroundOrbs';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';

const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Experience = lazy(() => import('./components/sections/Experience'));
const EducationSection = lazy(() => import('./components/sections/Education'));
const Certifications = lazy(() => import('./components/sections/Certifications'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));

function SectionFallback() {
  return <div className="section-fallback" aria-hidden="true" />;
}

export default function App() {
  return (
    <>
      <BackgroundOrbs />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Experience />
          <EducationSection />
          <Certifications />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
