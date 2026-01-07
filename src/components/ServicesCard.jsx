import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function ServicesCard({ heading, subtext, description, btnText, link }) {
  return (
    <article className="flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md space-y-4">
      <header className="space-y-2">
        <h3 className="text-lg font-semibold text-neutral-900">
          {heading}
        </h3>

        {subtext && (
          <p className="text-sm font-medium text-neutral-500">
            {subtext}
          </p>
        )}
      </header>

      <p className="text-sm leading-relaxed text-neutral-600">
        {description}
      </p>

      <div className="pt-4">
        <Link to={link} aria-label={btnText}>
          <Button text={btnText} />
        </Link>
      </div>
    </article>
  );
}

export default ServicesCard;
