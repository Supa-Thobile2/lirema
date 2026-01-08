import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const ServicesCard = ({ heading, subtext, description, btnText, link }) => {
  return (
    <article
      className="flex h-full flex-col justify-between
                 rounded-xl border border-neutral-200 bg-white
                 p-5 sm:p-6
                 shadow-sm transition
                 hover:shadow-md
                 focus-within:ring-2 focus-within:ring-neutral-300
                 space-y-4"
    >
      {/* ================= HEADER ================= */}
      <header className="space-y-2">
        {/* Responsive heading */}
        <h3 className="text-base font-semibold text-neutral-900 sm:text-lg">
          {heading}
        </h3>

        {/* Optional subtext */}
        {subtext && (
          <p className="text-xs font-medium text-neutral-500 sm:text-sm">
            {subtext}
          </p>
        )}
      </header>

      {/* ================= DESCRIPTION ================= */}
      <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
        {description}
      </p>

      {/* ================= ACTION ================= */}
      {/* Larger tap area on mobile */}
      <div className="pt-4">
        <Link to={link} aria-label={btnText}>
          <Button
            text={btnText}
            className="w-full sm:w-auto px-5 py-3 text-sm sm:text-base"
          />
        </Link>
      </div>
    </article>
  );
};

export default ServicesCard;
