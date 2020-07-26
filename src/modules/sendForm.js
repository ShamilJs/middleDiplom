'use strict';

const sendForm = () => {
    try {
        const modalMessage = document.getElementById('thanks'),
            formContent = modalMessage.querySelector('.form-content');
        let body = {};

        const postData = body => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        };
       
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', event => {
                event.preventDefault();
                const arrCkeck = form.querySelector('input[type="checkbox"]');
                if (arrCkeck && !arrCkeck.checked) {
                    form.querySelector('.personal-data > label').style.border = '2px solid red';
                    arrCkeck.addEventListener('change', () => {
                        if (arrCkeck.checked) {
                            form.querySelector('.personal-data > label').style.border = '';
                        }
                    });
                    return;
                } else {
                    const formData = new FormData(form);
                    formData.forEach((item, index) => {
                        body[index] = item;
                    });

                    postData(body)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error('Что-то пошло не так...');
                        }
                        modalMessage.style.display = 'block';
                    })
                    .catch(error => {
                        formContent.innerHTML = `
                            <h4>Ошибка отправки!</h4>
                            <p>${error} 
                            <br><br>
                            Пожалуйста, попробуйте позже...</p>
                            <br>
                        `;
                        modalMessage.style.display = 'block';
                    })
                    .finally(() => {
                        form.querySelectorAll('input').forEach(elem => {
                            if (elem.getAttribute('type') !== 'radio') {
                                elem.value = '';
                            }
                            elem.checked = '';
                        });
                        body = {};
                    });
                }
            });
        });
        
    } catch (error) {
        console.warn('sendForm.js', error);
    }
 };

export default sendForm;