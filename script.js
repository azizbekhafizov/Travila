const toggle = document.getElementById('dark-mode-toggle');
        const body = document.body;
        const header = document.getElementById('header');
        const icons = document.querySelectorAll('.icon');
        const highlightText = document.getElementById('highlight-text');
        let menu_icon = document.querySelector('.menu_icon')
        let sidebar = document.querySelector('.sidebar')
        let sidebar_icon = document.querySelector('.sidebar_icon')

        toggle.addEventListener('click', () => {
            body.classList.toggle('dark');
            header.classList.toggle('dark');
            icons.forEach(icon => icon.classList.toggle('dark'));
            highlightText.classList.toggle('dark');
            toggle.textContent = body.classList.contains('dark') ? '🌙' : '☀';
        });

        menu_icon.addEventListener('click', () => {
            sidebar.classList.add('open');
        })
        
        sidebar_icon.addEventListener('click', () => {
            sidebar.classList.remove('open')
        });