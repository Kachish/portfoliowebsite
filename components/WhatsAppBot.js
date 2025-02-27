function WhatsAppBot() {
    try {
        const [isOpen, setIsOpen] = React.useState(false);
        const [selectedOption, setSelectedOption] = React.useState(null);

        const services = [
            { id: 'va', name: 'Virtual Assistant Services', message: "I'm interested in your Virtual Assistant services" },
            { id: 'web', name: 'Web Development Services', message: "I'd like to know more about your Web Development services" },
            { id: 'marketing', name: 'Digital Marketing Services', message: "I'm interested in your Digital Marketing services" },
            { id: 'data', name: 'Data Analysis Services', message: "I'd like to learn more about your Data Analysis services" }
        ];

        const handleOptionClick = (message) => {
            const whatsappLink = `https://wa.me/+254725409996?text=${encodeURIComponent(message)}`;
            window.open(whatsappLink, '_blank');
            setIsOpen(false);
        };

        return (
            <div data-name="whatsapp-bot" className="whatsapp-bot">
                {isOpen && (
                    <div data-name="whatsapp-options" className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl mb-4 w-72">
                        <h3 className="text-lg font-semibold mb-3">Hello, I'm Omar! How can I assist you today?</h3>
                        <div className="space-y-2">
                            {services.map(service => (
                                <button
                                    key={service.id}
                                    data-name={`whatsapp-option-${service.id}`}
                                    onClick={() => handleOptionClick(service.message)}
                                    className="w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                                >
                                    {service.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                <button
                    data-name="whatsapp-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors animate-bounce"
                >
                    <i className="fab fa-whatsapp text-2xl"></i>
                </button>
            </div>
        );
    } catch (error) {
        console.error('WhatsAppBot component error:', error);
        reportError(error);
        return null;
    }
}
