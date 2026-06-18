import { useState } from "react";

function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    "Type 'help' to see available commands."
  ]);

  const commands = {
    help: [
      "Available commands:",
      "about",
      "skills",
      "projects",
      "hobbies",
      "contact",
      "clear"
    ],

    about: [
      "21 year old Computer Science student at UKZN.",
      "Passionate about fullstack development and continuous learning."
    ],

    skills: [
      "Java",
      "JavaScript",
      "React",
      "Python",
      "C++",
      "C#",
      "SQL",
      "Tailwind CSS"
    ],

    projects: [
      "• Portfolio Website",
      "• Expense Tracker",
      "• To-Do App",
      "• Recipe Website"
    ],

    hobbies: [
      "🎮 Gaming",
      "🧶 Crocheting",
      "📈 Trading"
    ],

    contact: [
      "Email: dheeyam7@gmail.com",
      "GitHub: https://github.com/DheeyaM",
      "LinkedIn: https://www.linkedin.com/in/dheeya-manilal/"
    ]
  };

  function handleCommand(e) {
    if (e.key !== "Enter") return;

    const command = input.toLowerCase().trim();

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    if (commands[command]) {
      setHistory(prev => [
        ...prev,
        `dheeya@portfolio:~$ ${command}`,
        ...commands[command]
      ]);
    } else {
      setHistory(prev => [
        ...prev,
        `dheeya@portfolio:~$ ${command}`,
        "Command not found."
      ]);
    }

    setInput("");
  }

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="dot red"></div>
        <div className="dot yellow"></div>
        <div className="dot green"></div>
      </div>

      <div className="terminal-body">
        {history.map((line, index) => (
          <p key={index}>{line}</p>
        ))}

        <div className="terminal-input-row">
          <span className="prompt">
            dheeya@portfolio:~$
          </span>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}

export default Terminal;