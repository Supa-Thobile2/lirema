import React from "react";
import { FiDownload } from "react-icons/fi";
import jsPDF from "jspdf";

const lastUpdated = "January 7, 2026";

const policySections = [
  {
    title: "1. Introduction",
    body:
      "Li Rema Engineering & Construction (Pty) Ltd is committed to protecting your personal information and ensuring compliance with the Protection of Personal Information Act (POPIA), 2013.",
  },
  {
    title: "2. Information We Collect",
    body:
      "We may collect personal information including names, contact details, company information, and any data required to deliver our engineering and construction services.",
  },
  {
    title: "3. How We Use Your Information",
    body:
      "Personal information is used to provide services, respond to enquiries, comply with legal obligations, and improve our operations.",
  },
  {
    title: "4. Information Sharing",
    body:
      "We do not sell or trade personal information. Data may be shared with trusted service providers where necessary and legally permissible.",
  },
  {
    title: "5. Data Security",
    body:
      "Appropriate technical and organizational measures are implemented to protect personal information against loss, misuse, or unauthorized access.",
  },
  {
    title: "6. Your Rights",
    body:
      "You have the right to access, correct, or request deletion of your personal information in accordance with POPIA.",
  },
  {
    title: "7. Updates to This Policy",
    body:
      "This policy may be updated periodically. Changes will be published on this page with an updated revision date.",
  },
];

function PrivacyPolicy() {
  const generatePDF = () => {
    const doc = new jsPDF();
    let y = 14;
    const lineHeight = 8;

    const addText = (text, options = {}) => {
      const { fontSize = 12, fontStyle = "normal", marginLeft = 14 } = options;
      doc.setFont("helvetica", fontStyle);
      doc.setFontSize(fontSize);

      const lines = doc.splitTextToSize(text, 180);
      lines.forEach((line) => {
        if (y > 280) {
          doc.addPage();
          y = 14;
        }
        doc.text(line, marginLeft, y);
        y += lineHeight;
      });
    };

    // Title
    addText("Privacy & Data Protection Policy", {
      fontSize: 18,
      fontStyle: "bold",
    });
    y += 4;

    addText(`Last updated: ${lastUpdated}`, {
      fontSize: 10,
      fontStyle: "italic",
    });
    y += 6;

    // Policy content
    policySections.forEach((section) => {
      addText(section.title, { fontSize: 14, fontStyle: "bold" });
      y += 2;
      addText(section.body);
      y += 4;
    });

    doc.save("Privacy-Policy.pdf");
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      {/* HEADER BAR */}
      <section className="mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="/"
          className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          <span aria-hidden>←</span>
          <span>Back to Home</span>
        </a>

        <button
          onClick={generatePDF}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-green-600 px-4 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-50 focus-visible:ring-2 focus-visible:ring-green-600"
          aria-label="Download privacy policy as PDF"
        >
          <FiDownload className="h-5 w-5" />
          <span>Download PDF</span>
        </button>
      </section>

      {/* TITLE */}
      <section className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          Policy
        </p>

        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Privacy & Data Protection Policy
        </h1>

        <p className="text-base leading-relaxed text-gray-700">
          Li Rema Engineering & Construction is committed to protecting your
          personal information in accordance with South African law.
        </p>

        <p className="text-sm italic text-gray-500">
          Last updated: {lastUpdated}
        </p>
      </section>

      {/* POLICY CONTENT */}
      <section className="mx-auto max-w-3xl text-sm sm:text-base leading-relaxed text-gray-700">
        {policySections.map((section) => (
          <article key={section.title} className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-900">
              {section.title}
            </h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default PrivacyPolicy;
