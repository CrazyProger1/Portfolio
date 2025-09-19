"use client";

import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SmoothLink } from "@/components/common/utils";
import { Project } from "@/types";

import { NextArrow } from "./NextArrow";
import { PrevArrow } from "./PrevArrow";
import { ProjectItem } from "./ProjectItem";

interface Props {
  projects: Project[];
}

export const ProjectSlider = ({ projects }: Props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
        <SmoothLink
          href={`?project=${project.id}`}
          className="slider-item py-10"
          key={project.name}
        >
          <ProjectItem project={project} />
        </SmoothLink>
      ))}
    </Slider>
  );
};
