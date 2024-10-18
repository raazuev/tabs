document.addEventListener('DOMContentLoaded', function () {

    // ТАБЫ
    const tabs = document.querySelectorAll('.tabs-left__item');
    const tabContents = document.querySelectorAll('.tab-content');
    const tabContainer = document.querySelector('.tabs-right__content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function () {
            const targetContent = tabContents[index];

            // Рассчитываем позицию контента относительно родительского контейнера
            const scrollPosition = targetContent.offsetTop;

            // Прокручиваем контейнер к нужной позиции
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
  
    // Функция для получения ширины одного слайда
    function getSlideWidth() {
      return slider.querySelector('img').clientWidth;
    }
  
    // Функция для пролистывания вперед
    function nextSlide() {
      const slideWidth = getSlideWidth();
      if (currentIndex < images.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0; // Если достигли конца, начинаем с начала
      }
      slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
  
    // Вешаем обработчик на каждое изображение
    images.forEach((img) => {
      img.addEventListener('click', nextSlide);
    });
  
    // Слушаем событие изменения размера окна, чтобы обновлять ширину слайда
    window.addEventListener('resize', function () {
      const slideWidth = getSlideWidth();
      slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    });

    // ФОРМА ОТПРАВКИ
    const form = document.getElementById('form_action');
    const submitButton = document.getElementById('submit_button');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // предотвращаем стандартное поведение отправки формы

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData
        }).then(response => {
            if (response.ok) {
                alert('Форма успешно отправлена!');
                form.reset(); // очищаем форму
            } else {
                alert('Произошла ошибка при отправке формы.');
            }
        }).catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке формы.');
        });
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     const tabs = document.querySelectorAll('.tabs-left__item');
//     const tabContents = document.querySelectorAll('.tab-content');
//     const form = document.getElementById('form_action');
//     const submitButton = document.getElementById('submit_button');

//     // Функция для переключения между табами
//     tabs.forEach((tab, index) => {
//         tab.addEventListener('click', function () {
//             const target = tab.getAttribute('data-tab');

//             // Убираем активные классы со всех табов
//             tabContents.forEach(content => {
//                 content.classList.remove('active');
//             });

//             const targetContent = tabContents[index];

//             // Плавно скроллим до соответствующего элемента внутри контейнера
//             targetContent.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start',
//             });

//             // Активируем выбранный таб
//             document.getElementById(target).classList.add('active');
//         });
//     });

//     // Обработчик отправки формы
//     form.addEventListener('submit', function (e) {
//         e.preventDefault(); // предотвращаем стандартное поведение отправки формы

//         const formData = new FormData(form);

//         fetch(form.action, {
//             method: 'POST',
//             body: formData
//         }).then(response => {
//             if (response.ok) {
//                 alert('Форма успешно отправлена!');
//                 form.reset(); // очищаем форму
//             } else {
//                 alert('Произошла ошибка при отправке формы.');
//             }
//         }).catch(error => {
//             console.error('Ошибка:', error);
//             alert('Произошла ошибка при отправке формы.');
//         });
//     });
// });