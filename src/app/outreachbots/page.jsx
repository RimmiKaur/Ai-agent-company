"use client";
import React, { useState } from "react";
import * as XLSX from "xlsx"; // Import xlsx library
import SideBar from "../Components/SideBar";


export default function OutreachBots() {
    const [fields, setFields] = useState({
        targetAudience: "",
        problemToSolve: "",
        howToSolve: "",
        difference: "",
    });


    const [autoReplies, setAutoReplies] = useState(false);
    const [keywords, setKeywords] = useState(["marketing", "automation", "social media"]);
    const [newKeyword, setNewKeyword] = useState("");
    const [subreddits, setSubreddits] = useState([
        { name: "r/marketing", checked: false },
        { name: "r/socialmedia", checked: false },
        { name: "r/digitalmarketing", checked: false },
    ]);

    const data = [
        { keyword: "marketing", marketing: 45, socialMedia: 32, digitalMarketing: 28 },
        { keyword: "automation", marketing: 23, socialMedia: 18, digitalMarketing: 15 },
        { keyword: "social media", marketing: 67, socialMedia: 89, digitalMarketing: 41 },
    ];

    // Function to handle Excel download (stub for actual implementation)
    const handleDownload = () => {
        // Create a worksheet from the data array
        const worksheet = XLSX.utils.json_to_sheet(data, {
            header: ["keyword", "marketing", "socialMedia", "digitalMarketing"],
        });

        // Create a workbook and append the worksheet
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Marketing Results");

        // Export the workbook as an Excel file
        XLSX.writeFile(workbook, "MarketingResults.xlsx");
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFields((prev) => ({
            ...prev,
            [name]: value,
        }));
    };



    const addKeyword = (e) => {
        e.preventDefault();
        if (newKeyword.trim() && !keywords.includes(newKeyword)) {
            setKeywords([...keywords, newKeyword]);
            setNewKeyword("");
        }
    };

    const toggleSubreddit = (index) => {
        const updatedSubreddits = [...subreddits];
        updatedSubreddits[index].checked = !updatedSubreddits[index].checked;
        setSubreddits(updatedSubreddits);
    };

    return (
        <>
            <SideBar />
            <div className="p-6 w-[63vw] ml-[36vw]">
                {/* Section Title */}
                <h3 className="text-lg font-semibold mb-4">Basic Settings</h3>

                {/* Train Your Bot Subheading */}
                <h4 className="text-base font-medium mb-6">Train Your Bot</h4>

                {/* Form Fields */}
                <form className="space-y-6">
                    {/* Target Audience */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Target Audience
                        </label>
                        <textarea
                            name="targetAudience"
                            value={fields.targetAudience}
                            onChange={handleInputChange}
                            placeholder="Enter the target audience..."
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            rows="3"
                            maxLength="500"
                        ></textarea>
                        <p className="text-sm text-gray-400 ">
                            {fields.targetAudience.length}/500
                        </p>
                    </div>

                    {/* Problem to Solve */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Problem to Solve
                        </label>
                        <textarea
                            name="problemToSolve"
                            value={fields.problemToSolve}
                            onChange={handleInputChange}
                            placeholder="Describe the problem..."
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            rows="3"
                            maxLength="500"
                        ></textarea>
                        <p className="text-sm text-gray-400 text-right">
                            {fields.problemToSolve.length}/500
                        </p>
                    </div>

                    {/* How Will You Solve It */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            How Will You Solve It
                        </label>
                        <textarea
                            name="howToSolve"
                            value={fields.howToSolve}
                            onChange={handleInputChange}
                            placeholder="Explain how you will solve it..."
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            rows="3"
                            maxLength="500"
                        ></textarea>
                        <p className="text-sm text-gray-400 text-right">
                            {fields.howToSolve.length}/500
                        </p>
                    </div>

                    {/* Difference Between You and Others */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Difference Between You and Others
                        </label>
                        <textarea
                            name="difference"
                            value={fields.difference}
                            onChange={handleInputChange}
                            placeholder="Explain the difference..."
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            rows="3"
                            maxLength="500"
                        ></textarea>
                        <p className="text-sm text-gray-400 text-right">
                            {fields.difference.length}/500
                        </p>
                    </div>
                </form>
                <div className=" space-y-6">
                    {/* Auto Replies Toggle */}
                    <div>
                        {/* Title */}
                        <h2 className="text-lg font-semibold mb-4">Targeting Keywords and Subreddits</h2>

                        {/* Auto Replies Toggle */}
                        <div className="flex items-center">
                            <span className="text-sm text-gray-700 mr-2">Auto Replies</span>
                            <button
                                onClick={() => setAutoReplies(!autoReplies)}
                                className={`relative w-10 h-6 rounded-full transition-colors duration-300 ${autoReplies ? "bg-blue-500" : "bg-gray-300"
                                    }`}
                            >
                                <div
                                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${autoReplies ? "translate-x-4" : "translate-x-0"
                                        }`}
                                ></div>
                            </button>
                        </div>
                    </div>

                    {/* Keywords Section */}
                    <div>
                        <h3 className="text-sm font-medium mb-2">Keywords</h3>
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            {keywords.map((keyword, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full"
                                >
                                    {keyword}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center space-x-2">
                            <form onSubmit={addKeyword}>
                                <input
                                    type="text"
                                    placeholder="Add custom keyword"
                                    value={newKeyword}
                                    onChange={(e) => setNewKeyword(e.target.value)}
                                    className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-[56vw] "
                                />
                            </form>

                        </div>
                    </div>

                    {/* Subreddits Section */}
                    <div>
                        <h3 className="text-sm font-medium mb-2">Subreddits</h3>
                        <input
                            type="text"
                            placeholder="Search subreddits"
                            className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="space-y-2 border p-3 rounded-lg">
                            {subreddits.map((subreddit, index) => (
                                <div key={index} className="flex items-center space-x-2 ">
                                    <input
                                        type="checkbox"
                                        checked={subreddit.checked}
                                        onChange={() => toggleSubreddit(index)}
                                        className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500 mb-3"
                                    />
                                    <label className="text-sm text-gray-700 mb-3">{subreddit.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-6 space-y-4">
                    {/* Title */}
                    <h2 className="text-lg font-semibold">Bot Profile</h2>

                    {/* Profile Card */}
                    <div className="border rounded-lg p-4">
                        {/* Bot Information */}
                        <div className=" flex justify-between items-center mb-10">
                            <div>
                                <h3 className="text-md font-medium">RedditBot_01</h3>
                                <p className="text-sm text-gray-500">ID: BOT123456</p>
                            </div>

                            {/* Status */}
                            <div className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full">
                                Warming
                            </div>
                        </div>


                        <div className="grid grid-cols-2 gap-4">
                            {/* Comment Karma */}
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="text-sm text-gray-500">Comment Karma</h4>
                                <p className="text-lg font-semibold">142</p>
                            </div>

                            {/* Post Karma */}
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="text-sm text-gray-500">Post Karma</h4>
                                <p className="text-lg font-semibold">89</p>
                            </div>
                        </div>
                    </div>

                    {/* Karma Section */}

                </div>

                <div className="p-6 mt-6 border rounded-lg  space-y-4">
                    {/* Title */}
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Marketing Results</h2>
                        <button
                            onClick={handleDownload}
                            className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 flex items-center"
                        >
                            <img src="/images/downloadwhite.png" alt="Download" className="w-4 h-4 mr-2" />
                            Download Report (Excel)
                        </button>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="border border-gray-200 p-2 font-medium">Keywords/Subreddits</th>
                                    <th className="border border-gray-200 p-2 font-medium">r/marketing</th>
                                    <th className="border border-gray-200 p-2 font-medium">r/socialmedia</th>
                                    <th className="border border-gray-200 p-2 font-medium">r/digitalmarketing</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="border border-gray-200 p-2">{row.keyword}</td>
                                        <td className="border border-gray-200 p-2">{row.marketing}</td>
                                        <td className="border border-gray-200 p-2">{row.socialMedia}</td>
                                        <td className="border border-gray-200 p-2">{row.digitalMarketing}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>

    );
}
