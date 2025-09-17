"use client";

import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";

import Image from "next/image";
import React from "react";
import { FaChevronLeft, FaChevronRight, FaCodeBranch, FaStar } from "react-icons/fa";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Motion } from "@/components/common/utils";
import { Project } from "@/types";

interface Props {
  projects: Project[];
}

const CustomNextArrow = (props: any) => {
  const { onClick } = props;

  return (
    <Motion
      whileHover={{ scale: 1.1 }}
      className="slick-arrow icon-shine absolute top-1/2 -right-16 z-10 -translate-y-1/2 cursor-pointer p-3 text-white"
      onClick={onClick}
    >
      <FaChevronRight size={32} />
    </Motion>
  );
};

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;

  return (
    <Motion
      whileHover={{ scale: 1.1 }}
      className="slick-arrow icon-shine absolute top-1/2 -left-16 z-10 -translate-y-1/2 cursor-pointer p-3 text-white"
      onClick={onClick}
    >
      <FaChevronLeft size={32} />
    </Motion>
  );
};

export const ProjectSlider = ({ projects }: Props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="ms-5 me-5">
      {projects.map((project) => (
        <div className="slider-item p-3" key={project.name}>
          <Motion
            whileHover={{ scale: 1.05 }}
            className="icon-shine flex cursor-pointer flex-col items-center rounded-lg"
          >
            <Image
              src={project.image}
              alt="Project Image"
              width={400}
              height={400}
              className="max-h-60 rounded-lg object-cover"
            />
            <div className="w-full rounded-b-lg p-2">
              <div className="flex flex-col items-center justify-between justify-items-center">
                <div>{project.name}</div>
                <div className="flex flex-row gap-3 text-sm text-gray-300">
                  <div className="flex flex-row items-center gap-1">
                    <FaCodeBranch />
                    <div>{project.version}</div>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <FaStar />
                    <div>3</div>
                  </div>
                </div>
              </div>
            </div>
          </Motion>
        </div>
      ))}
    </Slider>
  );
};
