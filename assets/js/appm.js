function showAlert(message) {
    document.getElementById('customAlert').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.querySelector('.custom-alert p').textContent = message;
}

function closeAlert() {
    document.getElementById('customAlert').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const btn = document.getElementById('button');
    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_ifmh7xq';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            showAlert('Sent!');
            this.reset();
            wordCount.textContent = '0 / 200 palabras';
        }, (err) => {
            btn.value = 'Send Email';
            showAlert('Error: ' + JSON.stringify(err));
        });
});

const textarea = document.getElementById('message');
const wordCount = document.getElementById('word_count');

textarea.addEventListener('input', () => {
    const words = textarea.value.match(/\b[-?(\w+)?]+\b/gi);
    const wordCountNum = words ? words.length : 0;
    wordCount.textContent = `${wordCountNum} / 200 palabras`;

    if (wordCountNum > 200) {
        textarea.value = words.slice(0, 200).join(' ');
    }
});

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const btn = document.getElementById('button');
    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_ifmh7xq';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            // alert('Sent!');
            this.reset();  // Limpia el formulario después de enviarlo
            wordCount.textContent = '0 / 200 palabras';  // Resetea el conteo de palabras
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
});