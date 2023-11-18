import bannerBackground from "../assets/banner_wallpaper.svg";

const Expertise = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className="mb-12 text-5xl font-bold underline text-center">
          My Expertise
        </h1>

        {/* box section */}
        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-12"
        >
          <div>
            {/* text-container */}
            <div className="flex text-white justify-center">
              <div className="w-2/3 text-center space-y-4">
                <h1 className="text-4xl font-semibold ">
                  I love these technologies
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  eius deserunt dolorem rem numquam illo molestiae, vero
                  suscipit autem iusto.
                </p>
                <button className="text-2xl px-4 py-2 bg-orange-500 rounded-full">
                  Hire Me
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            {/* skill-container */}
            <div className="flex justify-center w-2/3 h-fit space-x-3 flex-wrap ">
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Core Java
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                J2EE
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Hibernate(ORM Tool)
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Spring Framework
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Spring Boot Framework
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Spring Security
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Javascript
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                React JS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Tailwind CSS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Servlet
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                JSP
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
