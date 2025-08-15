// Simple interactions for the website
document.addEventListener('DOMContentLoaded', function() {
    // Profile image click effect (subtle)
    const profilePic = document.getElementById('profile-pic');
    if (profilePic) {
        profilePic.addEventListener('click', function() {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    }
    
    // Social media links hover effect (subtle)
    const socialLinks = document.querySelectorAll('.social-icons a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // CV download button enhancement (subtle)
    const cvButton = document.querySelector('.cv-download-btn');
    if (cvButton) {
        cvButton.addEventListener('click', function(e) {
            // Add a subtle ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .cv-download-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.1);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Local time updater for sidebar
(function initLocalTime() {
    function formatTimeForZone(timeZone) {
        try {
            return new Intl.DateTimeFormat(undefined, {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                timeZone,
            }).format(new Date());
        } catch (e) {
            return '--:--';
        }
    }

    function updateAllLocalTimes() {
        var nodes = document.querySelectorAll('.local-time');
        nodes.forEach(function(node) {
            var tz = node.getAttribute('data-tz') || 'America/New_York';
            node.textContent = formatTimeForZone(tz);
        });
    }

    // Initial render and interval refresh
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateAllLocalTimes);
    } else {
        updateAllLocalTimes();
    }
    setInterval(updateAllLocalTimes, 30000);
})();
