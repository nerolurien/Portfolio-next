import { useEffect, useState } from "react";

const formatDate = (utcString) => {
    return new Date(utcString).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours} hrs ${minutes} mins`;
};

const formatDailyAvg = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
};

export default function WakaTimeStats() {
    const [stats, setStats] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState("overview");

    useEffect(() => {
        setIsLoading(true);
        fetch("/api/wakatime")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch data");
                return res.json();
            })
            .then((data) => {
                setStats(data.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching WakaTime data:", err);
                setError(err.message);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <div className="p-6 dark:bg-darkTheme text-white rounded-xl shadow-xlflex items-center justify-center min-h-56">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-300 font-medium">Loading coding stats...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6 dark:bg-darkTheme dark:text-white bg-white rounded-xl shadow-xl border border-gray-800 flex items-center justify-center min-h-56">
                <div className="flex flex-col items-center gap-3 text-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <div className="text-center">
                        <p className="font-medium">Failed to load WakaTime statistics</p>
                        <p className="text-sm text-gray-400 mt-1">Please try again later</p>
                    </div>
                </div>
            </div>
        );
    }

    if (!stats) return null;

    // Calculate gradient colors for language bars based on percentage
    const getGradientColor = (percent) => {
        if (percent > 50) return "from-indigo-600 to-purple-600";
        if (percent > 25) return "from-blue-600 to-indigo-600";
        if (percent > 10) return "from-cyan-600 to-blue-600";
        return "from-green-600 to-cyan-600";
    };

    // Get custom icon based on language name
    const getLanguageIcon = (langName) => {
        const lowerName = langName.toLowerCase();
        if (lowerName.includes("javascript")) return "🟨";
        if (lowerName.includes("typescript")) return "🔷";
        if (lowerName.includes("html")) return "🟧";
        if (lowerName.includes("css")) return "🟦";
        if (lowerName.includes("python")) return "🐍";
        if (lowerName.includes("java")) return "☕";
        if (lowerName.includes("ruby")) return "💎";
        if (lowerName.includes("php")) return "🐘";
        if (lowerName.includes("c#")) return "🟩";
        if (lowerName.includes("c++")) return "🔵";
        if (lowerName.includes("go")) return "🔹";
        if (lowerName.includes("rust")) return "🦀";
        if (lowerName.includes("swift")) return "🟠";
        if (lowerName.includes("kotlin")) return "🟣";
        if (lowerName.includes("markdown")) return "📝";
        if (lowerName.includes("json")) return "📋";
        if (lowerName.includes("sql")) return "🗄️";
        if (lowerName.includes("shell")) return "🐚";
        return "🔠";
    };

    return (
        <div className="dark:bg-darkTheme dark:text-white bg-white">
            <div className="relative overflow-hidden">
                <div className="p-6">
                    <div className="lg:flex items-center justify-between mb-4 sm:grid grid-cols-2 text-center">
                        <h2 className="text-2xl font-bold flex items-center gap-2 pb-3">
                            <span className="text-blue-400">⏱️</span>
                            <span className="bg-clip-text text-transparent flex whitespace-nowrap bg-gradient-to-r from-blue-400 to-purple-400">
                                Coding Stats
                            </span>
                        </h2>
                        <div className="dark:bg-darkTheme dark:border-white/80 dark:hover:bg-darkhover hover:bg-lightHover cursor-default px-4 py-1.5 rounded-full text-sm font-medium dark:text-blue-300 text-blue-800 border border-gray-700 shadow-inner">
                            {formatDate(stats.start)} - {formatDate(stats.end)}
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex space-x-1 dark:bg-darkTheme/10 p-1 rounded-lg mb-6">
                        <button
                            onClick={() => setActiveTab("overview")}
                            className={`px-4 py-2 text-sm font-medium rounded-md transition ${activeTab === "overview"
                                    ? "bg-gray-700 text-white shadow-sm"
                                    : "dark:text-gray-400 dark:hover:text-gray-200 "
                                }`}
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => setActiveTab("languages")}
                            className={`px-4 py-2 text-sm font-medium rounded-md transition ${activeTab === "languages"
                                    ? "bg-gray-700 text-white shadow-sm"
                                    : "dark:text-gray-400 dark:hover:text-gray-200"
                                }`}
                        >
                            Languages
                        </button>
                    </div>

                    {activeTab === "overview" && (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="dark:bg-darkTheme dark:border-white/80 p-5 rounded-lg border border-gray-700 shadow-sm flex flex-col">
                                    <span className="dark:text-gray-400 text-sm text-black font-semibold mb-1 flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                        Total Coding Time
                                    </span>
                                    <span className="text-3xl font-bold dark:text-white text-black">{formatTime(stats.total_seconds)}</span>
                                    <span className="text-xs dark:text-gray-500 dark:font-semibold text-black font-semibold mt-1">This week</span>
                                </div>

                                <div className="dark:bg-darkTheme dark:border-white/80 p-5 rounded-lg border border-gray-700 shadow-sm flex flex-col">
                                    <span className="dark:text-gray-400 text-sm text-black font-semibold mb-1 flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 20v-6M6 20V10M18 20V4" />
                                        </svg>
                                        Daily Average
                                    </span>
                                    <span className="text-3xl font-bold dark:text-white text-black">{formatDailyAvg(stats.daily_average)}</span>
                                    <span className="text-xs dark:text-gray-500 dark:font-semibold mt-1">Per day</span>
                                </div>
                            </div>

                            <div className=" relative p-5 rounded-lg border border-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                                <div className="absolute inset-0 dark:bg-darkTheme bg-white rounded-lg m-[1px]"></div>
                                <div className="relative">
                                    <h4 className="text-sm font-medium dark:text-gray-400 text-black mb-3 flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                        </svg>
                                        Top 3 Languages
                                    </h4>
                                    {stats.languages && stats.languages.length > 0 ? (
                                        <div className="space-y-3">
                                            {stats.languages.slice(0, 3).map((lang) => (
                                                <div key={lang.name} className="space-y-1">
                                                    <div className="flex justify-between text-sm">
                                                        <span className="font-medium flex items-center gap-1">
                                                            {getLanguageIcon(lang.name)} {lang.name}
                                                        </span>
                                                        <span className="text-blue-300">{lang.percent.toFixed(1)}%</span>
                                                    </div>
                                                    <div className="h-2 w-full dark:bg-gray-700 bg-gray-200 rounded-full overflow-hidden">
                                                        <div
                                                            className={`h-full bg-gradient-to-r ${getGradientColor(lang.percent)}`}
                                                            style={{ width: `${lang.percent}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center dark:text-gray-400 text-black py-3">
                                            No language data available for this period
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    )}
                    {activeTab === "languages" && (
                        <div className="space-y-4">
                            {stats.languages && stats.languages.length > 0 ? (
                                <div className="dark:bg-darkTheme rounded-lg border border-gray-700 overflow-hidden">
                                    <div className="space-y-0">
                                        {stats.languages.map((lang, index) => (
                                            <div
                                                key={lang.name}
                                                className={`p-3 flex items-center justify-between ${index !== stats.languages.length - 1 ? "border-b border-gray-700" : ""
                                                    }`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div className="w-6 text-center">{getLanguageIcon(lang.name)}</div>
                                                    <span className="font-medium">{lang.name}</span>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-sm dark:text-gray-400 font-semibold text-black">
                                                        {formatDailyAvg(lang.total_seconds)}
                                                    </span>
                                                    <span className="text-sm font-semibold dark:text-blue-300 text-blue-600 w-14 text-right">
                                                        {lang.percent.toFixed(1)}%
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="dark:bg-darkTheme dark:border-white/80 dark:text-gray-400 text-black p-6 rounded-lg text-center  border border-black/80">
                                    No language data available for this period
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}