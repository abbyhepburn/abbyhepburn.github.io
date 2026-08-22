import { useRef, useState } from 'react';
import SectionHeader from './SectionHeader';
import { projects, site } from '../data/portfolio';
const COMMANDS = {
  help: `Available commands:
  help       — show this message
  about      — who am i
  projects   — list projects
  contact    — how to reach me
  clear      — clear terminal
  whoami     — print username`,
  about: `${site.name} — Computer Engineering @ UF
Focus: full-stack, computer vision, embedded systems
Location: ${site.location}`,
  projects: projects
    .map((p) => `  • ${p.title} — ${p.tags.join(', ')}`)
    .join('\n'),
  contact: `Email: ${site.email}
GitHub: ${site.github}
LinkedIn: ${site.linkedin}`,
  whoami: 'abby@portfolio',
};
function TerminalSection() {
  const [history, setHistory] = useState([
    'abby-hepburn shell v1.0.0 — type `help` to get started',
    '',
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
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
          className="terminal-window terminal-interactive"
          onClick={() => inputRef.current?.focus()}
          role="presentation"
        >
          <div className="terminal-titlebar">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
            <span className="terminal-filename">abby@portfolio: ~</span>
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
