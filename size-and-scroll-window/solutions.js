// 1. Получить ширину и высоту видимой части документа.
{
  const visibleWidth = document.documentElement.clientWidth;
  const visibleHeight = document.documentElement.clientHeight;
}

// 2. Получить ширину и высоту всего документа со всей прокручиваемой областью страницы.
{
  const fullHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  const fullWidth = Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.body.clientWidth,
    document.documentElement.clientWidth
  );
}

// 3. Получить текущую прокрутку окна по вертикали.
{
  const verticalScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;
}

// 4. Получить текущую прокрутку окна по горизонтали.
{
  const horizontalScrollPosition =
    window.pageXOffset || document.documentElement.scrollLeft;
}

// 5. Изменить текущую прокрутку окна на указанные абсолютные координаты.
{
  window.scrollTo(0, 0); // Прокрутить в самый верх документа
}

// 6. Изменить текущую прокрутку окна на указанное количество пикселей.
{
  window.scrollBy(0, 500); // Прокрутить на 500 пикселей вниз
}

// 7. Прокрутить страницу так, чтобы определенный элемент стал видимым в верхней части окна.
{
  document.getElementById("elementId").scrollIntoView(true);
}

// 8. Прокрутить страницу так, чтобы определенный элемент стал видимым в нижней части окна.
{
  document.getElementById("elementId").scrollIntoView(false);
}

// 9. Проверить, находится ли элемент в видимой части окна.
{
  const elementVisible =
    document.getElementById("elementId").getBoundingClientRect().top <
    window.innerHeight;
}

// 10. Прокрутить страницу на указанное количество пикселей относительно текущего положения.
{
  window.scrollBy(0, 200);
}

// 11. Прокрутить страницу к верхней части.
{
  window.scrollTo(0, 0);
}

// 12. Прокрутить страницу к нижней части.
{
  window.scrollTo(0, document.documentElement.scrollHeight);
}

// 13. Получить текущую прокрутку окна по вертикали и по горизонтали одновременно.
{
  const scrollPosition = {
    vertical: window.pageYOffset || document.documentElement.scrollTop,
    horizontal: window.pageXOffset || document.documentElement.scrollLeft,
  };
}

// 14. Получить высоту видимой части документа.
{
  const visibleHeight = document.documentElement.clientHeight;
}

// 15. Получить ширину видимой части документа.
{
  const visibleWidth = document.documentElement.clientWidth;
}

// 16. Получить высоту всего документа со всей прокручиваемой областью страницы.
{
  const fullHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  );
}

// 17. Получить ширину всего документа со всей прокручиваемой областью страницы.
{
  const fullWidth = Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth
  );
}

// 18. Изменить текущую прокрутку окна на указанные абсолютные координаты по горизонтали.
{
  window.scrollTo(500, 0); // Прокрутить вправо на 500 пикселей
}

// 19. Изменить текущую прокрутку окна на указанные абсолютные координаты по вертикали.
{
  window.scrollTo(0, 500); // Прокрутить вниз на 500 пикселей
}

// 20. Прокрутить страницу так, чтобы определенный элемент стал видимым.
{
  document.getElementById("elementId").scrollIntoView();
}
