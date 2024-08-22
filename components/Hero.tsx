import { MagicButton } from '@/components/ui/MagicButton';
import { Spotlight } from '@/components/ui/Spotlight';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';
import Link from 'next/link';
import { FaLocationArrow } from 'react-icons/fa';

export const Hero = () => {
  return (
    <div className="max-w-7xl w-full flex flex-col items-center pb-20 pt-36">
      <Spotlight
        className="-top-40 -left-10 md:-top-20 md:-left-32 h-screen"
        fill="white"
      />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vh]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="blue" />
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-blue-100 text-xs text-center max-w-80 mb-5">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experiences"
          />
          {/* <h1 className="text-white text-5xl text-center mb-6 max-w-[800px]">
            Transforming Concepts into Seamless{' '}
            <span className="text-purple">User Experiences</span>
          </h1> */}
          <p className="text-white-100 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I'm Keita, a Next.js Developer based in Berlin, Germany.
          </p>
          <a href="#about">
            <MagicButton
              title="See my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
