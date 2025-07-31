import { HorizontalDivider } from "@/components/common/dividers";
import { AboutSection } from "@/components/modules/about";
import { ContactMeSection } from "@/components/modules/contact";
import { ExperienceSection } from "@/components/modules/experience";
import { IntroductionSection } from "@/components/modules/introduction";

export default function Page() {
  return (
    <div className="flex flex-col gap-16 py-2">
      <IntroductionSection />
      <HorizontalDivider text="About" />
      <AboutSection />
      <HorizontalDivider text="Expericence" />
      <ExperienceSection />
      <HorizontalDivider text="Contact Me" />
      <ContactMeSection />
    </div>
  );
}
