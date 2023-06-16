import React from 'react';
import Project from '../Project';

const projects = [
  {
    src: "/assets/images/Project-1-Screenshot.jpg",
    title: "Drinkivity",
    github: "https://github.com/zacharydserafin/drinkivity",
    deployed: "https://zacharydserafin.github.io/drinkivity/"
  },
  {
    src: "/assets/images/Project-2-Screenshot.png",
    title: "OnlyRecipes",
    github: "https://github.com/MarkellDrake/OnlyRecipes",
    deployed: "https://onlyrecipes.herokuapp.com/"
  },
  {
    src: "/assets/images/tech-blog-screenshot.png",
    title: "tech-blog",
    github: "https://github.com/zacharydserafin/tech-blog",
    deployed: "https://sheltered-coast-95360.herokuapp.com/"
  },
  {
    src: "/assets/images/weather-app-screenshot.png",
    title: "weather-app",
    github: "https://github.com/zacharydserafin/weather-app",
    deployed: "https://zacharydserafin.github.io/weather-app/"
  },
  {
    src: "/assets/images/javascript-quiz-screenshot.png",
    title: "javascript-quiz",
    github: "https://github.com/zacharydserafin/javascript-quiz",
    deployed: "https://zacharydserafin.github.io/javascript-quiz/"
  },
  {
    src: "/assets/images/planner-app-screenshot.png",
    title: "planner-app",
    github: "https://github.com/zacharydserafin/planner-app",
    deployed: "https://zacharydserafin.github.io/planner-app/"
  }
]

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <Project projects={projects}/>
    </div>
  );
}