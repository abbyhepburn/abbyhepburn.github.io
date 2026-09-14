import { useRef, useState } from 'react';
import SectionHeader from './SectionHeader';
import { projects, site } from '../data/portfolio';
const COMMANDS = {
  help: `Available commands:
  help       — show this message
  about      — who am i
  projects   — list projects
  experience — list roles
  skills     — list skills
  resume     — resume link
  contact    — how to reach me
  clear      — clear terminal
  whoami     — print username`,
  about: `${site.name} — Computer Engineering @ UF
Focus: data engineering, computer vision, and software
Location: ${site.location}`,
  projects: projects
    .map((p) => `  • ${p.title} — ${p.tags.join(', ')}`)
    .join('\n'),
  experience: 'BeachLens — Data Engineer Intern\nNextEra Energy — Power Delivery Engineer Intern\nUF Data Studio — Research Assistant',
  skills: site.skills.join(', '),
  resume: 'Resume: /Abigail-Hepburn-Resume.pdf',
  contact: `Email: ${site.email}
GitHub: ${site.github}
LinkedIn: ${site.linkedin}`,
  whoami: 'abigail@portfolio',
};
function TerminalSection() {
  const [history, setHistory] = useState([
    'abigail-hepburn shell v1.0.0 — type `help` to get started',
    '',
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const commandHistory = useRef([]);
  const historyIndex = useRef(0);
  const outputRef = useRef(null);
  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (cmd) { commandHistory.current.push(raw); historyIndex.current = commandHistory.current.length; }
    const lines = [`❯ ${raw}`];
    if (!cmd) {
      setHistory((h) => [...h, ...lines]);
      return;
    }
    if (cmd === 'clear') {
      setHistory([]);
      return;
    }
    if (COMMANDS[cmd]) {
      lines.push(COMMANDS[cmd]);
    } else {
      lines.push(`command not found: ${cmd}. type 'help' for available commands.`);
    }
    lines.push('');
    setHistory((h) => [...h, ...lines]);
    setTimeout(() => {
      if (outputRef.current) {
        outputRef.current.scrollTop = outputRef.current.scrollHeight;
      }
    }, 0);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      const step = e.key === 'ArrowUp' ? -1 : 1;
      historyIndex.current = Math.max(0, Math.min(commandHistory.current.length, historyIndex.current + step));
      setInput(commandHistory.current[historyIndex.current] || '');
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    runCommand(input);
    setInput('');
  };
  return (
    <section id="terminal" className="section">
      <div className="section-container terminal-section">
        <SectionHeader
          num="06"
          slug="talk_to_my_website"
          title="Terminal"
          subtitle="This one actually works. Type help and poke around."
        />
        <div
          className="terminal-window terminal-interactive reveal"
          onClick={() => inputRef.current?.focus()}
          role="presentation"
        >
          <div className="terminal-titlebar">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
            <span className="terminal-filename">abigail@portfolio: ~</span>
          </div>
          <div className="terminal-output" ref={outputRef}>
            {history.map((line, i) => (
              <p key={`${line}-${i}`}>{line}</p>
            ))}
            <form onSubmit={handleSubmit} className="terminal-input-row">
              <span className="text-sage">❯</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type help..."
                spellCheck={false}
                autoComplete="off"
                aria-label="terminal input"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TerminalSection;
