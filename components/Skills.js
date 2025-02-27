function Skills() {
    try {
        const skillCategories = {
            virtualAssistance: {
                title: "Virtual Assistance",
                skills: [
                    { name: 'Calendar & Email Management', level: 95 },
                    { name: 'Project Coordination', level: 90 },
                    { name: 'Social Media Management', level: 85 },
                    { name: 'Market Research', level: 90 },
                    { name: 'Lead Generation', level: 85 },
                    { name: 'Data Entry', level: 95 },
                    { name: 'File Organization', level: 90 },
                    { name: 'Appointment Scheduling', level: 95 }
                ]
            },
            dataAnalysis: {
                title: "Data Analysis",
                skills: [
                    { name: 'Data Cleaning', level: 90 },
                    { name: 'Data Visualization', level: 85 },
                    { name: 'Reporting', level: 90 },
                    { name: 'Statistical Analysis', level: 85 },
                    { name: 'Business Intelligence', level: 80 },
                    { name: 'Dashboard Creation', level: 85 }
                ]
            },
            webDevelopment: {
                title: "Web Development",
                skills: [
                    { name: 'HTML, CSS, JavaScript', level: 85 },
                    { name: 'Responsive Website Design', level: 90 },
                    { name: 'Website Optimization', level: 85 },
                    { name: 'Website Maintenance', level: 90 }
                ]
            },
            careerDevelopment: {
                title: "Career Development",
                skills: [
                    { name: 'CV & Resume Writing', level: 95 },
                    { name: 'Portfolio Website Creation', level: 90 },
                    { name: 'LinkedIn Optimization', level: 85 },
                    { name: 'Cover Letter Writing', level: 90 },
                    { name: 'Interview Coaching', level: 85 }
                ]
            }
        };

        const SkillBar = ({ name, level }) => (
            <div className="mb-6">
                <div className="flex justify-between mb-2">
                    <span>{name}</span>
                    <span>{level}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded">
                    <div
                        className="h-full bg-primary rounded"
                        style={{ width: `${level}%`, transition: 'width 1s ease-in-out' }}
                    ></div>
                </div>
            </div>
        );

        return (
            <section id="skills" data-name="skills-section" className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {Object.entries(skillCategories).map(([key, category]) => (
                            <div key={key} data-name={`skills-${key}`} className="reveal">
                                <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
                                {category.skills.map(skill => (
                                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Skills component error:', error);
        reportError(error);
        return null;
    }
}
