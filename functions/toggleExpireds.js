function showExpired() {
  initializeCmsHelperElements();
  cmsHelpertargetImages.forEach((img) => {
    const titleText = img.getAttribute('title').trim();
    if (expiredSpanTexts.includes(titleText)) {
      img.parentNode.style.display = 'block'; // Garante que o widget em si esteja visível
    }
  });
  cmsHelperExpiredDivs.forEach(div => {
    div.style.display = 'block'; // Garante que a overlay "Expirado" esteja visível
  });
  // console.log('CMS Helper: Expirados mostrados.');
}

function hideExpired() {
  initializeCmsHelperElements();
  cmsHelpertargetImages.forEach((img) => {
    const titleText = img.getAttribute('title').trim();
    if (expiredSpanTexts.includes(titleText)) {
      img.parentNode.style.display = 'none'; // Oculta o widget
    }
  });
  cmsHelperExpiredDivs.forEach(div => {
    div.style.display = 'none'; // Oculta a overlay "Expirado"
  });
  // console.log('CMS Helper: Expirados ocultados.');
}