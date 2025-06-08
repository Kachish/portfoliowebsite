import { Globe2 } from "lucide-react"; // Assuming you're using lucide-react for icons

function Portfolio() {
    try {
        const [filter, setFilter] = React.useState('all');
        const projects = [
            {
                id: 1,
                title: 'Omar Konde Portfolio',
                category: 'web',
                icon: <Globe2 size={48} />,
                description: 'My personal portfolio website.',
                link: 'https://omar-konde-portfolio-website.netlify.app/',
            },
            {
                id: 2,
                title: 'Ekistar Podcast Site',
                category: 'web',
                icon: <Globe2 size={48} />,
                description: 'Podcast platform for Ekistar.',
                link: 'https://ekistar-podcast.netlify.app/',
            },
            {
                id: 3,
                title: 'Soit Sugar Website',
                category: 'web',
                icon: <Globe2 size={48} />,
                description: 'Informational site for Soit Sugar.',
                link: 'https://soit-sugar.netlify.app/',
            },
            {
                id: 4,
                title: 'Wanjiru Kareithi Official',
                category: 'web',
                icon: <Globe2 size={48} />,
                description: 'Professional portfolio website.',
                link: 'https://www.wanjirukareithi.com/',
            },
            {
                id: 5,
                title: 'Peter Chuwa Portfolio',
                category: 'web',
                icon: <Globe2 size={48} />,
                description: 'Creative portfolio for Peter Chuwa.',
                link: 'https://peter-chuwa.netlify.app/',
            },
            {
                id: 6,
                title: 'Collins Portfolio',
                category: 'web',
                icon: <Globe2 size={48} />,
                description: 'Professional portfolio site for Collins.',
                link: 'https://collins-portfolio-web.netlify.app/',
            },
            {
                id: 7,
                title: 'Client Testimonials Site',
                category: 'web',
                icon: <Globe2 size={48} />,
                description: 'Testimonial and feedback platform.',
                link: 'https://omar-testimonials.netlify.app/',
            },
        ];

        const filteredProjects =
            filter === 'all' ? projects : projects.filter((project) => project.category === filter);

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
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="flex items-center justify-center h-48 bg-gray-100 dark:bg-gray-700">
                                    {project.icon}
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
