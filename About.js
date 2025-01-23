function About() {
    return (
        <section data-name="about" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 data-name="section-title" className="text-3xl font-bold mb-8">About Me</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div data-name="about-content">
                        <p className="text-gray-600 mb-4">
                            With over 5 years of experience in data analysis, I specialize in turning raw data
                            into valuable business insights. My expertise includes statistical analysis,
                            data visualization, and predictive modeling using tools like Python, R, and SQL.
                        </p>
                        <p className="text-gray-600">
                            I've worked with various industries, helping organizations make data-driven
                            decisions that lead to improved efficiency and business growth.
                        </p>
                    </div>
                    <div data-name="key-points">
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <i className="fas fa-chart-line text-indigo-600 mr-3"></i>
                                <span>Advanced Data Analysis & Visualization</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-database text-indigo-600 mr-3"></i>
                                <span>Database Management & SQL</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-brain text-indigo-600 mr-3"></i>
                                <span>Machine Learning & Statistical Modeling</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-project-diagram text-indigo-600 mr-3"></i>
                                <span>Business Intelligence & Reporting</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
