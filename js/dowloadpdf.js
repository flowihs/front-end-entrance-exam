document.getElementById('downloadPdf').addEventListener('click', function() {
  const opt = {
    margin: [10, 5],
    filename: 'document.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 3,
      logging: true,
      useCORS: true
    },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  const element = document.querySelector('.main'); 
  
  html2pdf().set(opt).from(element).save()
    .then(() => {
      console.log('PDF создан');
    })
    .catch(err => {
      console.error('Ошибка при создании PDF:', err);
    });
});