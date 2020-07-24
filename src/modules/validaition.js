'use strict';

const validaition = () => {
    document.body.addEventListener('input', event => {
        const target = event.target;
        if (target.matches('input[name="name"]')) {
            target.value = target.value.replace(/[^а-я ]/gi, '');
        }
    });
};


export default validaition;