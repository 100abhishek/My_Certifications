function Experience() {
    const experiences = [
        {
            title: "Research Analyst",
            company: "Appsquadz",
            location: "Noida, IN",
            period: "October 2024 - Present",
            achievements: [
                "Built and managed database of 80,000+ data points across 10+ industries via API integrations, driving 20% increase in sales leads",
                "Developed 10+ automated Power BI dashboards for market intelligence, reducing research time by 50%",
                "Engineered data collection through API integrations, achieving 70% reduction in manual entry and 95% improved accuracy",
                "Transformed advanced analytics to optimize sales strategies, achieving 30% higher lead qualification and productivity gain"
            ]
        },
        {
            title: "Data Research Analyst",
            company: "SDAD Technology",
            location: "Noida, IN",
            period: "July 2024 - September 2024",
            achievements: [
                "Leveraged advanced Excel functions (Macros, VLOOKUP) across 40+ data sources, improving executive reporting efficiency by 25%",
                "Designed Tableau dashboards to analyze 1M+ executive data points, driving data-backed strategic decisions",
                "Streamlined reporting with Google Apps Script, cutting processing time by 40% and boosting accuracy",
                "Generated market analysis reports using Excel pivot tables, identifying trends across 15+ industry segments"
            ]
        },
        {
            title: "Research Intern",
            company: "IFFCO",
            location: "BIET Jhansi",
            period: "May 2023 - June 2023",
            link: "https://drive.google.com/file/d/1ucOwlyP3s-eBkgjxiv5NWnHoRnRAVaBl/view?usp=drive_link",
            achievements: [
                "Analyzed production data at Phulpur Unit to optimize urea and ammonia synthesis processes",
                "Drove 15% efficiency gain in production processes",
                "Achieved 10% waste reduction through data-driven optimization"
            ]
        },
        {
            title: "Summer Intern",
            company: "Ministry of Housing & Urban Affairs",
            location: "BIET Jhansi",
            period: "July 2022 - August 2022",
            link: "https://drive.google.com/file/d/1cuiIma52CBzUzVabbpE2uxMiEZieh_Yf/view?usp=drive_link",
            achievements: [
                "Analyzed water quality data from Stone Temple Chitrakoot using Excel",
                "Identified five distinct pollutant types affecting water quality",
                "Developed actionable mitigation strategies for ecosystem preservation"
            ]
        }
    ];

    return (
        <section data-name="experience" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 data-name="section-title" className="text-3xl font-bold mb-8">Work Experience</h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex flex-wrap justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold">
                                        {exp.link ? (
                                            <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
                                                {exp.title}
                                            </a>
                                        ) : (
                                            exp.title
                                        )}
                                    </h3>
                                    <p className="text-gray-600">{exp.company} - {exp.location}</p>
                                </div>
                                <span className="text-gray-500">{exp.period}</span>
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
