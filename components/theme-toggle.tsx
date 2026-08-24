"use client";

import { Check, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const subscribe = () => () => undefined;

const themeOptions = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
] as const;

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isDark = mounted && resolvedTheme === "dark";
  const label = open ? "Close theme menu" : "Open theme menu";

  useEffect(() => {
    if (!open) return;

    const closeMenu = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", closeMenu);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div ref={menuRef} className="theme-menu">
      <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        aria-haspopup="menu"
        title={label}
        className="icon-button"
        onClick={() => setOpen((current) => !current)}
      >
        {isDark ? <Moon aria-hidden="true" size={18} /> : <Sun aria-hidden="true" size={18} />}
      </button>
      {open && (
        <div className="theme-menu-popover" role="menu" aria-label="Theme preference">
          {themeOptions.map((option) => {
            const selected = mounted && theme === option.value;
            return (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                className={`theme-menu-option ${selected ? "theme-menu-option-selected" : ""}`}
                onClick={() => {
                  setTheme(option.value);
                  setOpen(false);
                }}
              >
                <span>{option.label}</span>
                {selected && <Check aria-hidden="true" size={16} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
