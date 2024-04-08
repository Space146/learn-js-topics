// 1. Изменить класс элемента с помощью className.
{
  document.getElementById("example").className = "newClass";
}

// 2. Добавить класс элементу с помощью classList.
{
  document.getElementById("button").classList.add("active");
}

// 3. Удалить класс элемента с помощью classList.
{
  document.querySelector(".menu").classList.remove("hidden");
}

// 4. Переключить класс элемента с помощью classList.
{
  document.querySelector(".item").classList.toggle("active");
}

// 5. Проверить наличие класса у элемента с помощью classList.
{
  const headerHasStickyClass = document
    .getElementById("header")
    .classList.contains("sticky");
  console.log(headerHasStickyClass);
}

// 6. Изменить стиль элемента с помощью свойства style.
{
  document.querySelector(".title").style.color = "blue";
}

// 7. Изменить стиль элемента с помощью style.cssText.
{
  document.getElementById("box").style.cssText =
    "color: red; background-color: yellow;";
}

// 8. Применить !important к стилю с помощью style.
{
  document
    .querySelector(".important")
    .style.setProperty("color", "green", "important");
}

// 9. Прочитать стиль элемента с помощью свойства style.
{
  const textColor = document.getElementById("text").style.color;
  console.log(textColor);
}

// 10. Прочитать стиль элемента с помощью getComputedStyle.
{
  const contentFontSize = window.getComputedStyle(
    document.querySelector(".content")
  ).fontSize;
  console.log(contentFontSize);
}

// 11. Прочитать стиль элемента с псевдоэлементом.
{
  const blockBeforeBackgroundColor = window.getComputedStyle(
    document.querySelector(".block"),
    "::before"
  ).backgroundColor;
  console.log(blockBeforeBackgroundColor);
}

// 12. Изменить стиль элемента с помощью метода getComputedStyle().
{
  document.querySelectorAll(".block").forEach((element) => {
    element.style.color = "red";
    element.style.backgroundColor = "blue";
  });
}

// 13. Изменить стиль элемента с помощью добавления класса.
{
  document.querySelector(".box").classList.add("highlight");
}

// 14. Удалить все классы элемента.
{
  document.getElementById("container").className = "";
}

// 15. Добавить класс, если его нет, и удалить, если есть.
{
  document.getElementById("toggle").classList.toggle("active");
}

// 16. Проверить наличие нескольких классов у элемента.
{
  const itemHasRedAndBoldClasses =
    document.querySelector(".item").classList.contains("red") &&
    document.querySelector(".item").classList.contains("bold");
  console.log(itemHasRedAndBoldClasses);
}

// 17. Получить список классов элемента.
{
  const listClasses = document.getElementById("list").classList;
  console.log(Array.from(listClasses));
}

// 18. Переключить классы у нескольких элементов.
{
  document.querySelectorAll(".section").forEach((element) => {
    element.classList.toggle("hidden");
  });
}

// 19. Изменить все стили элемента с помощью style.cssText.
{
  document.querySelectorAll(".card").forEach((element) => {
    element.style.cssText = "color: blue; font-size: 18px;";
  });
}

// 20. Применить стиль ко всем элементам с определенным атрибутом.
{
  document.querySelectorAll("[data-highlight]").forEach((element) => {
    element.style.backgroundColor = "yellow";
  });
}
