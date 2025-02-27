function Education() {
    try {
        const education = [
            {
                id: 1,
                degree: 'Bachelor of Science in Economics',
                institution: 'Meru University of Science and Technology',
                period: '2020 - 2024',
                description: 'Comprehensive study of economic principles, data analysis, and research methodologies.'
            },
            {
                id: 2,
                degree: 'Kenya Certificate of Secondary Education',
                institution: 'Rabai Secondary School',
                period: '2016 - 2019',
                description: 'Strong foundation in sciences and mathematics with excellent academic performance.'
            }
        ];

        return (
            <section id="education" data-name="education-section" className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
                    <div className="max-w-3xl mx-auto">
                        {education.map(edu => (
                            <div
                                key={edu.id}
                                data-name={`education-item-${edu.id}`}
                                className="relative pl-8 pb-8 border-l-2 border-primary"
                            >
                                <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary rounded-full"></div>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ml-4">
                                    <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                                    <p className="text-primary mb-2">{edu.institution}</p>
                                    <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.period}</p>
                                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Education component error:', error);
        reportError(error);
        return null;
    }
}
