document.addEventListener('DOMContentLoaded', function() {
    const mainButton = document.getElementById('main-button');
    mainButton.addEventListener('click', function() {
        window.location.href = 'https://mvarr.github.io';
    });
    
    const subButtonsContainer = document.getElementById('sub-buttons');

    const subButtonsText = [
        "Prompt Engineering",
        "html-css",
        "linux tutorial",
        "git tutorial",
        "python teams",
        "missions",
        "database",
        "cybersec",
        "mini courses"
    ];

    const subButtonsInfo = [
        { text: "Prompt Engineering", url: "https://roadmap.sh/r/web-komitesi-prompt-engineering" },
        { text: "html-css", url: "https://example.com/html-css" },
        { text: "linux tutorial", url: "https://example.com/linux-tutorial" },
        { text: "git tutorial", url: "https://example.com/git-tutorial" },
        { text: "python teams", url: "https://example.com/python-teams" },
        { text: "missions", url: "https://example.com/missions" },
        { text: "database", url: "https://example.com/database" },
        { text: "cybersec", url: "https://example.com/cybersec" },
        { text: "mini courses", url: "https://example.com/mini-courses" }
    ];

    function createSubButtons() {
        subButtonsContainer.innerHTML = ''; // Clear existing buttons
        const centerX = mainButton.offsetLeft + mainButton.offsetWidth / 2;
        const centerY = mainButton.offsetTop + mainButton.offsetHeight / 2;
        const radius = 200;

        subButtonsText.forEach((text, index) => {
            const angle = (index / subButtonsText.length) * 2 * Math.PI;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            const subButton = document.createElement('button');
            subButton.className = 'sub-button';
            subButton.style.position = 'absolute';
            subButton.textContent = text;
            subButton.style.left = `${x}px`;
            subButton.style.top = `${y}px`;

            const line = document.createElement('div');
            line.className = 'line';
            const length = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            line.style.width = `${length}px`;
            line.style.transform = `rotate(${angle}rad)`;
            
            const buttonInfo = subButtonsInfo.find(info => info.text === text);
            subButton.addEventListener('click', () => {
                window.location.href = buttonInfo.url;
            });

            subButtonsContainer.appendChild(subButton);
            subButtonsContainer.appendChild(line);
        });
    }
    

    createSubButtons();
    window.addEventListener('resize', createSubButtons);
});