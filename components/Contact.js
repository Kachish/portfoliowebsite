function Contact() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            message: ''
        });
        const [isSubmitting, setIsSubmitting] = React.useState(false);

        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            
            try {
                // Here you would typically send the form data to a server
                // For now, we'll simulate a submission
                await new Promise(resolve => setTimeout(resolve, 1000));
                alert('Thank you for your message! I will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
            } catch (error) {
                console.error('Form submission error:', error);
                alert('Sorry, there was an error submitting your message. Please try again.');
            } finally {
                setIsSubmitting(false);
            }
        };

        return (
            <section id="contact" data-name="contact-section" className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
                    <div className="max-w-2xl mx-auto">
                        <form onSubmit={handleSubmit} data-name="contact-form" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                    className="w-full p-3 border rounded-lg dark:bg-gray-800"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    required
                                    className="w-full p-3 border rounded-lg dark:bg-gray-800"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2">Message</label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    required
                                    rows="5"
                                    className="w-full p-3 border rounded-lg dark:bg-gray-800"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-colors disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
        return null;
    }
}
