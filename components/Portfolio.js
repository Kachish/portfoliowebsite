function Portfolio() {
    try {
        const [filter, setFilter] = React.useState('all');
        const projects = [
            // Web Development Projects
            {
                id: 1,
                title: 'Transs Limited Website',
                category: 'web',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                description: 'Business website promoting digital services.',
                link: '#'
            },
            {
                id: 2,
                title: 'Forex Trading Signals Website',
                category: 'web',
                image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                description: 'Landing page for Forex trading services.',
                link: '#'
            },
            {
                id: 3,
                title: 'Startup Business Website',
                category: 'web',
                image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                description: 'Online business promotional platform.',
                link: '#'
            },
            {
                id: 4,
                title: 'Business Portfolio Website',
                category: 'web',
                image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                description: 'Personal brand portfolio.',
                link: '#'
            },
            // Virtual Assistance Projects
            {
                id: 5,
                title: 'Calendar & Email Management',
                category: 'va',
                image: 'https://images.unsplash.com/photo-1506784693919-ef06d93c28d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                description: 'Streamlined email and schedule management.',
                link: '#'
            },
            {
                id: 6,
                title: 'Travel & Booking Coordination',
                category: 'va',
                image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                description: 'Seamless flight and hotel booking for clients.',
                link: '#'
            },
            {
                id: 7,
                title: 'Lead Generation & Research',
                category: 'va',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                description: 'Market research and business leads generation.',
                link: '#'
            },
            {
                id: 8,
                title: 'Social Media Content Scheduling',
                category: 'va',
                image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                description: 'Content planning and scheduling with Canva and Buffer.',
                link: '#'
            },
            // Data Analysis Projects
            {
                id: 9,
                title: 'Sales Data Analysis',
                category: 'data',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                description: 'Revenue trends analysis using Excel.',
                link: '#'
            },
            {
                id: 10,
                title: 'Customer Churn Analysis',
                category: 'data',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                description: 'Predictive analysis with Power BI.',
                link: '#'
            },
            {
                id: 11,
                title: 'Market Research Data Visualization',
                category: 'data',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                description: 'Customer preference insights using Tableau.',
                link: '#'
            },
            {
                id: 12,
                title: 'Inventory Data Analysis',
                category: 'data',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                description: 'Automated reports for stock management using Power BI.',
                link: '#'
            }
        ];

        const filteredProjects = filter === 'all' 
            ? projects 
            : projects.filter(project => project.category === filter);

        return (
            <section id="portfolio" data-name="portfolio-section" className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">My Portfolio</h2>
                    
                    <div className="flex justify-center space-x-4 mb-8">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setFilter('web')}
                            className={`px-4 py-2 rounded ${filter === 'web' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                        >
                            Web Dev
                        </button>
                        <button
                            onClick={() => setFilter('va')}
                            className={`px-4 py-2 rounded ${filter === 'va' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                        >
                            Virtual Assistant
                        </button>
                        <button
                            onClick={() => setFilter('data')}
                            className={`px-4 py-2 rounded ${filter === 'data' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                        >
                            Data Analysis
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map(project => (
                            <div
                                key={project.id}
                                data-name={`portfolio-item-${project.id}`}
                                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-secondary transition-colors"
                                    >
                                        View Project →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Portfolio component error:', error);
        reportError(error);
        return null;
    }
}
