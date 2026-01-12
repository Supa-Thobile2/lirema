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

    addText(`Last updated: ${lastUpdated}`, { fontSize: 10, fontStyle: "italic" });
    y += 5;

    // Example sections — replace with your full terms
    addText(
      "1. Use of Website: By accessing this website, you agree to comply with all applicable laws and these terms.",
      { fontSize: 12 }
    );
    addText(
      "2. Intellectual Property: All content on this site is the property of Li Rema Engineering & Construction.",
      { fontSize: 12 }
    );
    addText(
      "3. Liability: We are not liable for any damages arising from the use of this site or services.",
      { fontSize: 12 }
    );
    addText(
      "4. Acceptance: By using our services, you confirm that you have read and accepted these terms.",
      { fontSize: 12 }
    );

    doc.save("Terms-and-Conditions.pdf");
  };

  return (
    <main className="bg-gray-50 min-h-screen px-6 md:px-12 lg:px-16">
      {/* Header Bar */}
      <section className="flex justify-between items-center max-w-4xl mx-auto">
        <a
          href="/"
          className="text-blue-600 font-semibold hover:underline flex items-center space-x-1"
        >
          &#8592; <span>Back to Home</span>
        </a>
        <button
          onClick={generatePDF}
          className="flex items-center space-x-1 text-green-600 font-semibold hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
          aria-label="Download Terms and Conditions PDF"
        >
          <FiDownload size={20} />
          <span>Download PDF</span>
        </button>
      </section>

      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-gray-500 uppercase">Legal</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Terms & Conditions
        </h1>
        <p className="text-gray-700">
          These terms govern your access to and use of the Li Rema Engineering & Construction website and services.
        </p>
        <p className="text-gray-500 italic">Last updated: {lastUpdated}</p>
      </section>

      {/* Acceptance Checkbox */}
      <section className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="accept-terms"
            checked={accepted}
            onChange={() => setAccepted(!accepted)}
            className="h-5 w-5 text-green-600 focus:ring-green-500"
          />
          <label htmlFor="accept-terms" className="text-gray-700">
            I agree to the{" "}
            <a href="#terms" className="text-blue-600 hover:underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>

        {/* Optional Submit / Proceed button */}
        {accepted && (
          <button
            className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Proceed
          </button>
        )}
      </section>
    </main>
  );
}

export default TermsAndConditions;
