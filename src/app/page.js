"use client";
import { useState } from "react";
import Image from "next/image";


export default function Home() {
    const [activeTab, setActiveTab] = useState("Investment Trends");
    const [chartType1, setChartType1] = useState("yearly");
    const [chartType2, setChartType2] = useState("yearly");
    const [chartType3, setChartType3] = useState("canada");
    const [table1, setTable1] = useState("canada");

    const [selectedYear, setSelectedYear] = useState("2024");
    const [selectedRegions, setSelectedRegions] = useState("Toronto");

    const years = ["2019", "2020", "2021", "2022", "2023", "2024"];
    const regions = ["Toronto", "Quebec", "British Columbia", "Alberta", "Waterloo Region", "Ottawa", "East Coast", "Other"];

    return (
        <>
            <nav className="bg-gray-800 p-4 flex justify-between items-center">
                <Image src="/logo.png" alt="Logo" width={50} height={50} />

                <div className="flex space-x-4">
                    {["Investment Trends", "Investment Stages", "Investor Demographics", "Sectoral & Regional Insights"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 text-white font-semibold rounded-lg transition duration-300 ease-in-out ${
                                activeTab === tab ? "bg-blue-600 transform scale-105" : "bg-gray-700 hover:bg-gray-600"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </nav>


            <div className="p-4">
                {activeTab === "Investment Trends" && (
                    <div className="text-center">
                        <div className="mb-4 flex justify-start space-x-4 w-full ml-[17%]">
                            <button
                                onClick={() => setChartType1("yearly")}
                                className={`px-6 py-3 text-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 ${
                                    chartType1 === "yearly" ? "bg-blue-500" : "bg-gray-600"
                                }`}
                            >
                                Yearly
                            </button>
                            <button
                                onClick={() => setChartType1("quarterly")}
                                className={`px-6 py-3 text-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 ${
                                    chartType1 === "quarterly" ? "bg-blue-500" : "bg-gray-600"
                                }`}
                            >
                                Quarterly
                            </button>
                        </div>

                        <div className="flex justify-center space-x-4">
                            <iframe
                                src={chartType1 === "yearly"
                                    ? "/plots/tab1/tab1_investment_yearly.html"
                                    : "/plots/tab1/tab1_investment_quarterly.html"}
                                width="50%"
                                height="500px"
                                className="border rounded-lg"
                            ></iframe>

                            <iframe
                                src={"/plots/tab1/tab1_funding_volume.html"}
                                width="50%"
                                height="500px"
                                className="border rounded-lg"
                            ></iframe>
                        </div>

                        <br></br>

                        <div className="relative inline-block w-0.001 ml-[52%]">
                            <select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className="block w-full px-6 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg shadow-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                <option value="" disabled>Select a year</option>
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute top-0 right-0 flex items-center px-3 py-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>

                        <div className="flex justify-center space-x-4 mt-4">
                            <iframe
                                src={`/plots/tab1/daily_years/${selectedYear}.html`}
                                width="50%"
                                height="500px"
                                className="border rounded-lg"
                            ></iframe>

                            <iframe
                                src={"/plots/tab1/tab1_funding_size.html"}
                                width="50%"
                                height="500px"
                                className="border rounded-lg"
                            ></iframe>
                        </div>
                    </div>
                )}

                {activeTab === "Investment Stages" &&
                <div className="text-center">
                    <div className="flex justify-center space-x-4 mt-4">
                        <iframe
                            src={`/plots/tab2/tab2_avgdealsizestage.html`}
                            width="50%"
                            height="500px"
                            className="border rounded-lg"
                        ></iframe>

                        <iframe
                            src={"/plots/tab2/tab2_stageproportion.html"}
                            width="50%"
                            height="500px"
                            className="border rounded-lg"
                        ></iframe>
                    </div>


                    <div className="flex justify-center space-x-4 mt-4">
                        <div className="flex justify-center space-x-4 mt-4">
                            <button
                                onClick={() => setChartType2("yearly")}
                                className={`px-6 py-3 text-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    chartType2 === "yearly" ? "bg-blue-500" : "bg-gray-600"
                                }`}
                            >
                                Yearly
                            </button>
                            <button
                                onClick={() => setChartType2("quarterly")}
                                className={`px-6 py-3 text-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    chartType2 === "quarterly" ? "bg-blue-500" : "bg-gray-600"
                                }`}
                            >
                                Quarterly
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-4 mt-4">
                        <iframe
                            src={chartType2 === "yearly"
                                ? "/plots/tab2/tab2_dealsquantitystageyearly.html"
                                : "/plots/tab2/tab2_dealsquantitystagequarterly.html"}
                            width="100%"
                            height="500px"
                            className="border rounded-lg"
                        ></iframe>
                    </div>
                </div>}
                {activeTab === "Investor Demographics" &&
                <div className="text-center">
                    <div className="flex justify-center space-x-4 mt-4">
                        <iframe
                            src={"/plots/tab3/tab3_dealquantity.html"}
                            width="50%"
                            height="500px"
                            className="border rounded-lg"
                        ></iframe>

                        <iframe
                            src={"/plots/tab3/tab3_dealvolumepertype.html"}
                            width="50%"
                            height="500px"
                            className="border rounded-lg"
                        ></iframe>
                    </div>

                    <div className="flex justify-center space-x-4 mt-4">
                        <button
                            onClick={() => setChartType3("canada")}
                            className={`px-6 py-3 text-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                chartType3 === "canada" ? "bg-blue-500" : "bg-gray-600"
                            }`}
                        >
                            Canada
                        </button>
                        <button
                            onClick={() => setChartType3("united states")}
                            className={`px-6 py-3 text-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                chartType3 === "united states" ? "bg-blue-500" : "bg-gray-600"
                            }`}
                        >
                            United States
                        </button>
                    </div>

                    <div className="flex justify-center space-x-4 mt-4">
                        <iframe
                            src={"/plots/tab3/tab3_dealvalue.html"}
                            width="50%"
                            height="500px"
                            className="border rounded-lg"
                        ></iframe>

                        <iframe
                            src={chartType3 === "canada"
                                ? "/plots/tab3/canada.html"
                                : "/plots/tab3/usa.html"}
                            width="50%"
                            height="500px"
                            className="border rounded-lg"
                        ></iframe>
                    </div>

                    <div className="flex justify-center space-x-4 mt-4">
                        <button
                            onClick={() => setTable1("canada")}
                            className={`px-6 py-3 text-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                table1 === "canada" ? "bg-blue-500" : "bg-gray-600"
                            }`}
                        >
                            Canada
                        </button>
                        <button
                            onClick={() => setTable1("united states")}
                            className={`px-6 py-3 text-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                table1 === "united states" ? "bg-blue-500" : "bg-gray-600"
                            }`}
                        >
                            United States
                        </button>
                        <button
                            onClick={() => setTable1("international")}
                            className={`px-6 py-3 text-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                table1 === "international" ? "bg-blue-500" : "bg-gray-600"
                            }`}
                        >
                            International
                        </button>
                    </div>

                    <br></br>

                    <iframe
                        src={table1 === "canada" ? "/plots/tab3/top_canada_investors.html" : table1 === "united states" ? "/plots/tab3/top_us_investors.html" : "/plots/tab3/top_international_investors.html"}
                        width="100%"
                        height="500"
                        frameBorder="0"
                    ></iframe>

                </div>}

                {activeTab === "Sectoral & Regional Insights" &&
                    <div className="text-center">
                        <div className="flex justify-center space-x-4 mt-4">
                            <iframe
                                src={"/plots/tab4/tab4_total_average_sector.html"}
                                width="50%"
                                height="500px"
                                className="border rounded-lg"
                            ></iframe>

                            <iframe
                                src="/plots/tab4/img.jpeg"
                                width="50%"
                                height="500px"
                                style={{ objectFit: "cover", overflow: "hidden", border: "hidden" }}
                                className="border rounded-lg"
                            ></iframe>
                        </div>

                        <br></br>

                        <div className="relative inline-block w-0.001 ml-[45%]">
                            <select
                                value={selectedRegions}
                                onChange={(e) => setSelectedRegions(e.target.value)}
                                className="block w-full px-6 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg shadow-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                <option value="" disabled>Select a region</option>
                                {regions.map((region) => (
                                    <option key={region} value={region}>
                                        {region}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute top-0 right-0 flex items-center px-3 py-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>

                        <div className="flex justify-center space-x-4 mt-4">
                            <iframe
                                src={"/plots/tab4/tab4_sector_line.html"}
                                width="50%"
                                height="500px"
                                className="border rounded-lg"
                            ></iframe>

                            <iframe
                                src={`/plots/tab4/reigons/${selectedRegions}.html`}
                                width="50%"
                                height="500px"
                                className="border rounded-lg"
                            ></iframe>
                        </div>
                    </div>}

                {/*{activeTab === "QS 5" &&*/}
                {/*    <div className="text-center">*/}

                {/*    </div>}*/}
            </div>
        </>
    );
}