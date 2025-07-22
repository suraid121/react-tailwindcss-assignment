const Documents = () => {
    return (
        <div className="max-w-3xl mx-auto p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6">RescueTime Documentation</h1>

            {/* Getting Started */}
            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">Getting Started</h2>
                <p className="text-gray-700 mb-3 text-sm sm:text-base">
                    RescueTime helps you track your digital habits and improve productivity.
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm sm:text-base">
                    <li>Install the browser extension or desktop app</li>
                    <li>Create a RescueTime account</li>
                    <li>Allow tracking permissions</li>
                    <li>Start reviewing your activity reports</li>
                </ul>
            </section>

            {/* Key Features */}
            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">Key Features</h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm sm:text-base">
                    <li>Automatic app & website time tracking</li>
                    <li>Productivity scoring by category</li>
                    <li>Daily, weekly, and monthly summaries</li>
                    <li>Focus time alerts and goal setting</li>
                </ul>
            </section>

            {/* FAQs */}
            <section className="mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">FAQs</h2>
                <div className="space-y-4 text-sm sm:text-base">
                    <div>
                        <p className="font-medium">Is RescueTime free?</p>
                        <p className="text-gray-600">Yes, there’s a free plan. Premium offers more insights and tools.</p>
                    </div>
                    <div>
                        <p className="font-medium">What platforms are supported?</p>
                        <p className="text-gray-600">Windows, macOS, Linux, mobile, Chrome, Firefox, etc.</p>
                    </div>
                    <div>
                        <p className="font-medium">Is my data private?</p>
                        <p className="text-gray-600">Yes, all data is encrypted and never shared with third parties.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Documents;