import IntroText from "@/components/texts/IntroText";
import IntroImage from "@/components/images/IntroImage";
import { IMAGES } from "@/config/images";

const IntroSection = () => (
  <div className="flex flex-row items-center select-none justify-evenly">
    <IntroText />
    <IntroImage src={IMAGES.intro} />
  </div>
);

export default IntroSection;
