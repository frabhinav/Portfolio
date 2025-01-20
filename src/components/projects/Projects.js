import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Weather App"
          des=" This app provides real-time weather updates using the Rapid API Visual Crossing API. It allows users to check current conditions and forecasts by searching cities or using geolocation, with dynamic background changes based on the weather."
          src={projectOne}
          githubLink="https://github.com/frabhinav/weather_app"
          liveLink="https://weather-app-gilt-nu-44.vercel.app/"
        />
        <ProjectsCard
          title="To-do App"
          des=" A simple to-do list app built with React that features a dark mode theme and a toggle button to switch between card and list views. It offers an intuitive UI for managing tasks with customizable display options."
          src={projectTwo}
          githubLink="https://github.com/frabhinav/to-do"
          liveLink="https://to-do-quadb-tech.vercel.app/"
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" A simple e-commerce website using Ant Design in React JS app. The main features includes App Header, App Footer, App routing using react-router-dom, API integration to fetch data from server, Show list of e-commerce products with their details"
          src={projectThree}
          githubLink="https://github.com/frabhinav/e-commerce-reactjs"
          liveLink="https://ecommerce-task2.vercel.app/"
        />
        <ProjectsCard
          title="Student Dashboard React"
          des=" A dashboard that tracks and displays student progress with features like grade tracking, course schedules, and notifications. Built using React and integrated with a backend for data management."
          src={projectFour}
          githubLink="https://github.com/frabhinav/react-dashboard"
          liveLink="https://react-dashboard-abhinav.vercel.app/"
        />
        <ProjectsCard
          title="Travel Tracking App"
          des=" An interactive map-based app that allows users to explore and add cities globally. Built with React and React Leaflet, it features geolocation and stores user data locally for persistence. The app provides a visually rich map experience for managing and viewing cities."
          src={projectFive}
          githubLink="https://github.com/frabhinav/WorldWise"
          liveLink="https://world-wise-ten-tau.vercel.app/"
        />
        <ProjectsCard
          title="Food Odering App"
          des=" An online pizza ordering system with customizable orders and real-time status updates. Built with React, it offers an interactive interface for users to select pizzas, toppings, and more. Users can customize their orders and track delivery status seamlessly."
          src={projectSix}
          githubLink="https://github.com/frabhinav/Naples-pizza"
          liveLink="https://naples-pizza.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
