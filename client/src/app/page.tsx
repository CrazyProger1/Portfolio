import IntroSection from "@/app/sections/IntroSection";
import AboutSection from "@/app/sections/AboutSection";
import ProjectsSection from "@/app/sections/ProjectsSection";
import ContactMeSection from "@/app/sections/ContactMeSection";
import HorizontalDivider from "@/components/dividers/HorizontalDivider";

const Home = () => {
  return (
    <main className="container">
      <div className="mt-6" />
      <IntroSection />

      <div className="mt-14" />
      <HorizontalDivider text="About" />
      <AboutSection />

      <div className="mt-6" />
      <HorizontalDivider text="Projects" />
      <ProjectsSection />

      <div className="mt-6" />
      <HorizontalDivider text="Contact Me" />
      <ContactMeSection />
    </main>
  );
};

export default Home;
