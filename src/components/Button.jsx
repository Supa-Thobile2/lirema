import React from 'react';

function Button({ text, icon, onClick, type = 'button', disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={text}
      className="
        inline-flex w-full md:w-auto items-center justify-center gap-2
        rounded-xl border border-neutral-300
        bg-white px-6 py-2.5
        text-sm font-medium text-neutral-900
        transition-colors
        hover:bg-neutral-100
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-neutral-400
        focus-visible:ring-offset-2
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      <span>{text}</span>
      {icon && <span className="flex items-center">{icon}</span>}
    </button>
  );
}

export default Button;
