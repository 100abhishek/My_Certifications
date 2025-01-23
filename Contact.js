function Contact() {
    return (
        <section data-name="contact" className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <h2 data-name="section-title" className="text-3xl font-bold mb-8">Get In Touch</h2>
                <div className="flex flex-col items-center">
                    <p className="text-gray-300 mb-8 text-center max-w-2xl text-xl">
                        Have a project in mind? Let's discuss
                    </p>
                    <div className="flex space-x-6">
                        <a
                            href="mailto:abhiabhisheksingh100@gmail.com"
                            data-name="email-link"
                            className="contact-icon text-3xl text-gray-300 hover:text-white"
                        >
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abhisheksingh100"
                            data-name="linkedin-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-icon text-3xl text-gray-300 hover:text-white"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/100abhishek"
                            data-name="github-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-icon text-3xl text-gray-300 hover:text-white"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
