import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import ProjectsCarouselComponent from "../components/projects/ProjectsCarousel.component";

const ProjectsPage = () => {
  const route = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (route.pathname.slice(1)) {
      console.log(route.pathname.slice(1));

      setIsVisible(route.pathname.slice(1) === "projects");
    }
  }, [route]);
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <ProjectsCarouselComponent />
    </motion.div>
  );
};

export default ProjectsPage;
