import IntroSection from "@/app/sections/IntroSection";
import AboutSection from "@/app/sections/AboutSection";
import ProjectsSection from "@/app/sections/ProjectsSection";
import ContactMeSection from "@/app/sections/ContactMeSection";

const Home = () => {
  return (
    <main className="container">
      <div className="mt-6" />
      <IntroSection />
      <div className="mt-6" />
      <AboutSection />
      <div className="mt-6" />
      <ProjectsSection />
      <div className="mt-6" />
      <ContactMeSection />
    </main>
  );
};

export default Home;
