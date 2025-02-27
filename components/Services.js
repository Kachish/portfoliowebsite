function Services() {
    try {
        const services = [
            {
                id: 'va',
                title: 'Virtual Assistance',
                icon: 'fa-calendar-check',
                description: 'Professional virtual assistance services including email management, scheduling, and administrative support.'
            },
            {
                id: 'web',
                title: 'Web Development',
                icon: 'fa-code',
                description: 'Custom website development using modern technologies and frameworks.'
            },
            {
                id: 'marketing',
                title: 'Digital Marketing',
                icon: 'fa-bullhorn',
                description: 'Strategic digital marketing services to help grow your online presence.'
            },
            {
                id: 'data',
                title: 'Data Analysis',
                icon: 'fa-chart-line',
                description: 'Comprehensive data analysis and visualization services for business insights.'
            }
        ];

        const handleBookNow = (service) => {
            const message = `Hi Omar, I'm interested in your ${service.title} services.`;
            window.open(`https://wa.me/+254725409996?text=${encodeURIComponent(message)}`, '_blank');
        };

        return (
            <section id="services" data-name="services-section" className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map(service => (
                            <div
                                key={service.id}
                                data-name={`service-card-${service.id}`}
                                className="service-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                            >
                                <div className="text-primary text-4xl mb-4">
                                    <i className={`fas ${service.icon}`}></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                                <button
                                    onClick={() => handleBookNow(service)}
                                    className="w-full bg-primary text-white py-2 rounded hover:bg-secondary transition-colors"
                                >
                                    Book Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Services component error:', error);
        reportError(error);
        return null;
    }
}
