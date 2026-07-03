import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import GithubSection from "@/components/sections/Github";
import BlogSection from "@/components/sections/Blog";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

const SectionDivider = () => (
  <div className="section-divider mx-auto max-w-5xl px-8" aria-hidden="true" />
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hook — First impression, CTA */}
      <Hero />
      <SectionDivider />
      {/* 2. Who — Personal story & expertise */}
      <About />
      <SectionDivider />
      {/* 3. Work — Projects with case studies */}
      <Projects />
      <SectionDivider />
      {/* 4. Tools — Skills & tech stack */}
      <Skills />
      <SectionDivider />
      {/* 5. Journey — Experience timeline */}
      <Experience />
      <SectionDivider />
      {/* 6. Education */}
      <Education />
      <SectionDivider />
      {/* 7. Open Source — GitHub activity */}
      <GithubSection />
      <SectionDivider />
      {/* 8. Writing — Blog / articles */}
      <BlogSection />
      <SectionDivider />
      {/* 9. Credentials */}
      <Certifications />
      <SectionDivider />
      {/* 10. Hire me — Contact */}
      <Contact />
    </div>
  );
}
