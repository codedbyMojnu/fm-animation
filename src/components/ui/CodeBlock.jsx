import { useState } from "react";
import { CopyIcon } from "../../assets/icons";

export const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // navigator.clipboard.writeText(code) is more modern but can fail in iframes/sandboxed environments.
    // document.execCommand is deprecated but more reliable in such cases.
    const textArea = document.createElement("textarea");
    textArea.value = code;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <div className="relative w-full">
      <pre
        className="p-4 rounded-lg overflow-x-auto text-sm font-mono w-full min-h-[120px]"
        style={{
          backgroundColor: "var(--color-bg-tertiary)",
          color: "var(--color-text-primary)",
        }}
      >
        <code className="whitespace-pre-wrap break-words">{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-md transition-all hover:opacity-80"
        style={{
          backgroundColor: "var(--color-bg-secondary)",
          color: "var(--color-text-secondary)",
        }}
        aria-label="Copy code"
      >
        {copied ? "Copied!" : <CopyIcon />}
      </button>
    </div>
  );
};
