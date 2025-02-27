function Tools() {
    try {
        const toolsData = {
            virtualAssistant: [
                { name: 'Asana', icon: 'fab fa-asana' },
                { name: 'Trello', icon: 'fab fa-trello' },
                { name: 'Notion', icon: 'fas fa-square-pen' },
                { name: 'Google Suite', icon: 'fab fa-google' },
                { name: 'Slack', icon: 'fab fa-slack' },
                { name: 'Zoom', icon: 'fas fa-video' },
                { name: 'Monday.com', icon: 'fas fa-calendar-check' },
                { name: 'Calendly', icon: 'far fa-calendar-alt' },
                { name: 'Canva', icon: 'fas fa-palette' },
                { name: 'LastPass', icon: 'fas fa-key' },
                { name: 'Microsoft Office', icon: 'fab fa-microsoft' },
                { name: 'CapCut', icon: 'fas fa-video-slash' }
            ],
            webDevelopment: [
                { name: 'HTML', icon: 'fab fa-html5' },
                { name: 'CSS', icon: 'fab fa-css3-alt' },
                { name: 'JavaScript', icon: 'fab fa-js' },
                { name: 'VS Code', icon: 'fas fa-code' },
                { name: 'Git', icon: 'fab fa-git-alt' },
                { name: 'GitHub', icon: 'fab fa-github' }
            ],
            dataAnalysis: [
                { name: 'Excel', icon: 'fas fa-table' },
                { name: 'Google Sheets', icon: 'fas fa-chart-line' },
                { name: 'Power BI', icon: 'fas fa-chart-bar' },
                { name: 'Tableau', icon: 'fas fa-chart-pie' }
            ],
            digitalMarketing: [
                { name: 'Canva', icon: 'fas fa-palette' },
                { name: 'CapCut', icon: 'fas fa-video-slash' },
                { name: 'Meta Ads', icon: 'fab fa-facebook' },
                { name: 'Google Ads', icon: 'fab fa-google' }
            ]
        };

        return (
            <section id="tools" data-name="tools-section" className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Tools & Technologies</h2>
                    
                    {Object.entries(toolsData).map(([category, tools]) => (
                        <div key={category} className="tools-category">
                            <h3 className="text-2xl font-semibold capitalize mb-6">
                                {category.replace(/([A-Z])/g, ' $1').trim()}
                            </h3>
                            <div className="tools-grid">
                                {tools.map((tool, index) => (
                                    <div
                                        key={index}
                                        data-name={`tool-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="tool-card"
                                    >
                                        <i className={`${tool.icon} text-3xl text-primary mb-2`}></i>
                                        <span className="tool-name">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    } catch (error) {
        console.error('Tools component error:', error);
        reportError(error);
        return null;
    }
}
