import { Box, Stack, useMediaQuery } from "@mui/material";

import React, { useEffect, useMemo, useRef } from "react";
import Slider, { Settings } from "react-slick";
import { NextArrow, PrevArrow } from "./CustomArrows.component";

import ProjectItemComponent from "./ProjectItem.component";

const ProjectsCarouselComponent = () => {
  const matchesLaptop = useMediaQuery("(max-width:900px)");
  const settings: Settings = {
    dots: !matchesLaptop,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    nextArrow: matchesLaptop ? <></> : <PrevArrow />,
    prevArrow: matchesLaptop ? <></> : <NextArrow />,
    vertical: matchesLaptop,
    verticalSwiping: matchesLaptop,
  };

  return (
    <Stack
      marginTop={"10vh"}
      sx={{ backgroundColor: "rgba(159, 221, 248, 0.49)" }}
      paddingLeft="3vw"
      paddingRight="3vw"
      paddingTop={"30px"}
      paddingBottom={"30px"}
    >
      <div>
        <Slider {...settings}>
          <ProjectItemComponent />

          <ProjectItemComponent />

          <ProjectItemComponent />

          <ProjectItemComponent />

          <ProjectItemComponent />

          <ProjectItemComponent />

          <ProjectItemComponent />

          <ProjectItemComponent />

          <ProjectItemComponent />

          <ProjectItemComponent />

          <ProjectItemComponent />
        </Slider>
      </div>
    </Stack>
  );
};

export default ProjectsCarouselComponent;
