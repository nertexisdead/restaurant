/* Скрипт для мобильных устройств (ширина экрана до 768px) */
if (window.matchMedia("(max-width: 768px)").matches) {
    console.log(123);
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
    });
}
