// Makeover functionality
function startMakeover() {
    alert('🎨 Welcome to Website Makeover Studio! Ready to transform your website?');
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}

function applyMakeover() {
    const style = document.getElementById('styleSelect').value;
    const color = document.getElementById('colorSelect').value;
    const effect = document.getElementById('effectSelect').value;
    
    const resultDiv = document.getElementById('result');
    const resultContent = resultDiv.querySelector('.result-content');
    
    // Apply different styles based on selections
    let gradientStyle = '';
    let animationStyle = '';
    
    switch(color) {
        case 'vibrant':
            gradientStyle = 'linear-gradient(135deg, #FF6B6B, #4ECDC4, #45B7D1)';
            break;
        case 'pastel':
            gradientStyle = 'linear-gradient(135deg, #FFB6C1, #FFDAB9, #E0BBE4)';
            break;
        case 'neon':
            gradientStyle = 'linear-gradient(135deg, #00FF00, #FF00FF, #00FFFF)';
            break;
        case 'sunset':
            gradientStyle = 'linear-gradient(135deg, #FF512F, #DD2475, #FF6B6B)';
            break;
    }
    
    switch(effect) {
        case 'bounce':
            animationStyle = 'bounce 0.5s ease';
            break;
        case 'glow':
            animationStyle = 'glow 1s ease-in-out infinite alternate';
            break;
        case 'pulse':
            animationStyle = 'pulse 1s ease-in-out infinite';
            break;
        default:
            animationStyle = 'none';
    }
    
    // Apply the makeover
    resultDiv.style.background = gradientStyle;
    resultDiv.style.animation = animationStyle;
    
    resultContent.innerHTML = `
        <h3>🎉 Makeover Applied! 🎉</h3>
        <p><strong>Style:</strong> ${style}</p>
        <p><strong>Color Scheme:</strong> ${color}</p>
        <p><strong>Effect:</strong> ${effect}</p>
        <p>✨ Your website has been transformed with a ${color} ${style} look!</p>
        <button onclick="resetMakeover()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: rgba(255,255,255,0.3); border: none; border-radius: 5px; cursor: pointer;">Reset</button>
    `;
    
    // Add animations to the button
    const applyBtn = document.querySelector('.apply-button');
    applyBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        applyBtn.style.transform = 'scale(1)';
    }, 200);
    
    // Show success message
    showNotification('✨ Makeover applied successfully!');
}

function resetMakeover() {
    const resultDiv = document.getElementById('result');
    resultDiv.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
    resultDiv.style.animation = 'none';
    
    const resultContent = resultDiv.querySelector('.result-content');
    resultContent.innerHTML = '<p>✨ Your makeover result will appear here ✨</p>';
    
    // Reset selects
    document.getElementById('styleSelect').value = 'modern';
    document.getElementById('colorSelect').value = 'vibrant';
    document.getElementById('effectSelect').value = 'smooth';
    
    showNotification('🔄 Makeover reset to default!');
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'rgba(0,0,0,0.8)';
    notification.style.color = 'white';
    notification.style.padding = '1rem 2rem';
    notification.style.borderRadius = '10px';
    notification.style.zIndex = '1000';
    notification.style.animation = 'slideIn 0.3s ease';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
    }
    
    @keyframes glow {
        from { box-shadow: 0 0 5px rgba(255,255,255,0.5); }
        to { box-shadow: 0 0 20px rgba(255,255,255,0.8); }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Add scroll animation
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardTop < windowHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
        }
    });
});

// Initialize cards with animation
document.querySelectorAll('.service-card').forEach(card => {
    card.style.transition = 'all 0.6s ease';
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

console.log('🎨 Website Makeover Studio - Ready to transform!');
