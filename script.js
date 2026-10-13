function openPage(pageId) {
    document.getElementById('home-page').classList.add('hidden');
    
    const pages = document.querySelectorAll('.container');
    pages.forEach(page => {
        if (page.id !== 'home-page') {
            page.classList.add('hidden');
        }
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
    }
}

function goHome() {
    const pages = document.querySelectorAll('.container');
    pages.forEach(page => {
        page.classList.add('hidden');
    });
    
    document.getElementById('home-page').classList.remove('hidden');
}

function addItem(type) {
    const input = document.getElementById(type + '-input');
    const list = document.getElementById(type + '-list');
    const emptyMsg = document.getElementById(type + '-empty');

    if (input && input.value.trim() !== '') {
        const li = document.createElement('li');
        li.style.background = 'rgba(24, 12, 12, 0.7)';
        li.style.margin = '8px 0';
        li.style.padding = '10px';
        li.style.borderRadius = '8px';
        li.style.border = '1px solid rgba(255, 42, 42, 0.2)';
        li.style.color = '#f0e6e6';
        li.textContent = input.value;
        
        list.appendChild(li);
        input.value = '';

        if (emptyMsg) {
            emptyMsg.style.display = 'none';
        }
    }
}
document.addEventListener('click', function() {
    const audio = document.getElementById('bg-audio');
    if (audio && audio.paused) {
        audio.play().catch(error => console.log("Autoplay blocked"));
    }
}, { once: true });