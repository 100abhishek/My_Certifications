function Skills() {
    const skillCategories = [
        {
            title: "Programming",
            skills: [
                { name: "Python", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "pandas", level: 90 },
                { name: "numpy", level: 85 },
                { name: "matplotlib", level: 85 }
            ]
        },
        {
            title: "Databases & SQL",
            skills: [
                { name: "MySQL", level: 90 },
                { name: "PostgreSQL", level: 85 },
                { name: "MongoDB", level: 80 },
                { name: "DynamoDB", level: 75 }
            ]
        },
        {
            title: "Data Visualization",
            skills: [
                { name: "Power BI", level: 95 },
                { name: "Tableau", level: 90 },
                { name: "Excel (Advanced)", level: 95 }
            ]
        },
        {
            title: "Cloud & Tools",
            skills: [
                { name: "AWS S3", level: 80 },
                { name: "ETL", level: 85 },
                { name: "GitHub", level: 90 },
                { name: "Zapier", level: 85 }
            ]
        }
    ];

    return (
        <section data-name="skills" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 data-name="section-title" className="text-3xl font-bold mb-8">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-700">{skill.name}</span>
                                            <span className="text-gray-500">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-indigo-600 h-2 rounded-full"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
