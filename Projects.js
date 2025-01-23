function Projects() {
    const projects = [
        {
            title: "Weather Data Automation",
            period: "September 2024",
            description: "Python-based weather data extraction system",
            achievements: [
                "Developed Python script to extract weather data for 100+ locations with 95% accuracy in real-time collection",
                "Integrated Beautiful Soup for data parsing, achieving 80% reduction in manual data collection time",
                "Constructed daily weather reporting system for 1000+ records, enabling efficient trend analysis"
            ],
            tools: ["Python", "Beautiful Soup", "JSON Parsing"],
            icon: "fas fa-cloud",
            link: "https://github.com/100abhishek/Weather-Data-Automation"
        },
        {
            title: "Digital Payments SQL Analysis",
            period: "June 2024",
            description: "SQL-based payment transaction analysis system",
            achievements: [
                "Optimized complex SQL queries with JOINs and indexing, improving data retrieval efficiency by 30% across 100K+ transactions",
                "Applied advanced SQL functions (RANK, PARTITION BY, LIKE) to analyze performance and customer spending patterns",
                "Created automated Excel reports using SQL-driven macros, identifying top 50 merchants by revenue with 95% accuracy"
            ],
            tools: ["MySQL", "Excel", "Macros", "VLOOKUP"],
            icon: "fas fa-credit-card",
            link: "https://github.com/100abhishek/Digital-Payments-Performance-Analysis"
        },
        {
            title: "Blinkit Power BI Dashboard",
            period: "May 2024",
            description: "Comprehensive business intelligence dashboard",
            achievements: [
                "Implemented Power Query transformations on 15K+ entries, achieving 99% data accuracy for sales analysis",
                "Formulated 10+ DAX measures for KPIs including MoM growth and retention rates",
                "Designed interactive dashboard with drill-through filters and custom visualizations, reducing report time by 70%"
            ],
            tools: ["Power BI", "DAX", "SQL", "ETL"],
            icon: "fas fa-chart-line",
            link: "https://github.com/100abhishek/Blinkit-Sales-Performance-Dashboard"
        }
    ];

    return (
        <section data-name="projects" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 data-name="section-title" className="text-3xl font-bold mb-8">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            data-name={`project-${index}`}
                            className="project-card bg-white p-6 rounded-lg shadow-md"
                        >
                            <div className="text-3xl text-indigo-600 mb-4">
                                <i className={project.icon}></i>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
                                        {project.title}
                                    </a>
                                </h3>
                                <p className="text-gray-500">{project.period}</p>
                            </div>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                                {project.achievements.map((achievement, i) => (
                                    <li key={i}>{achievement}</li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                                {project.tools.map((tool, toolIndex) => (
                                    <span
                                        key={toolIndex}
                                        className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
