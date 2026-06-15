export default function initDarkMode() {
    const darkModeBtn = document.getElementById('dark-mode');
    const body = document.body;
    const iconDark = document.getElementById('dark');
    const iconLight = document.getElementById('ligth');
    
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', () => {
            const isDark = body.dataset.theme === 'dark';
            body.dataset.theme = isDark ? 'light' : 'dark';
            
            if (iconDark && iconLight) {
                iconDark.dataset.visible = isDark ? "true" : "false";
                iconLight.dataset.visible = isDark ? "false" : "true";
            }
        });
    }
}
