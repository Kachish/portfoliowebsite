function Hero() {
    try {
        const [typingText, setTypingText] = React.useState('');
        const texts = [
            'Virtual Assistant',
            'Web Developer',
            'Digital Marketer',
            'Data Analyst'
        ];

        React.useEffect(() => {
            let currentIndex = 0;
            let isDeleting = false;
            let text = '';
            let typingSpeed = 100;

            const type = () => {
                const currentText = texts[currentIndex];
                
                if (isDeleting) {
                    text = currentText.substring(0, text.length - 1);
                } else {
                    text = currentText.substring(0, text.length + 1);
                }

                setTypingText(text);

                if (!isDeleting && text === currentText) {
                    typingSpeed = 2000;
                    isDeleting = true;
                } else if (isDeleting && text === '') {
                    isDeleting = false;
                    currentIndex = (currentIndex + 1) % texts.length;
                    typingSpeed = 100;
                } else {
                    typingSpeed = isDeleting ? 50 : 100;
                }

                setTimeout(type, typingSpeed);
            };

            type();
        }, []);

        return (
            <section 
                id="home" 
                data-name="hero-section" 
                className="hero min-h-screen flex items-center"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Empowering Businesses with Digital Solutions
                        </h1>
                        <div className="text-2xl md:text-3xl text-primary mb-8">
                            <span className="typing-text">{typingText}</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="#contact"
                                data-name="hire-button"
                                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors"
                            >
                                Hire Me
                            </a>
                            <a
                                href="https://wa.me/+254700000000"
                                data-name="whatsapp-button"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors"
                            >
                                Let's Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
