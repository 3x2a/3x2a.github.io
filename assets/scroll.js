document.addEventListener('DOMContentLoaded', () => {
    const panels = document.querySelectorAll('.panel');
    const footerPanel = document.querySelector('.footerPanel');
    let currentIndex = 0;
    let isScrolling = false;
    let scrollTimeout;

    function scrollToPanel(index) {
        if (index >= 0 && index < panels.length) {
            isScrolling = true;
            currentIndex = index;
            panels[index].scrollIntoView({ behavior: 'smooth' });
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => { isScrolling = false; }, 500); // Adjust this if needed
        }
    }

    function scrollToFooter() {
        isScrolling = true;
        footerPanel.scrollIntoView({ behavior: 'smooth' });
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => { isScrolling = false; }, 500); // Adjust this if needed
    }

    function handleWheel(event) {
        if (isScrolling) return;

        if (event.deltaY > 0) {
            if (currentIndex < panels.length - 1) {
                scrollToPanel(currentIndex + 1);
            } else {
                scrollToFooter();
            }
        } else if (event.deltaY < 0 && currentIndex > 0) {
            scrollToPanel(currentIndex - 1);
        }
    }

    function handleTouchStart(event) {
        touchStartY = event.touches[0].clientY;
    }

    function handleTouchMove(event) {
        if (isScrolling) return;

        const touchEndY = event.touches[0].clientY;
        const deltaY = touchStartY - touchEndY;

        if (deltaY > 50) { // Adjust threshold if needed
            if (currentIndex < panels.length - 1) {
                scrollToPanel(currentIndex + 1);
            } else {
                scrollToFooter();
            }
        } else if (deltaY < -50 && currentIndex > 0) { // Adjust threshold if needed
            scrollToPanel(currentIndex - 1);
        }

        touchStartY = touchEndY;
    }

    function handleKeydown(event) {
        if (isScrolling) return;

        if (event.key === 'ArrowDown') {
            if (currentIndex < panels.length - 1) {
                scrollToPanel(currentIndex + 1);
            } else {
                scrollToFooter();
            }
        } else if (event.key === 'ArrowUp' && currentIndex > 0) {
            scrollToPanel(currentIndex - 1);
        }
    }

    window.addEventListener('wheel', handleWheel);
    let touchStartY = 0;
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('keydown', handleKeydown);
});
