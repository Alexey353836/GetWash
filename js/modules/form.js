function form () {
    
// form-json
const forms = document.querySelectorAll('form');

const message = {
    loading: '',
    success: 'Спасибо, мы скоро с вами свяжемся',
    failure: 'Что-то пошло не так...'
};

forms.forEach(item => {
    postData(item);
});

function postData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const statusMassage = document.createElement('img');
        statusMassage.src = message.loading;
        statusMassage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
        
        form.insertAdjacentElement('afterend', statusMassage);

        const formData = new FormData(form);

        const object = {};
        formData.forEach(function(value, key) {
            object[key] = value;
        });

        fetch("server.php", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(object)
        })
        .then(data => data.text())
        .then(data => {
            console.log(data);
            showThanksModal(message.success);
            statusMassage.remove();
        })
        .catch(() => {
            showThanksModal(message.failure);
        })
        .finally(() => {
            form.reset();
        });
    });
}

function showThanksModal (message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    closeModal();
    popupCloseForm();
  
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    thanksModal.remove();
                     prevModalDialog.classList.remove('hide');
                }, 800)
                thanksModal.classList.remove('show');
                closeModal();
            }, 2000);
            thanksModal.classList.add('show');
        }, 100);
        openModal();
       
        prevModalDialog.classList.add('hide');
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
    }, 800);
}
}
module.exports = form;