import { ArrowRight } from "lucide-react";
import AnimatedDiv from "../../../ui/Animation/AnimatedDiv";

const RightPanel = () => (
  <AnimatedDiv className="relative w-[550px] h-[700px]" fromRight delay={0.2}>
    <AnimatedDiv fromRight delay={0.3}>
      <img
        className="min-w-[550px] min-h-[700px] w-full h-[700px] rounded-4xl object-cover"
        src="/assets/images/rectangle.png"
        alt="AI Experience"
      />
    </AnimatedDiv>

    <AnimatedDiv
      className="absolute inset-0 z-10 flex justify-between py-2 px-2 flex-col"
      fromRight
      delay={0.4}
    >
      <AnimatedDiv fromRight delay={0.5}>
        <p className="font-['Inter'] text-white text-4xl px-5 py-3 font-light">
          AI Revolutionizing the way we create, render, and experience
        </p>
      </AnimatedDiv>

      <AnimatedDiv
        className="flex flex-col justify-between bg-gray-400/50 h-[180px] backdrop-blur p-6 rounded-4xl"
        fromRight
        delay={0.6}
      >
        <AnimatedDiv
          className="flex relative justify-between items-center"
          fromRight
          delay={0.7}
        >
          <AnimatedDiv
            className="w-12 h-12 border border-gray-100 rounded-full"
            fromRight
            delay={0.8}
          />
          <AnimatedDiv
            className="flex items-center justify-center text-gray-100 w-40 h-12 absolute left-6 border border-gray-100 rounded-full text-sm"
            fromRight
            delay={0.9}
          >
            creating
          </AnimatedDiv>
          <AnimatedDiv
            className="w-32 h-12 border border-gray-100 rounded-full flex items-center"
            fromRight
            delay={1.0}
          >
            <ArrowRight className="w-12 h-12 text-gray-100" />
          </AnimatedDiv>
        </AnimatedDiv>
        <AnimatedDiv className="w-full" fromRight delay={1.1}>
          <p className="font-['Inter'] text-left font-light text-gray-100 text-sm">
            Create design brief with AI voice Command to make awesome 3d images
            that suits your needs
          </p>
        </AnimatedDiv>
      </AnimatedDiv>
    </AnimatedDiv>
  </AnimatedDiv>
);

export default RightPanel;