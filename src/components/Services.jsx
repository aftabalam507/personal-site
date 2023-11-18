import { useState } from "react";

const Services = () => {
  useState([
    {
      id: "",
      title: "",
      desc: "",
      actionButton: {
        title: "",
        link: "",
      },
    },
  ]);

  return (
    <>
      <div className="main-container py-12">
        <h1 className="text-5xl font-bold text-center underline">
          My Services
        </h1>

        <div className="services-container space-x-5 px-10 flex  mt-12">
          <div className="cursor-pointer hover:bg-gray-100 shadow-lg bg-slate-200 p-5 text-center rounded-xl service1 space-y-3">
            <i class="text-4xl fa-brands fa-aws"></i>
            <h1 className="text-4xl">Web Developmet</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              rerum esse quia maiores doloremque veritatis delectus eveniet eum
              expedita maxime?
            </p>
            <button className="px-3 py-2 text-2xl bg-orange-500 rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className="cursor-pointer hover:bg-gray-100 shadow-lg bg-slate-200 p-5 text-center rounded-xl service2 space-y-3">
            <i class="text-4xl fa-solid fa-mobile"></i>
            <h1 className="text-4xl">Android Developmet</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              rerum esse quia maiores doloremque veritatis delectus eveniet eum
              expedita maxime?
            </p>
            <button className="px-3 py-2 text-2xl bg-orange-500 rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className="cursor-pointer hover:bg-gray-100 shadow-lg bg-slate-200 p-5 text-center rounded-xl service3 space-y-3">
            <i class="text-4xl fa-solid fa-server"></i>
            <h1 className="text-4xl">Backend Developmet</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              rerum esse quia maiores doloremque veritatis delectus eveniet eum
              expedita maxime?
            </p>
            <button className="px-3 py-2 text-2xl bg-orange-500 rounded-full shadow-lg">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
