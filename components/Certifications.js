function Certifications() {
    try {
        const certifications = [
            {
                id: 1,
                name: 'Financial Modeling and Valuation Analysis (FMVA)',
                institution: 'Corporate Finance Institute',
                date: '2022',
                description: 'Advanced certification in financial modeling and business valuation.'
            },
            {
                id: 2,
                name: 'Business Intelligence and Data Analysis (BIDA)',
                institution: 'Corporate Finance Institute',
                date: '2022',
                description: 'Comprehensive training in business intelligence tools and data analysis.'
            },
            {
                id: 3,
                name: 'Professional Foundation',
                institution: 'ALX AFRICA',
                date: '2024',
                description: 'Foundation course in professional development and technical skills.'
            },
            {
                id: 4,
                name: 'Founder Academy',
                institution: 'ALX Ventures',
                date: 'October 2024 - December 2024',
                description: 'Entrepreneurship and business development program.'
            },
            {
                id: 5,
                name: 'McKinsey Forward Program',
                institution: 'McKinsey Academy',
                date: 'July 2024 - December 2024',
                description: 'Leadership and business strategy program.'
            },
            {
                id: 6,
                name: 'Inventory Management',
                institution: 'HP Foundation',
                date: 'April 2024 - October 2024',
                description: 'Comprehensive inventory management and control systems.'
            },
            {
                id: 7,
                name: 'Digital Marketing Tools Basics',
                institution: 'Great Learning Institute',
                date: 'August 2023 - October 2023',
                description: 'Fundamentals of digital marketing tools and strategies.'
            }
        ];

        return (
            <section id="certifications" data-name="certifications-section" className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certifications.map(cert => (
                            <div
                                key={cert.id}
                                data-name={`certification-card-${cert.id}`}
                                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
                            >
                                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                                <p className="text-primary mb-2">{cert.institution}</p>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{cert.description}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Certifications component error:', error);
        reportError(error);
        return null;
    }
}
