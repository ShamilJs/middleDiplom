'use strict';

const windowScroll = () => {
    const totop = document.getElementById('totop'),
        clubs = document.querySelector('#clubs > .wrapper');
        
    window.addEventListener('scroll', () => {
        let topElem = clubs.getBoundingClientRect().top;
        if (topElem <= 100) {
            totop.style.display = 'block';
        } else {
            totop.style.display = 'none';
        }
    });
};

export default windowScroll;