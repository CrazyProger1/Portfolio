import { HorizontalDivider } from "@/components/common/dividers";
import { AboutSection } from "@/components/modules/about";
import { ContactMeSection } from "@/components/modules/contact";
import { ExperienceSection } from "@/components/modules/experience";
import { IntroductionSection } from "@/components/modules/introduction";
import { SearchParams } from "@/types";

type Props = {
  searchParams: Promise<SearchParams>;
};

const Page = async ({ searchParams }: Props) => {
  const params = await searchParams;

  return (
    <div className="flex flex-col gap-14 py-2">
      <IntroductionSection />
      <div id="about" className="pt-2" />
      <HorizontalDivider text="About" />
      <AboutSection />
      <div id="experience" className="pt-2" />
      <HorizontalDivider text="Expericence" />
      <ExperienceSection params={params} />
      <div id="contactme" className="pt-2" />
      <HorizontalDivider id="contactme" text="Contact Me" />
      <ContactMeSection />
    </div>
  );
};

export default Page;
