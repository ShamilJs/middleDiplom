'use strict';

const smoothDocument = () => {
    try {
        
        const anchors = document.querySelectorAll('.scroll > a');
        anchors.forEach(item => {
            item.addEventListener('click', event => {
                event.preventDefault();
                const blockID = item.getAttribute('href').substr(1);
                if (blockID !== 'close') {
                    document.getElementById(blockID).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

    } catch (error) {
        console.warn('smoothDocument.js', error);
    }
};

export default smoothDocument;