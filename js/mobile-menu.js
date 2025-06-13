// Custom Mobile Menu Toggle - Enhanced Version for Production
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Initializing custom mobile menu...');
  
  // Небольшая задержка чтобы убедиться что все элементы загружены
  setTimeout(function() {
    // Найдем контейнер логотипа (который теперь содержит псевдо-кнопку) и меню
    const logoContainer = document.querySelector('.elementor-element-2089214');
    const navMenu = document.querySelector('.elementor-nav-menu--main');
    
    if (!logoContainer || !navMenu) {
      console.warn('❌ Menu elements not found');
      return;
    }
    
    console.log('✅ Menu elements found, setting up...');
    
    // Переменная для отслеживания состояния меню
    let isMenuOpen = false;
    
    // Инициализируем меню как скрытое на мобильных
    if (window.innerWidth <= 768) {
      navMenu.style.display = 'none';
      isMenuOpen = false;
    }
    
    // Добавляем обработчик клика на псевдо-кнопку (контейнер логотипа)
    logoContainer.addEventListener('click', function(e) {
      // Проверяем, что клик был по псевдо-элементу (правая часть контейнера)
      const rect = logoContainer.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const containerWidth = rect.width;
      
      // Если клик по правой части контейнера (где псевдо-кнопка) и на мобильном
      if (clickX > containerWidth - 60 && window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('📱 Menu button clicked!');
        
        if (isMenuOpen) {
          // Закрываем меню
          console.log('🔽 Closing menu...');
          navMenu.style.display = 'none';
          navMenu.classList.remove('custom-menu-open');
          isMenuOpen = false;
          
          // Меняем иконку обратно на гамбургер
          logoContainer.style.setProperty('--menu-icon', 'url("data:image/svg+xml;utf8,<svg fill=\\"none\\" height=\\"17\\" viewBox=\\"0 0 19 17\\" width=\\"19\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path clip-rule=\\"evenodd\\" d=\\"M8.16602 15.1667C8.16602 14.4303 8.76297 13.8333 9.49935 13.8333H17.4993C18.2357 13.8333 18.8327 14.4303 18.8327 15.1667C18.8327 15.9031 18.2357 16.5 17.4993 16.5H9.49935C8.76297 16.5 8.16602 15.9031 8.16602 15.1667ZM0.166016 1.83333C0.166016 1.09695 0.762962 0.5 1.49935 0.5H17.4993C18.2357 0.5 18.8327 1.09695 18.8327 1.83333C18.8327 2.56971 18.2357 3.16667 17.4993 3.16667H1.49935C0.762962 3.16667 0.166016 2.56971 0.166016 1.83333ZM0.166016 8.5C0.166016 7.76363 0.762962 7.16667 1.49935 7.16667H17.4993C18.2357 7.16667 18.8327 7.76363 18.8327 8.5C18.8327 9.2364 18.2357 9.83333 17.4993 9.83333H1.49935C0.762962 9.83333 0.166016 9.2364 0.166016 8.5Z\\" fill=\\"black\\"></path></svg>")');
        } else {
          // Открываем меню
          console.log('🔼 Opening menu...');
          navMenu.style.display = 'block';
          navMenu.classList.add('custom-menu-open');
          isMenuOpen = true;
          
          // Меняем иконку на крестик
          logoContainer.style.setProperty('--menu-icon', 'url("data:image/svg+xml;utf8,<svg viewBox=\\"0 0 1000 1000\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path d=\\"M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z\\" fill=\\"black\\"></path></svg>")');
        }
      }
    });
    
    // Закрываем меню при клике на ссылки
    const menuLinks = navMenu.querySelectorAll('.elementor-item');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          console.log('🔗 Menu link clicked, closing menu...');
          navMenu.style.display = 'none';
          navMenu.classList.remove('custom-menu-open');
          isMenuOpen = false;
          
          // Возвращаем иконку гамбургера
          logoContainer.style.setProperty('--menu-icon', 'url("data:image/svg+xml;utf8,<svg fill=\\"none\\" height=\\"17\\" viewBox=\\"0 0 19 17\\" width=\\"19\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path clip-rule=\\"evenodd\\" d=\\"M8.16602 15.1667C8.16602 14.4303 8.76297 13.8333 9.49935 13.8333H17.4993C18.2357 13.8333 18.8327 14.4303 18.8327 15.1667C18.8327 15.9031 18.2357 16.5 17.4993 16.5H9.49935C8.76297 16.5 8.16602 15.9031 8.16602 15.1667ZM0.166016 1.83333C0.166016 1.09695 0.762962 0.5 1.49935 0.5H17.4993C18.2357 0.5 18.8327 1.09695 18.8327 1.83333C18.8327 2.56971 18.2357 3.16667 17.4993 3.16667H1.49935C0.762962 3.16667 0.166016 2.56971 0.166016 1.83333ZM0.166016 8.5C0.166016 7.76363 0.762962 7.16667 1.49935 7.16667H17.4993C18.2357 7.16667 18.8327 7.76363 18.8327 8.5C18.8327 9.2364 18.2357 9.83333 17.4993 9.83333H1.49935C0.762962 9.83333 0.166016 9.2364 0.166016 8.5Z\\" fill=\\"black\\"></path></svg>")');
        }
      });
    });
    
    // Управляем видимостью при изменении размера окна
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        // Десктоп - показываем меню всегда
        navMenu.style.display = '';
        navMenu.classList.remove('custom-menu-open');
        isMenuOpen = false;
      } else {
        // Мобильный - скрываем если не активно
        if (!isMenuOpen) {
          navMenu.style.display = 'none';
        }
      }
    });
    
    console.log('✅ Custom mobile menu with logo integration initialized successfully!');
  }, 500); // Задержка для инициализации после всех других скриптов
}); 