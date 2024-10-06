const boxes = document.querySelectorAll('.kotak-jurusan');
        
boxes.forEach((box, index) => {
    box.addEventListener('click', function() {
        const hiddenElement = this.parentElement.querySelector('.detail-jurusan');
        
        hiddenElement.classList.toggle('visible');
        
      
        const allHiddenElements = document.querySelectorAll('.detail-jurusan');
        allHiddenElements.forEach((el, i) => {
            if (i !== index) {
                el.classList.remove('visible');
            }
        });
    });
});