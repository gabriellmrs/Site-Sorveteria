
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}

//============ CARROSSEL EMBALAGEM =============================================

const width = window.innerWidth;

if(width <= 1124) {
    let currentIndex = 0;
        const totalImages = document.querySelectorAll('.slider-embalagem img').length;
        const visibleImages = 2; // Número de imagens visíveis
        const sliderEmb = document.querySelector('.slider-embalagem');

        function moveCarousel() {
            currentIndex++;
            if (currentIndex > totalImages - visibleImages) {
                currentIndex = 0; // Volta ao início quando ultrapassa o número de imagens
            }
            sliderEmb.style.transform = `translateX(${-currentIndex * 240}px)`; // 180px de imagem + 60px de margem
        }

        // Faz o carrossel passar automaticamente a cada 3 segundos
        setInterval(moveCarousel, 2000);
}
else {
    let currentIndex = 0;
        const totalImages = document.querySelectorAll('.slider-embalagem img').length;
        const visibleImages = 4; // Número de imagens visíveis
        const sliderEmb = document.querySelector('.slider-embalagem');

        function moveCarousel() {
            currentIndex++;
            if (currentIndex > totalImages - visibleImages) {
                currentIndex = 0; // Volta ao início quando ultrapassa o número de imagens
            }
            sliderEmb.style.transform = `translateX(${-currentIndex * 320}px)`; // 250px de imagem + 70px de margem
        }

        // Faz o carrossel passar automaticamente a cada 3 segundos
        setInterval(moveCarousel, 2000);
}