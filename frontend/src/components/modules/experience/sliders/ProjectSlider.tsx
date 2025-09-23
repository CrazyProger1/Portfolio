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
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1536, // 2xl
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0, // xs
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
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
