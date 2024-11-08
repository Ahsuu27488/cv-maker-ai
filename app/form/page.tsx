'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const FormPage = () => {
  const router = useRouter();

  // State for form data
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    profilePicture: string | null; // Store as a data URL
    education: string;
    skills: string;
    workExperience: string;
  }>({
    name: '',
    email: '',
    phone: '',
    profilePicture: null,
    education: '',
    skills: '',
    workExperience: '',
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle profile picture upload
  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profilePicture: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save form data to localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
    // Redirect to preview page
    router.push(`/preview`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-lg max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Fill in Your Details</h1>
        
        {/* Personal Information */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Personal Information</h2>
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none mb-4"
            required
          />

          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none mb-4"
            required
          />

          <label className="block text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none mb-4"
            required
          />

          <label className="block text-gray-700 mb-2">Profile Picture</label>
          <input
            type="file"
            name="profilePicture"
            accept="image/*"
            onChange={handleProfilePictureChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none mb-4"
          />
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Education</h2>
          <textarea
            name="education"
            value={formData.education}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            placeholder="List your educational qualifications"
          />
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Skills</h2>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            placeholder="Enter your skills separated by commas"
          />
        </div>

        {/* Work Experience */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Work Experience</h2>
          <textarea
            name="workExperience"
            value={formData.workExperience}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            placeholder="Describe your work experience"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Submit & Preview
        </button>
      </form>
    </div>
  );
};

export default FormPage;
