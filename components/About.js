function About() {
    try {
        return (
            <section id="about" data-name="about-section" className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div data-name="about-image" className="relative">
                            <img
                                src="public/about.jpg"
                                alt="Omar Washe Konde"
                                className="rounded-lg shadow-xl transform hover:scale-105 transition-transform"
                                width="600"
                                height="600"
                                loading="lazy"
                            />
                        </div>
                        <div data-name="about-content" className="reveal">
                            <h2 className="text-4xl font-bold mb-6">About Me</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Hello! I'm Omar Washe Konde, a passionate Virtual Assistant and Digital Solutions provider based in Mombasa, Kenya. With expertise in web development, digital marketing, and data analysis, I help businesses streamline their operations and achieve their goals.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                My journey in the digital world has equipped me with a unique blend of technical and business skills, allowing me to offer comprehensive solutions to my clients. I believe in continuous learning and staying updated with the latest industry trends.
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="#contact"
                                    data-name="hire-button"
                                    className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
                                >
                                    Hire Me
                                </a>
                                <a
                                    href="public/Omary_Konde_CV.pdf"
                                    data-name="cv-button"
                                    className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
                                    download
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
        return null;
    }
}
