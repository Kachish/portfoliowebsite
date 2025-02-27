function App() {
    try {
        const [darkMode, setDarkMode] = React.useState(false);

        React.useEffect(() => {
            document.body.className = darkMode ? 'dark' : 'light';
            
            // Reveal animation on scroll
            const handleScroll = () => {
                const reveals = document.querySelectorAll('.reveal');
                reveals.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    if (elementTop < windowHeight - 100) {
                        element.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, [darkMode]);

        return (
            <div data-name="app-container">
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <Hero />
                <About />
                <Education />
                <Certifications />
                <Skills />
                <WorkHistory />
                <Tools />
                <Services />
                <Portfolio />
                <Contact />
                <Footer />
                <WhatsAppBot />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
