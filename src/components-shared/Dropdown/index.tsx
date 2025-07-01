import React, { useState } from "react";

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 p-2 transition hover:text-blue-600">
        {label}
        <svg width={16} height={16} fill="none" viewBox="0 0 24 24">
          <path
            d="M7 10l5 5 5-5"
            stroke="#2563eb"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <ul className="absolute left-0 top-full z-40 m-0 w-56 animate-fade-in-up rounded-lg border bg-white p-1 shadow-lg">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="flex items-center gap-2 rounded px-4 py-2 transition hover:bg-blue-50 hover:text-blue-700"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
