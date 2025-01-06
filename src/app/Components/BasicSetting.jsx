"use client";
import React, { useState, useEffect } from "react";

export default function BasicSetting() {
  const [files, setFiles] = useState([]);

  // Load files from local storage when the component mounts
  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("files")) || [];
    setFiles(storedFiles);
  }, []);

  // Save files to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("files", JSON.stringify(files));
  }, [files]);

  const handleDelete = (id) => {
    const updatedFiles = files.filter((file) => file.id !== id);
    setFiles(updatedFiles);
  };

  const handleFileUpload = (newFiles) => {
    const uploadedFiles = Array.from(newFiles).map((file, index) => ({
      name: file.name,
      id: Date.now() + index, // Unique ID for each file
    }));
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFileUpload(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Voice Settings Section */}
      <div className="w-full p-4">
        <h3 className="text-lg mb-2">Voice Settings</h3>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Enter voice settings..."
            className="flex-1 bg-gray-100 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none">
            <img src="/images/playarrow.png" className="mr-2" alt="Preview" />
            Preview
          </button>
        </div>
      </div>

      {/* Phone Numbers Section */}
      <div className="w-full p-4 space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Phone Numbers</h3>
          <div className="flex items-center justify-between border rounded-lg p-4 bg-gray-50">
            <p className="text-sm font-medium">Current Number: +1 (555) 123-4567</p>
            <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800">
              Purchase New Number
            </button>
          </div>
        </div>

        {/* Prompt Settings Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Prompt Settings</h3>
          <textarea
            placeholder="Define agent behavior..."
            className="w-full border rounded-lg p-4 bg-gray-50 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows="4"
          ></textarea>
        </div>
      </div>

      {/* Knowledge Base Section */}
      <div className="w-full p-4 space-y-6">
        <h3 className="text-lg font-semibold">Knowledge Base</h3>
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-gray-50"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={() => document.getElementById("fileInput").click()}
        >
          <div className="flex flex-col items-center justify-center text-gray-500">
            <img src="/images/draganddrop.png" alt="Upload" />
            <p className="text-sm">Drag and drop files here or click to upload</p>
          </div>
          <input
            id="fileInput"
            type="file"
            className="hidden"
            multiple
            onChange={(e) => handleFileUpload(e.target.files)}
          />
        </div>

        {/* File List */}
        <div className="space-y-2">
          {files.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between border rounded-lg p-4 bg-white shadow-sm"
            >
              {/* File Name */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-500 text-sm font-medium">
                  {file.name}
                </span>
              </div>

              {/* File Actions */}
              <div className="flex items-center space-x-4">
                <button className="text-gray-500 hover:text-blue-500">
                  <img src="/images/download.png" alt="Download" />
                </button>
                <button
                  onClick={() => handleDelete(file.id)}
                  className="text-gray-500 hover:text-red-500"
                >
                  <img src="/images/delete.png" alt="Delete" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
