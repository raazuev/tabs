document.addEventListener('DOMContentLoaded', function () {

    // ТАБЫ
    const tabs = document.querySelectorAll('.tabs-left__item');
    const tabContents = document.querySelectorAll('.tab-content');
    const tabContainer = document.querySelector('.tabs-right__content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function () {
            const targetContent = tabContents[index];

            const scrollPosition = targetContent.offsetTop;

            tabContainer.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        });
    });

    // СЛАЙДЕР
    const slider = document.querySelector('.work-slider');
    const images = slider.querySelectorAll('img');
    let currentIndex = 0;
  
    function getSlideWidth() {
      return slider.querySelector('img').clientWidth;
    }
  
    function nextSlide() {
      const slideWidth = getSlideWidth();
      if (currentIndex < images.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0; 
      }
      slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
  
    images.forEach((img) => {
      img.addEventListener('click', nextSlide);
    });
  
    window.addEventListener('resize', function () {
      const slideWidth = getSlideWidth();
      slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    });

    // ФОРМА ОТПРАВКИ
    const form = document.getElementById('form_action');
    const submitButton = document.getElementById('submit_button');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault(); 

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData
        }).then(response => {
            if (response.ok) {
                alert('Форма успешно отправлена!');
                form.reset(); 
            } else {
                alert('Произошла ошибка при отправке формы.');
            }
        }).catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке формы.');
        });
    });
});