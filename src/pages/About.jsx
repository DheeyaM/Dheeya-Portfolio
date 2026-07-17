import React from "react";
import Terminal from "../components/Terminal";


const funFacts = [
  {
    icon: "ti-code",
    title: "I leetcode",
    desc: "Blind 75 in Java — pattern recognition over memorisation, always.",
  },
  {
    icon: "ti-needle-thread",
    title: "I crochet",
    desc: "Making things with my hands keeps me grounded and yes, it requires patience just like debugging.",
  },
  {
    icon: "ti-device-gamepad-2",
    title: "I game",
    desc: "Fast decision making under pressure. Basically the same skill set as a production outage.",
  },
];

const skills = [
  {
    category: "Languages",
    tags: ["Java", "JavaScript", "React", "C++", "Python", "C#", "Tailwind CSS", "HTML", "CSS", "SQL"],
  },
  {
    category: "Currently learning",
    tags: ["Spring Boot"],
  },
];

function About() {
  return (
    // Outer wrapper — the whole section
    <div className="about" id="about">

      <span className="section-label">About me</span>
      <h2 className="section-title">
        The person<br /><span className="accent">behind the code.</span>
      </h2>

      {/* about-grid is the two-column layout container.
          Both left-col AND right-col must be direct children of it. */}
      <div className="about-grid">

        {/* ── LEFT COLUMN ── bio + fun facts */}
        <div className="left-col">
          <p className="bio">
            I'm <strong>Dheeya Manilal</strong>, a final-year Computer Science student at UKZN.
            I got serious about building real things on my own. Taught myself JavaScript and React,
            built projects from scratch and found out I actually enjoy the process of making something
            work when it really shouldn't.
          </p>
        

          <div className="divider" />

          <p className="fun-title">A few things about me</p>

          <div className="fun-facts">
            {/* .map() loops over funFacts and returns one JSX card per item.
                key={fact.title} is required — React uses it to track list items. */}
            {funFacts.map((fact) => (
              <div className="fact-item" key={fact.title}>
                {/* Tabler icon — the icon name comes from the data array above */}
                <i className={`ti ${fact.icon} fact-icon`} aria-hidden="true" />
                <div className="fact-text">
                  <strong>{fact.title}</strong>
                  {fact.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ── end left-col ── */}

        {/* ── RIGHT COLUMN ── skills
            THIS was outside about-grid in your original code — that's the bug. */}
        <div className="right-col">
          {skills.map((group) => (
            <div className="skills-block" key={group.category}>
              <p className="skills-cat">{group.category}</p>
              <div className="tags">
                {group.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <Terminal />
        </div>
        {/* ── end right-col ── */}

      </div>
      {/* ── end about-grid ── */}

    </div>
    // ── end about section ──
  );
}

export default About;

//test