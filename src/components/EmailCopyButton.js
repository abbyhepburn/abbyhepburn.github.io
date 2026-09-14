import { useEffect, useRef, useState } from 'react';
import { site } from '../data/portfolio';

function fallbackCopy(value) {
  const input = document.createElement('textarea');
  input.value = value;
  input.setAttribute('readonly', '');
  input.style.position = 'fixed';
  input.style.opacity = '0';
  document.body.appendChild(input);
  input.select();
  try {
    return document.execCommand('copy');
  } finally {
    input.remove();
  }
}

function EmailCopyButton({ children, className = '', onCopy }) {
  const [message, setMessage] = useState('');
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copyEmail = async () => {
    let copied = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(site.email);
        copied = true;
      } else {
        copied = fallbackCopy(site.email);
      }
    } catch {
      try { copied = fallbackCopy(site.email); } catch { copied = false; }
    }
    setMessage(copied ? 'Email copied to clipboard' : `Could not copy email. Address: ${site.email}`);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMessage(''), 4000);
    onCopy?.();
  };

  return (
    <>
      <button type="button" className={className} onClick={copyEmail} aria-label="Copy email address">
        {children}
      </button>
      {message && <span className="email-copy-status" role="status">{message}</span>}
    </>
  );
}

export default EmailCopyButton;
