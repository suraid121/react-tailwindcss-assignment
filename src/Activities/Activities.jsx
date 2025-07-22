const Activities = () => {
    const activities = [
        { id: 1, category: "Work", description: "VS Code – Coding project", duration: "2h 30m", timestamp: "July 21, 2025 – 10:30 AM" },
        { id: 2, category: "Meetings", description: "Zoom call – Team sync", duration: "45m", timestamp: "July 21, 2025 – 9:00 AM" },
        { id: 3, category: "Break", description: "YouTube", duration: "15m", timestamp: "July 21, 2025 – 11:00 AM" },
    ];

    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">Your Daily Activities</h1>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
                Tracked activities for today, categorized and time-stamped.
            </p>

            <div className="space-y-6">
                {activities.map((activity) => (
                    <div
                        key={activity.id}
                        className="bg-white shadow rounded-md p-4 sm:p-6 border border-gray-100"
                    >
                        <p className="text-sm sm:text-base"><span className="font-semibold">Category:</span> {activity.category}</p>
                        <p className="text-sm sm:text-base"><span className="font-semibold">Description:</span> {activity.description}</p>
                        <p className="text-sm sm:text-base"><span className="font-semibold">Duration:</span> {activity.duration}</p>
                        <p className="text-xs sm:text-sm text-gray-500"><span className="font-semibold">Timestamp:</span> {activity.timestamp}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Activities;