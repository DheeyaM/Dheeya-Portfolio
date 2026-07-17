import { useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import RecipeWebsite from "./images/RecipeWebsite.png";
import todoApp from "./images/ToDo1.png";
import expenseTracker1 from "./images/ExpenseTracker1.png";
import expenseTracker2 from "./images/ExpenseTracker2.png";
import inventorytracker from "./images/InventoryTracker.png";
import toDo2 from "./images/ToDo2.png";

function Projects() {
    const galleryRef = useRef(null);

    const scroll = (direction) => {
        const container = galleryRef.current;

        const scrollAmount = 380; // width of card + gap

        container.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <section className="projects" id="projects">

            <p className="section-label">MY WORK</p>

            <h1 className="section-title">
                Featured <span className="accent">Projects</span>
            </h1>

            <p className="bio">
                Some projects I've built while learning fullstack development.
            </p>

            {/* BUTTONS */}
            <div className="gallery-controls">
                <button onClick={() => scroll("left")}>←</button>
                <button onClick={() => scroll("right")}>→</button>
            </div>

            {/* SCROLLING GALLERY */}
            <div className="project-gallery" ref={galleryRef}>

                <ProjectCard
                    image={RecipeWebsite}
                    title="Recipe Website"
                    description="My first HTML + CSS project."
                    tech={["HTML", "CSS"]}
                    github="https://github.com/DheeyaM/recipe-website"
                    demo="https://dheeyam.github.io/recipe-website/"
                />
                <ProjectCard
                    image={todoApp}
                    title="Task Manager I"
                    description="My first HTML + CSS + JavaScript project."
                    tech={["HTML", "CSS", "Javascript"]}
                    github="https://github.com/DheeyaM/To-Do-List"
                    demo="https://dheeyam.github.io/To-Do-List/"
                />
                <ProjectCard
                    image={expenseTracker1}
                    title="Expense Tracker I"
                    description="A simple expense tracker app built with HTML, CSS, and JavaScript."
                    tech={["HTML", "CSS", "Javascript"]}
                    github="https://github.com/DheeyaM/ExpenseTracker"
                    demo="https://dheeyam.github.io/ExpenseTracker/"
                />
                <ProjectCard
                    image={expenseTracker2}
                    title="Expense Tracker II"
                    description="An expense tracker app with charts"
                    tech={["HTML", "CSS", "Javascript", "chart.js"]}
                    github="https://github.com/DheeyaM/Smart-Expense-Tracker"
                    demo="https://dheeyam.github.io/Smart-Expense-Tracker/"
                />
                <ProjectCard
                    image={inventorytracker}
                    title="Inventory Tracker"
                    description="A crochet inventory tracker for my business."
                    tech={["HTML", "CSS", "Javascript"]}
                    github="https://github.com/DheeyaM/Inventory-Tracker"
                    demo="https://dheeyam.github.io/InventoryTracker/"
                />
                <ProjectCard
                    image={toDo2}
                    title="Task Manager II"
                    description="My first React project"
                    tech={["Javascript", "React"]}
                    github="https://github.com/DheeyaM/TaskManager"
                    // demo="example.com"
                />
               



            </div>

        </section>
    );
}

export default Projects;