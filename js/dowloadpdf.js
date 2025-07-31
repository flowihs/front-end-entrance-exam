document.getElementById('downloadPdf').addEventListener('click', function() {
  const opt = {
    margin: [10, 5],
    filename: 'document.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 3,
      logging: true,
      useCORS: true,
      width: 1110, 
      windowWidth: 1110, 
      scrollX: 0,
      scrollY: 0
    },
    jsPDF: { 
      unit: 'mm', 
      format: [297, 210], 
      orientation: 'landscape' 
    }
  };

  const element = document.querySelector('.main');
  
  const originalStyles = {
    overflow: element.style.overflow,
    width: element.style.width
  };
  
  element.style.overflow = 'hidden';
  element.style.width = '1110px';
  
  html2pdf().set(opt).from(element).save()
    .then(() => {
      console.log('PDF создан');
      element.style.overflow = originalStyles.overflow;
      element.style.width = originalStyles.width;
    })
    .catch(err => {
      console.error('Ошибка при создании PDF:', err);
      element.style.overflow = originalStyles.overflow;
      element.style.width = originalStyles.width;
    });
});