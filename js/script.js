/* Скрипт для мобильных устройств (ширина экрана до 768px) */
if (window.matchMedia("(max-width: 768px)").matches) {
    document.addEventListener('DOMContentLoaded', function () {
        // Получаем ссылки на элементы
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const mainNav = document.getElementById('main-nav');
    
        // Обработчик клика на кнопку меню
        mobileMenuToggle.addEventListener('click', function () {
            // Переключаем видимость меню и добавляем/удаляем класс для анимации
            if (mainNav.style.display === 'block') {
                mainNav.style.display = 'none';
                mainNav.classList.remove('slide-in');
            } else {
                mainNav.style.display = 'block';
                mainNav.classList.add('slide-in');
            }
        });
    
        // Обработчик клика на весь документ
        document.addEventListener('click', function (event) {
            // Проверяем, был ли клик вне области навигации и кнопки меню
            if (event.target !== mobileMenuToggle && event.target !== mainNav) {
                // Скрываем навигацию
                mainNav.style.display = 'none';
                mainNav.classList.remove('slide-in');
            }
        });
    });
    
}
