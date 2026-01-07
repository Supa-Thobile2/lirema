import React from "react";
import { FiDownload } from "react-icons/fi";
import jsPDF from "jspdf";

const lastUpdated = "January 7, 2026";

function PrivacyPolicy() {
  const generatePDF = () => {
    const doc = new jsPDF();
    const lineHeight = 10;
    let y = 10;

    const addText = (text, options = {}) => {
      const { fontSize = 12, fontStyle = "normal", indent = 0 } = options;
      doc.setFontSize(fontSize);
      doc.setFont("helvetica", fontStyle);

      const lines = doc.splitTextToSize(text, 180); // wrap text at width
      lines.forEach((line) => {
        doc.text(line, 10 + indent, y);
        y += lineHeight;
        if (y > 280) { // create new page if bottom reached
          doc.addPage();
          y = 10;
        }
      });
    };

    // PDF Content
    addText("Privacy & Data Protection Policy", { fontSize: 18, fontStyle: "bold" });
    y += 5;

    addText(
      "Last updated: " + lastUpdated,
      { fontSize: 10, fontStyle: "italic" }
    );
    y += 5;

    // Continue with your sections...
  };

  return (
    <>
      <main className="bg-gray-50 min-h-screen px-6 md:px-12 lg:px-16 py-16 space-y-8">
        {/* HEADER */}
        <section className="flex justify-between items-center max-w-4xl mx-auto">
          <a
            href="/"
            className="text-blue-600 font-semibold hover:underline flex items-center space-x-1"
          >
            &#8592; <span>Back to Home</span>
          </a>
          <button
            onClick={generatePDF}
            className="flex items-center space-x-1 text-green-600 font-semibold hover:text-green-800"
          >
            <FiDownload size={20} /> <span>Download PDF</span>
          </button>
        </section>

        {/* PAGE CONTENT */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-sm font-semibold text-gray-500 uppercase">Policy</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy & Data Protection Policy</h1>
          <p className="text-gray-700">
            Li Rema Engineering & Construction is committed to protecting your personal information in accordance with the South African Constitution and the Protection of Personal Information Act (POPIA, 2013).
          </p>
          <p className="text-gray-500 italic">Last updated: {lastUpdated}</p>
        </section>

        {/* The rest of your Privacy Policy content */}
      </main>
    </>
  );
}

export default PrivacyPolicy

