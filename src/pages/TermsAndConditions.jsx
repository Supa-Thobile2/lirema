import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import jsPDF from "jspdf";

const lastUpdated = "January 7, 2026";

function TermsAndConditions() {
  const [accepted, setAccepted] = useState(false);

  const generatePDF = () => {
    const doc = new jsPDF();
    const lineHeight = 10;
    let y = 10;

    const addText = (text, options = {}) => {
      const { fontSize = 12, fontStyle = "normal" } = options;
      doc.setFont("helvetica", fontStyle);
      doc.setFontSize(fontSize);

      const lines = doc.splitTextToSize(text, 180);
      lines.forEach((line) => {
        doc.text(line, 10, y);
        y += lineHeight;
        if (y > 280) {
          doc.addPage();
          y = 10;
        }
      });
    };

    addText("Terms & Conditions", { fontSize: 18, fontStyle: "bold" });
    y += 5;

    addText("Last updated: " + lastUpdated, { fontSize: 10, fontStyle: "italic" });
    y += 5;

    // Continue with sections...
    // At the end of your PDF generation, you can add a "terms accepted" line:
    addText(
      "By using our website and services, you agree to these Terms & Conditions.",
      { fontSize: 12, fontStyle: "normal" }
    );

    doc.save("Terms-and-Conditions.pdf");
  };

  return (
    <>
      <main className="bg-gray-50 min-h-screen px-6 md:px-12 lg:px-16 py-16 space-y-8">
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
            <FiDownload size={20} />
            <span>Download PDF</span>
          </button>
        </section>

        {/* PAGE CONTENT */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-sm font-semibold text-gray-500 uppercase">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms & Conditions</h1>
          <p className="text-gray-700">
            These terms govern your access to and use of the Li Rema Engineering & Construction website and services.
          </p>
          <p className="text-gray-500 italic">Last updated: {lastUpdated}</p>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          {/* Add checkbox for acceptance */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
              className="h-5 w-5 text-green-600"
            />
            <label className="text-gray-700">
              I agree to the <a href="#terms" className="text-blue-600">Terms & Conditions</a> and <a href="#privacy" className="text-blue-600">Privacy Policy</a>
            </label>
          </div>
        </section>
      </main>
    </>
  );
}

export default TermsAndConditions;
