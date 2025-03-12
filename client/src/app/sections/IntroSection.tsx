import IntroText from "@/components/texts/IntroText";
import IntroImage from "@/components/images/IntroImage";
import MotionWrapper from "@/components/wrappers/MotionWrapper";
import { IMAGES } from "@/config/images";

const IntroSection = () => (
  <div className="flex flex-row items-center select-none justify-evenly">
    <MotionWrapper whileHover={{ scale: 1.02 }}>
      <IntroText />
    </MotionWrapper>
    <MotionWrapper whileHover={{ scale: 1.02 }}>
      <IntroImage src={IMAGES.intro} />
    </MotionWrapper>
  </div>
);

export default IntroSection;
