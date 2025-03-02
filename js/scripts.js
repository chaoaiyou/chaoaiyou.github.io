document.addEventListener('DOMContentLoaded', function() {
    const startDate = new Date('2025-01-25');
    const today = new Date();
    const timeDifference = today - startDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    document.getElementById('days-count').textContent = daysDifference;

    function updateProgressBar() {
        const now = new Date();
        const secondsInDay = 24 * 60 * 60;
        const secondsPassedToday = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        const progressPercentage = (secondsPassedToday / secondsInDay) * 100;
        
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');
        const fullText = "召召爱柚柚又多一天";
        const textLength = Math.floor((progressPercentage / 100) * fullText.length);
        
        progressBar.style.width = progressPercentage + '%';
        progressText.textContent = fullText.substring(0, textLength);
    }

    updateProgressBar();
    setInterval(updateProgressBar, 1000); // Update every second
});