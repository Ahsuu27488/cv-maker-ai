"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import Image from "next/image";
import { FaGraduationCap, FaBriefcase, FaTools } from "react-icons/fa";

const PreviewPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    education: string;
    skills: string;
    workExperience: string;
    profilePicture: string | null;
  } | null>(null);

  // Load data from local storage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData") || "{}");
    if (Object.keys(savedData).length > 0) {
      setFormData(savedData);
    } else {
      router.push("/form"); // Redirect back to form if no data
    }
  }, [router]);

  const handleDownloadPDF = async () => {
    const element = document.getElementById("resume-preview");
    if (!element) return;

    try {
      const canvas = await toPng(element);
      const pdf = new jsPDF();
      pdf.addImage(canvas, "PNG", 10, 10, 190, 0);
      pdf.save(`${formData?.name}_resume.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  if (!formData) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10 px-4">
      <div
        id="resume-preview"
        className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8 border-t-8 border-blue-600"
      >
        {/* Header Section */}
        <div className="flex items-center mb-8 border-b pb-6">
          {formData.profilePicture && (
            <Image
              src={formData.profilePicture}
              alt="Profile"
              width={100}
              height={100}
              className="w-24 h-24 rounded-full mr-6 border-4 border-blue-600"
            />
          )}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{formData.name}</h1>
            <p className="text-gray-500 mt-1">{formData.email}</p>
            <p className="text-gray-500">{formData.phone}</p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <div className="flex items-center text-blue-600 mb-2">
            <FaGraduationCap className="mr-2" />
            <h2 className="text-xl font-semibold text-gray-700">Education</h2>
          </div>
          <p className="text-gray-700 mt-2 pl-8 border-l-2 border-blue-600">{formData.education}</p>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <div className="flex items-center text-blue-600 mb-2">
            <FaTools className="mr-2" />
            <h2 className="text-xl font-semibold text-gray-700">Skills</h2>
          </div>
          <p className="text-gray-700 mt-2 pl-8 border-l-2 border-blue-600">
            {formData.skills.split(',').map((skill, index) => (
              <span key={index} className="inline-block bg-blue-100 text-blue-700 text-sm font-medium mr-2 px-2 py-1 rounded-full">
                {skill.trim()}
              </span>
            ))}
          </p>
        </div>

        {/* Work Experience Section */}
        <div className="mb-8">
          <div className="flex items-center text-blue-600 mb-2">
            <FaBriefcase className="mr-2" />
            <h2 className="text-xl font-semibold text-gray-700">Work Experience</h2>
          </div>
          <p className="text-gray-700 mt-2 pl-8 border-l-2 border-blue-600">{formData.workExperience}</p>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownloadPDF}
        className="mt-6 w-full max-w-xs py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default PreviewPage;
