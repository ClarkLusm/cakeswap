import { useState } from "react";
import { MdContentCopy } from "react-icons/md";

import "./copy-button.scss";

type CopyProps = {
  value: string;
  message?: string;
};

export function CopyButton({ value, message }: CopyProps) {
  const [copied, setCopied] = useState(false);
  let debounce: any;

  const onCopy = () => {
    navigator.clipboard.writeText(value);
    clearTimeout(debounce);
    setCopied(true);
    debounce = setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="copy-button">
      <button onClick={onCopy}>
        <MdContentCopy />
      </button>
      {copied && (
        <div className="copy-button_tooltip">{message || "Copied"}!</div>
      )}
    </div>
  );
}
