function Portfolio() {
    try {
        const [filter, setFilter] = React.useState('all');
        const projects = [
            // Web Development Projects
            {
                id: 1,
                title: 'Omar Konde Portfolio',
                category: 'web',
                image: 'https://cdn-icons-png.flaticon.com/512/1006/1006363.png', // Website icon
                description: 'Portfolio website for a professional.',
                link: 'https://omar-konde-portfolio-website.netlify.app/'
            },
            {
                id: 2,
                title: 'Ekistar Podcast',
                category: 'web',
                image: 'https://cdn-icons-png.flaticon.com/512/2452/2452499.png', // Podcast icon
                description: 'Podcast platform website.',
                link: 'https://ekistar-podcast.netlify.app/'
            },
            {
                id: 3,
                title: 'Soit Sugar',
                category: 'web',
                image: 'https://cdn-icons-png.flaticon.com/512/3081/3081559.png', // Business icon
                description: 'Business website for Soit Sugar.',
                link: 'https://soit-sugar.netlify.app/'
            },
            {
                id: 4,
                title: 'Wanjiru Kareithi',
                category: 'web',
                image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // Personal website icon
                description: 'Personal portfolio website.',
                link: 'https://www.wanjirukareithi.com/'
            },
            {
                id: 5,
                title: 'Peter Chuwa',
                category: 'web',
                image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // Personal website icon
                description: 'Portfolio website for Peter Chuwa.',
                link: 'https://peter-chuwa.netlify.app/'
            },
            {
                id: 6,
                title: 'Collins Portfolio',
                category: 'web',
                image: 'https://cdn-icons-png.flaticon.com/512/1006/1006363.png', // Portfolio icon
                description: 'Professional portfolio website.',
                link: 'https://collins-portfolio-web.netlify.app/'
            },
            {
                id: 7,
                title: 'Testimonials Page',
                category: 'web',
                image: 'https://cdn-icons-png.flaticon.com/512/3174/3174778.png', // Testimonial icon
                description: 'Client testimonials showcase.',
                link: 'https://omar-testimonials.netlify.app/'
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
                                <div className="flex justify-center items-center h-48 bg-gray-100 dark:bg-gray-700">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-24 h-24 object-contain"
                                    />
                                </div>
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
