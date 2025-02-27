function WorkHistory() {
    try {
        const workHistory = [
            {
                period: "2023 – Present",
                title: "Career Development Services",
                achievements: [
                    "Crafted over 50 professional CVs and Resumes tailored to different industries",
                    "Designed custom portfolio websites to showcase client skills",
                    "Optimized LinkedIn profiles for better visibility",
                    "Provided interview coaching sessions",
                    "Wrote compelling cover letters aligned with job descriptions",
                    "Offered career consultation services",
                    "Conducted CV reviews and feedback sessions",
                    "Assisted clients in achieving career advancement goals"
                ]
            },
            {
                period: "2023 – Present",
                title: "Freelance Data Analyst",
                achievements: [
                    "Analyzed large datasets using Excel, Google Sheets, and Power BI to generate insights",
                    "Created interactive dashboards for business reports",
                    "Performed data cleaning and validation to ensure data accuracy",
                    "Generated visual reports that improved decision-making efficiency by 35%",
                    "Developed business intelligence reports using Power BI and Tableau",
                    "Provided monthly performance analysis reports for clients",
                    "Conducted trend analysis to identify growth opportunities",
                    "Automated data reporting processes, saving clients over 15 hours per month"
                ]
            },
            {
                period: "2022 – Present",
                title: "Freelance Web Developer",
                achievements: [
                    "Designed and developed responsive personal portfolio websites",
                    "Coded user-friendly business websites using HTML, CSS, and JavaScript",
                    "Optimized website SEO and page speed performance",
                    "Provided website maintenance and updates",
                    "Created portfolio websites for career development clients",
                    "Developed website templates for faster deployment",
                    "Conducted website usability testing",
                    "Integrated WhatsApp chatbots into client websites"
                ]
            },
            {
                period: "2022 – Present",
                title: "Freelance Virtual Assistant",
                achievements: [
                    "Managed client calendars and emails, increasing schedule efficiency by 30%",
                    "Conducted market research to support business decision-making",
                    "Optimized project coordination using Asana and Trello for streamlined workflow",
                    "Assisted in social media management, creating content calendars and scheduling posts",
                    "Organized client documents and data entry, improving data accessibility",
                    "Delivered lead generation services, identifying over 200 potential leads",
                    "Maintained 100% client satisfaction by providing timely customer support",
                    "Managed appointment scheduling and reminders, reducing missed appointments by 40%"
                ]
            }
        ];

        return (
            <section id="work-history" data-name="work-history-section" className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Working History</h2>
                    <div className="max-w-4xl mx-auto">
                        {workHistory.map((job, index) => (
                            <div
                                key={index}
                                data-name={`work-history-item-${index}`}
                                className="relative pl-8 pb-12 border-l-2 border-primary reveal"
                            >
                                <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary rounded-full"></div>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ml-4">
                                    <div className="text-primary font-semibold mb-2">{job.period}</div>
                                    <h3 className="text-xl font-bold mb-4">{job.title}</h3>
                                    <ul className="space-y-2">
                                        {job.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="text-primary mr-2">•</span>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('WorkHistory component error:', error);
        reportError(error);
        return null;
    }
}
