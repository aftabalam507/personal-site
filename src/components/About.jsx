import { useState } from "react";
import bannerImage from "../assets/aft.png";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Java Developer & Web Developer",
    desc1: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Quisquam inventore sunt hic ducimus. Laboriosam esse corrupti
    animi pariatur distinctio similique?`,
    desc2: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
    corporis corrupti distinctio ipsa, sequi in soluta consectetur
    ipsum explicabo cupiditate dignissimos vero repellendus aut,
    ipsam nemo iste quas dolorem? Rerum.`,
    actionButton: {
      title: "Read More...",
      link: "/readmore",
    },
  });

  return (
    <>
      <div className="main-container bg-gray-100 py-12">
        <h1 className="text-5xl underline font-bold text-center pb-16">
          About Me
        </h1>
        <div className="flex items-center">
          {/* image container */}
          <div className="w-full flex justify-center">
            <img className="w-fit" src={data.image} alt="aftab alam" />
          </div>

          {/* text container */}
          <div className="w-full flex justify-center">
            <div className="space-y-5 w-2/3">
              <h1 className="text-5xl font-semibold">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
