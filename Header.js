function Header() {
    const scrollToSection = (sectionId) => {
        try {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div data-name="header-wrapper">
            <nav data-name="navigation" className="bg-gray-900 text-white py-4 sticky top-0 z-50 shadow-md">
                <div className="container mx-auto px-4">
                    <ul className="flex flex-wrap justify-center gap-6 md:gap-8 text-gray-300">
                        <li>
                            <button 
                                onClick={() => scrollToSection('about')}
                                className="hover:text-white transition-colors duration-200"
                            >
                                About Me
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('experience')}
                                className="hover:text-white transition-colors duration-200"
                            >
                                Work Experience
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('internships')}
                                className="hover:text-white transition-colors duration-200"
                            >
                                Internships
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('skills')}
                                className="hover:text-white transition-colors duration-200"
                            >
                                Technical Skills
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('projects')}
                                className="hover:text-white transition-colors duration-200"
                            >
                                Projects
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('coursework')}
                                className="hover:text-white transition-colors duration-200"
                            >
                                Coursework
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => scrollToSection('contact')}
                                className="hover:text-white transition-colors duration-200"
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            <header data-name="hero" className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <h1 data-name="name" className="text-4xl md:text-6xl font-bold mb-4">Abhishek Singh</h1>
                    <h2 data-name="title" className="text-2xl md:text-3xl text-gray-300 mb-6">Research Analyst / Business Analyst</h2>
                    <div data-name="contact-info" className="flex flex-wrap gap-6 text-gray-400 mb-8">
                        <a href="tel:8826297879" className="flex items-center hover:text-white">
                            <i className="fas fa-phone mr-2"></i>
                            (882) 629 7879
                        </a>
                        <a href="mailto:abhiabhisheksingh100@gmail.com" className="flex items-center hover:text-white">
                            <i className="fas fa-envelope mr-2"></i>
                            abhiabhisheksingh100@gmail.com
                        </a>
                        <a href="https://www.linkedin.com/in/abhisheksingh100" target="_blank" className="flex items-center hover:text-white">
                            <i className="fab fa-linkedin mr-2"></i>
                            LinkedIn
                        </a>
                        <a href="https://github.com/100abhishek" target="_blank" className="flex items-center hover:text-white">
                            <i className="fab fa-github mr-2"></i>
                            GitHub
                        </a>
                        <span className="flex items-center">
                            <i className="fas fa-location-dot mr-2"></i>
                            New Delhi, IN 110096
                        </span>
                    </div>
                    <div data-name="summary" className="max-w-3xl">
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            I'm a data analyst who transforms raw data into actionable insights to drive business growth. 
                            Skilled in Python, SQL, and data visualization (Power BI, Tableau), I identify trends, opportunities, 
                            and risks to optimize business strategies. I focus on generating impactful results through data analysis 
                            to improve efficiency and support informed decision-making.
                        </p>
                    </div>
                </div>
            </header>
        </div>
    );
}
