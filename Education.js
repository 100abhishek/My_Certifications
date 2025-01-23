function Education() {
    const education = [
        {
            school: "Bundelkhand Institute of Engineering and Technology",
            degree: "Bachelors of Technology in Chemical Engineering",
            period: "Dec 2020 – July 2024",
            location: "Jhansi, U.P.",
            gpa: "7.9/10.0"
        },
        {
            school: "Angels Public School",
            degree: "Senior Secondary Education",
            period: "Apr 2018 – May 2019",
            location: "Vasundhra Enclave, New Delhi",
            gpa: "8.54/10.0"
        }
    ];

    const courses = [
        {
            name: "Google Data Analytics",
            status: "(Pursuing)"
        },
        {
            name: "Data Visualization with Power BI",
            link: "https://drive.google.com/file/d/1C3PK0hsKjU_9T2n4kTzg25iQCNS2U2Tm/view?usp=sharing"
        },
        {
            name: "Machine Learning and Deep Learning",
            link: "https://drive.google.com/file/d/1wyvIYBgIUM4nT9htNwXkzsNmllnsbBaG/view?usp=sharing"
        },
        {
            name: "MATLAB from MathWorks",
            link: "https://drive.google.com/file/d/1cyWCXonoOU-m3VpJpV4BvFaWUu3vS0S8/view?usp=sharing"
        },
        {
            name: "SQL Hacker Rank Certification",
            link: "https://drive.google.com/file/d/1p-6gZGVOLan7slfUQWIvjt1yS9w_9bxQ/view?usp=drive_link"
        },
        {
            name: "Database Management System"
        }
    ];

    return (
        <section data-name="education" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 data-name="section-title" className="text-3xl font-bold mb-8">Education</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div data-name="formal-education">
                        <h3 className="text-xl font-semibold mb-4">Formal Education</h3>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-lg mb-2">{edu.school}</h4>
                                    <p className="text-gray-600">{edu.degree}</p>
                                    <p className="text-gray-500">{edu.period}</p>
                                    <p className="text-gray-500">{edu.location}</p>
                                    <p className="text-gray-600 mt-2">GPA: {edu.gpa}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div data-name="relevant-coursework">
                        <h3 className="text-xl font-semibold mb-4">Relevant Coursework</h3>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <ul className="space-y-3">
                                {courses.map((course, index) => (
                                    <li key={index} className="flex items-center">
                                        <i className="fas fa-certificate text-indigo-600 mr-3"></i>
                                        {course.link ? (
                                            <a href={course.link} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
                                                {course.name}
                                            </a>
                                        ) : (
                                            <span>{course.name} {course.status || ''}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
