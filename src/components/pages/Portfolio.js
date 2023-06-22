import React from 'react';
import Project from '../Project';
import '../../styles/Portfolio.css';

const projects = [
  {
    id: 1,
    src: "/assets/images/Project-1-Screenshot.jpg",
    title: "Drinkivity",
    github: "https://github.com/zacharydserafin/drinkivity",
    deployed: "https://zacharydserafin.github.io/drinkivity/"
  },
  {
    id: 2,
    src: "/assets/images/Project-2-Screenshot.png",
    title: "OnlyRecipes",
    github: "https://github.com/MarkellDrake/OnlyRecipes",
    deployed: "https://onlyrecipes.herokuapp.com/"
  },
  {
    id: 3,
    src: "/assets/images/tech-blog-screenshot.png",
    title: "tech-blog",
    github: "https://github.com/zacharydserafin/tech-blog",
    deployed: "https://sheltered-coast-95360.herokuapp.com/"
  },
  {
    id: 4,
    src: "/assets/images/weather-app-screenshot.png",
    title: "weather-app",
    github: "https://github.com/zacharydserafin/weather-app",
    deployed: "https://zacharydserafin.github.io/weather-app/"
  },
  {
    id: 5,
    src: "/assets/images/javascript-quiz-screenshot.png",
    title: "javascript-quiz",
    github: "https://github.com/zacharydserafin/javascript-quiz",
    deployed: "https://zacharydserafin.github.io/javascript-quiz/"
  },
  {
    id: 6,
    src: "/assets/images/planner-app-screenshot.png",
    title: "planner-app",
    github: "https://github.com/zacharydserafin/planner-app",
    deployed: "https://zacharydserafin.github.io/planner-app/"
  }
]

export default function Portfolio() {
  return (
    <div className="container text-center">
      <h2 className="portfolio-title">Portfolio</h2>
      <Project projects={projects}/>
    </div>
  );
}