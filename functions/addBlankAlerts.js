function addBlankAlerts() {
    const labelsNodeList = document.querySelectorAll('.cursor-default');
    const labelsArray = Array.from(labelsNodeList); // Converte NodeList em array
    const labelElement = labelsArray.find(label => label.innerText.trim() === 'Deeplink type');
    const labelElement2 = labelsArray.find(label => label.innerText.trim() === 'Deeplink query');
    console.log(labelElement2, 'Label encontrado');

    labelElement.parentNode.style.border = '1px solid red';
    labelElement2.parentNode.style.border = '1px solid red';

    const alertEl = document.createElement('span');
    alertEl.innerText = ' Necessário escolher um valor';
    alertEl.setAttribute('id', 'idAlertExtension');
    alertEl.style.color = 'red';
    alertEl.style.fontWeight = 'bold';

    const alertEl2 = document.createElement('span');
    alertEl2.innerText = ' Necessário escolher um valor';
    alertEl2.setAttribute('id', 'idAlertExtension2');
    alertEl2.style.color = 'red';
    alertEl2.style.fontWeight = 'bold';


    labelElement.parentNode.setAttribute('id', 'idNewExtension');
    labelElement2.parentNode.setAttribute('id', 'idNewExtension2');

    labelElement.parentNode.appendChild(alertEl);
    labelElement2.parentNode.appendChild(alertEl2);

    const inputEl = labelElement.parentNode.querySelector('input');
    inputEl.addEventListener('blur', removeBlankAlerts);
    const inputEl2 = labelElement2.parentNode.querySelector('input');
    inputEl2.addEventListener('blur', removeBlankAlerts2);

    if (inputEl2.value.trim() === '') {
        const saveButton = document.getElementsByClassName('btn btn-save')[0];
        saveButton.style.pointerEvents = 'none';
    }
}

function removeBlankAlerts(event) {
    console.log(event, 'Removendo alerta');

    const existingAlert = document.getElementById('idNewExtension');

    existingAlert.style.border = 'none';

    const alertSpan = existingAlert.querySelector('#idAlertExtension');
    if (alertSpan) {
        existingAlert.removeChild(alertSpan);
    }
}

function removeBlankAlerts2(event) {

    const saveButton = document.getElementsByClassName('btn btn-save')[0];

    const existingAlert2 = document.getElementById('idNewExtension2');

    if (event.target.value.trim() !== '') {

        saveButton.style.pointerEvents = 'auto';

        existingAlert2.style.border = 'none';

        const alertSpan2 = existingAlert2.querySelector('#idAlertExtension2');
        if (alertSpan2) {
            existingAlert2.removeChild(alertSpan2);
        }
    } else {

        saveButton.style.pointerEvents = 'none';

        existingAlert2.style.border = '1px solid red';

        const alertEl2 = document.createElement('span');
        alertEl2.innerText = ' Necessário escolher um valor';
        alertEl2.setAttribute('id', 'idAlertExtension2');
        alertEl2.style.color = 'red';
        alertEl2.style.fontWeight = 'bold';

        existingAlert2.appendChild(alertEl2);
    }

}
