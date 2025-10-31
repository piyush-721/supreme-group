"use client";

import { useState } from "react";
import Image from "next/image";

export default function VehicleSolutionsSection() {
  const [category, setCategory] = useState("passenger");
  const [activePart, setActivePart] = useState("complete");

  // Passenger assets
  const passengerPartIcons = {
    complete: "/assets/images/Car-Complete-Body.png",
    front: "/assets/images/Car-Front.png",
    cabin: "/assets/images/Car-Cabin.png",
    trunk: "/assets/images/Car-Trunk.png",
    exterior: "/assets/images/Car-Exterior.png",
  };
  const passengerVehicleVideos = {
    complete: "/assets/videos/Car-Complete-Body.mp4",
    front: "/assets/videos/Car-Front.mp4",
    cabin: "/assets/videos/Car-Cabin.mp4",
    trunk: "/assets/videos/Car-Trunk.mp4",
    exterior: "/assets/videos/Car-Exterior.mp4",
  };
  const passengerVehicleParts = [
    { id: "complete", label: "Complete body" },
    { id: "front", label: "Front" },
    { id: "cabin", label: "Cabin" },
    { id: "trunk", label: "Trunk" },
    { id: "exterior", label: "Exterior" },
  ];

  // Commercial assets
  const commercialPartIcons = {
    complete: "/assets/images/Truck-Complete-Body.png",
    engine: "/assets/images/Truck-Engine.png",
    cabin: "/assets/images/Truck-Cabin.png",
  };
  const commercialVehicleVideos = {
    complete: "/assets/videos/Truck-Complete-Body.mp4",
    engine: "/assets/videos/Truck-engine.mp4",
    cabin: "/assets/videos/Truck-Cabin.mp4",
  };
  const commercialVehicleParts = [
    { id: "complete", label: "Complete Body" },
    { id: "engine", label: "Engine" },
    { id: "cabin", label: "Cabin" },
  ];

  const partIcons =
    category === "passenger" ? passengerPartIcons : commercialPartIcons;
  const vehicleVideos =
    category === "passenger" ? passengerVehicleVideos : commercialVehicleVideos;
  const vehicleParts =
    category === "passenger" ? passengerVehicleParts : commercialVehicleParts;

  const handleCategoryClick = (type) => {
    setCategory(type);
    setActivePart(
      type === "passenger"
        ? passengerVehicleParts[0].id
        : commercialVehicleParts[0].id
    );
  };

  return (
    <section className="relative w-full min-h-[calc(100vh+100px)] md:min-h-[calc(100vh-300px)] lg:min-h-[calc(100vh+100px)] bg-black text-white overflow-x-hidden py-0">
      <div className="flex flex-col items-center pt-14 px-4 sm:px-6 md:px-10">
        {/* Heading */}
        <h2 className="font-[Manrope] font-light text-[36px] sm:text-[42px] md:text-[48px] leading-[1.1] tracking-[-0.5%] text-center mb-10 sm:mb-12">
          <span className="inline-block max-w-[780px]">
            Evolving the drive with{" "}
            <span className="font-semibold">360-degree</span> comprehensive
            solutions
          </span>
        </h2>

        {/* Main content */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center px-[4vw] sm:px-[6vw] md:px-[8vw] mt-4">
          {/* LEFT SIDE */}
          <div className="relative flex flex-col justify-start space-y-10 md:mr-6 md:mt-8 pl-5 mb-10 md:mb-0 w-full md:w-auto">
            {/* vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-600 hidden md:block">
              <div
                className={`absolute top-0 left-0 w-full transition-all duration-700 ${
                  category === "passenger"
                    ? "h-1/2 bg-white"
                    : "h-1/2 bg-gray-600"
                }`}
              ></div>
              <div
                className={`absolute bottom-0 left-0 w-full transition-all duration-700 ${
                  category === "commercial"
                    ? "h-1/2 bg-white"
                    : "h-1/2 bg-gray-600"
                }`}
              ></div>
            </div>

            {/* Passenger vehicles */}
            <div className="relative z-10 text-center md:text-left">
              <h3
                onClick={() => handleCategoryClick("passenger")}
                className={`text-[24px] sm:text-[26px] md:text-[28px] font-semibold pl-0 md:pl-3 cursor-pointer transition-all duration-300 ${
                  category === "passenger"
                    ? "text-white"
                    : "text-gray-500 opacity-70"
                }`}
              >
                Passenger vehicles
              </h3>
              <p
                className={`pl-0 md:pl-3 mt-2 text-[16px] sm:text-[17px] transition-all ${
                  category === "passenger"
                    ? "text-gray-300"
                    : "text-gray-600 opacity-60"
                }`}
              >
                Revving up innovation from interior to exterior.
              </p>
            </div>

            {/* Commercial vehicles */}
            <div className="relative z-10 text-center md:text-left">
              <h3
                onClick={() => handleCategoryClick("commercial")}
                className={`text-[24px] sm:text-[26px] md:text-[28px] font-semibold pl-0 md:pl-3 cursor-pointer transition-all duration-300 ${
                  category === "commercial"
                    ? "text-white"
                    : "text-gray-500 opacity-70"
                }`}
              >
                Commercial vehicles
              </h3>
              <p
                className={`pl-0 md:pl-3 mt-2 text-[16px] sm:text-[17px] transition-all ${
                  category === "commercial"
                    ? "text-gray-300"
                    : "text-gray-600 opacity-60"
                }`}
              >
                Advancing engineering for heavy-duty vehicles.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-center w-full md:w-auto">
            <video
              key={`${category}-${activePart}`}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/assets/images/video-fallback.jpg"
              className="w-full sm:w-[500px] md:w-[620px] max-w-full object-contain"
            >
              <source src={vehicleVideos[activePart]} type="video/mp4" />
            </video>

            <div className="flex flex-wrap justify-center gap-5 sm:gap-6 md:gap-7 mt-8">
              {vehicleParts.map((part) => {
                const active = activePart === part.id;
                return (
                  <button
                    key={part.id}
                    onClick={() => setActivePart(part.id)}
                    className={`flex flex-col items-center transition-all duration-300 ${
                      active
                        ? "opacity-100 scale-110"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <div
                      className={`w-[45px] sm:w-[50px] h-[45px] sm:h-[50px] flex items-center justify-center rounded-lg ${
                        active ? "bg-white/20" : "bg-white/0"
                      }`}
                    >
                      <Image
                        src={partIcons[part.id]}
                        alt={part.label}
                        width={42}
                        height={42}
                        className="object-contain"
                      />
                    </div>
                    <span
                      className={`mt-2 sm:mt-3 text-xs sm:text-sm ${
                        active ? "text-white" : "text-gray-300"
                      }`}
                    >
                      {part.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
