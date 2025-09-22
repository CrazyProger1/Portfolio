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
    <div className="flex flex-col gap-16 py-2">
      <IntroductionSection />
      <HorizontalDivider id="about" text="About" />
      <AboutSection />
      <HorizontalDivider id="experience" text="Expericence" />
      <ExperienceSection params={params} />
      <HorizontalDivider id="contactme" text="Contact Me" />
      <ContactMeSection />
    </div>
  );
};

export default Page;
