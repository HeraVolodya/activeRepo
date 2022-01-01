const ACCORDIONS = document.querySelectorAll('.accordion-item');

for(item of ACCORDIONS){
    item.addEventListener('click', function() {
        if(this.classList.contains('active')){
            this.classList.remove('active');
        }
        else{
            for(el of ACCORDIONS){
                el.classList.remove('active');
            }
            this.classList.add('active')
        }
    })
}
