function hulag() {
    const topDiv = document.getElementById('topDiv');
    const rightDiv = document.getElementById('rightDiv');
    const kuru = document.getElementById('kuru');
    const button = document.getElementById('button');
    const audio =document.getElementById('sound');

    let transitionCounter = 0;

    // Function para sa transitionss
    function handleTransitionEnd() {
        transitionCounter++;
        if (transitionCounter === 2) {
            kuru.style.zIndex = kuru.style.zIndex === '1' ? '3' : '1';
            kuru.style.opacity = kuru.style.opacity === '0' ? '1' : '0';
            kuru.style.pointerEvents = kuru.style.pointerEvents === 'none' ? 'auto' : 'none';

            audio.play();

            button.classList.add('clicked');

        }
    }

    topDiv.style.left = topDiv.style.left === '0px' ? '-100%' : '0px';
    rightDiv.style.right = rightDiv.style.right === '0px' ? '-100%' : '0px';

    topDiv.addEventListener('transitionend', handleTransitionEnd);

    rightDiv.addEventListener('transitionend', handleTransitionEnd);

    
}