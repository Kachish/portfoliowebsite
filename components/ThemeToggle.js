function ThemeToggle({ darkMode, setDarkMode }) {
    try {
        return (
            <button
                data-name="theme-toggle-button"
                onClick={() => {
                    setDarkMode(!darkMode);
                    toggleTheme(!darkMode);
                }}
                className="fixed top-20 right-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg"
                aria-label="Toggle theme"
            >
                <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
            </button>
        );
    } catch (error) {
        console.error('ThemeToggle component error:', error);
        reportError(error);
        return null;
    }
}
