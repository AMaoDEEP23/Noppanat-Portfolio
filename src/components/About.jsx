import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-white text-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Big A, nice to meet you. Please take a look a around.
            </p>
          </div>
          <div>
            <p> Becoming selected to participate in the program cohort 6 at Junior
              Software Developer program, Generation Thailand. My goal is to
              become a full-stack developer and passionate about both front-end
              and back-end development, with a keen focus on designing dynamic
              and user-friendly websites. Proven skills in crisis management,
              problem-solving, and fostering effective teamwork and
              collaboration.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
