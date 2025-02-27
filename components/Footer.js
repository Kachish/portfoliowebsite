function Footer() {
    try {
        const socialLinks = [
            { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/omarkonde4141352' },
            { name: 'Facebook', icon: 'fab fa-facebook', url: 'https://web.facebook.com/omarwashe.tetraaminezincate' },
            { name: 'Twitter', icon: 'fab fa-x-twitter', url: 'https://x.com/OmarWashe' },
            { name: 'Upwork', icon: 'fab fa-upwork', url: 'https://www.upwork.com/freelancers/~01870c62d44bcdb69e?mp_source=share' },
            { name: 'WhatsApp', icon: 'fab fa-whatsapp', url: 'https://wa.me/254725409996' }
        ];

        return (
            <footer data-name="footer" className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Contact Info */}
                        <div data-name="contact-info">
                            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                            <p className="mb-2">
                                <i className="fas fa-envelope mr-2"></i>
                                <a href="mailto:omaryw003@gmail.com">omaryw003@gmail.com</a>
                            </p>
                            <p className="mb-2">
                                <i className="fas fa-phone mr-2"></i>
                                <a href="tel:+254725409996">+254 725 409 996</a>
                            </p>
                            <p>
                                <i className="fas fa-map-marker-alt mr-2"></i>
                                Mombasa, Kenya
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div data-name="quick-links">
                            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                                <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
                                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div data-name="social-links">
                            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                            <div className="flex space-x-4">
                                {socialLinks.map(social => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-2xl hover:text-primary transition-colors"
                                        aria-label={social.name}
                                    >
                                        <i className={social.icon}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                        <p>&copy; {new Date().getFullYear()} Omar Washe Konde. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
