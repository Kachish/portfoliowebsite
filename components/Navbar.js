function Navbar({ darkMode, setDarkMode }) {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        const navItems = [
            { label: 'Home', href: '#home' },
            { label: 'About', href: '#about' },
            { label: 'Services', href: '#services' },
            { label: 'Portfolio', href: '#portfolio' },
            { label: 'Contact', href: '#contact' }
        ];

        return (
            <nav data-name="navbar" className="navbar bg-white/80 dark:bg-gray-900/80 shadow-lg">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex justify-between items-center">
                        <a href="#" data-name="logo" className="text-xl font-bold text-primary">
                            Omar Konde
                        </a>

                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map(item => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    data-name={`nav-item-${item.label.toLowerCase()}`}
                                    className="hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <button
                                data-name="theme-toggle"
                                onClick={() => setDarkMode(!darkMode)}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                            </button>
                        </div>

                        <button
                            data-name="mobile-menu-button"
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div data-name="mobile-menu" className="md:hidden mt-4">
                            {navItems.map(item => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    data-name={`mobile-nav-item-${item.label.toLowerCase()}`}
                                    className="block py-2 hover:text-primary transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        reportError(error);
        return null;
    }
}
