function addBlankAlerts () {
    const labelsNodeList = document.querySelectorAll('.select-label.cursor-default');
    const labelsArray = Array.from(labelsNodeList); // Converte NodeList em array
    const labelElement = labelsArray.find(label => label.innerText.trim() === 'Deeplink type');

    console.log(labelElement, 'Polipoli');

    labelElement.parentNode.style.border = '1px solid red';

    const alertEl = document.createElement('span');
    alertEl.innerText = ' Necessário escolher um valor';

    alertEl.style.color = 'red';
    alertEl.style.fontWeight = 'bold';

    labelElement.parentNode.appendChild(alertEl);


    labelElement.parentNode.setAttribute('id', 'idNewExtension');
}

function removeBlankAlerts (event) {
    console.log(event, 'Removendo alerta');
    
    const existingAlert = document.getElementById('idNewExtension');
    existingAlert.style.border = 'none';
}