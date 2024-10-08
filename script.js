const secBoxes = document.querySelectorAll('.dropdown-jurusan');
        // console.log(secBoxes);
        
secBoxes.forEach((box, index) => {
    
    
    box.firstChild.nextSibling.addEventListener('click', function() {

        const kotak = this.firstChild.nextSibling;        
        const arrow = this.firstChild.nextSibling.firstChild.nextSibling;
        const hiddenElement = this.parentElement.querySelector('.detail-jurusan');
        const dropdown = this.parentElement
        hiddenElement.classList.toggle('visible');
        dropdown.classList.toggle('bawahan')
        
        
        if(arrow.textContent.trim() === 'keyboard_arrow_right'){
            arrow.innerHTML = "keyboard_arrow_down"
        }
        else if(arrow.textContent.trim() === 'keyboard_arrow_down'){
            arrow.innerHTML = "keyboard_arrow_right"
            
        }

        if(kotak.style.backgroundColor == ""){
            kotak.style.backgroundColor = "#4C4C4C"
            
        } else if(kotak.style.backgroundColor == "rgb(76, 76, 76)"){
            kotak.style.backgroundColor = "#D9D9D9"
            
        }   else if(kotak.style.backgroundColor == "rgb(217, 217, 217)"){
            kotak.style.backgroundColor = "#4C4C4C"
            
        }
        // console.log();
        
        // console.log(arrow.textContent.trim() === 'keyboard_arrow_right');

        
        const allHiddenElements = document.querySelectorAll('.detail-jurusan');

        allHiddenElements.forEach((el, i) => {
            
            if (i !== index) {
                el.classList.remove('visible');
                el.parentElement.classList.remove('bawahan')
                
                const kotakLagi = el.previousElementSibling.firstChild.nextSibling
                const arrowLagi = kotakLagi.firstChild.nextSibling;
                if(kotakLagi.style.backgroundColor == "rgb(76, 76, 76)"){
                    kotakLagi.style.backgroundColor = "#D9D9D9"
                }
                // console.log(arrowLagi.textContent.trim());
                if(kotakLagi.firstChild.nextSibling.textContent.trim() === 'keyboard_arrow_down'){
                    kotakLagi.firstChild.nextSibling.innerHTML = "keyboard_arrow_right"
                    
                }
                
                
                
            }
        });
    });
});