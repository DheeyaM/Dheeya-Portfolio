import { useRef } from "react";
import ProjectCard from "../components/ProjectCard";

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
                    image="https://via.placeholder.com/400x200"
                    title="Recipe Website"
                    description="My first HTML + CSS project."
                    tech={["HTML", "CSS"]}
                    github="https://github.com"
                    demo="https://example.com"
                />
                <ProjectCard
                    image="https://via.placeholder.com/400x200"
                    title="Recipe Website"
                    description="My first HTML + CSS project."
                    tech={["HTML", "CSS"]}
                    github="https://github.com"
                    demo="https://example.com"
                />
                <ProjectCard
                    image="https://via.placeholder.com/400x200"
                    title="Recipe Website"
                    description="My first HTML + CSS project."
                    tech={["HTML", "CSS"]}
                    github="https://github.com"
                    demo="https://example.com"
                />
                <ProjectCard
                    image="https://via.placeholder.com/400x200"
                    title="Recipe Website"
                    description="My first HTML + CSS project."
                    tech={["HTML", "CSS"]}
                    github="https://github.com"
                    demo="https://example.com"
                />
                <ProjectCard
                    image="https://via.placeholder.com/400x200"
                    title="Recipe Website"
                    description="My first HTML + CSS project."
                    tech={["HTML", "CSS"]}
                    github="https://github.com"
                    demo="https://example.com"
                />
                <ProjectCard
                    image="https://via.placeholder.com/400x200"
                    title="Recipe Website"
                    description="My first HTML + CSS project."
                    tech={["HTML", "CSS"]}
                    github="https://github.com"
                    demo="https://example.com"
                />
                <ProjectCard
                    image="https://via.placeholder.com/400x200"
                    title="Recipe Website"
                    description="My first HTML + CSS project."
                    tech={["HTML", "CSS"]}
                    github="https://github.com"
                    demo="https://example.com"
                />
                <ProjectCard
                    image="https://via.placeholder.com/400x200"
                    title="Recipe Website"
                    description="My first HTML + CSS project."
                    tech={["HTML", "CSS"]}
                    github="https://github.com"
                    demo="https://example.com"
                />

                {/* add more cards here */}

            </div>

        </section>
    );
}

export default Projects;