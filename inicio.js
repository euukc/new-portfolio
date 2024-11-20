const whatsappButton = document.querySelector('.cta');

whatsappButton.addEventListener('click', function () {
    window.open(`https://api.whatsapp.com/send?phone=${11994929467}&text=${'Olá, gostaria de informações!'}`, '_blank');
});