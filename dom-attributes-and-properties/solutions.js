// 1. Проверить наличие атрибута у элемента
{
  const hasAttribute = document
    .getElementById("example")
    .hasAttribute("data-active");
}

// 2. Получить значение атрибута элемента
{
  const imageSrc = document.getElementById("image").getAttribute("src");
}

// 3. Установить значение атрибута элемента
{
  document.getElementById("link").setAttribute("href", "https://example.com");
}

// 4. Удалить атрибут у элемента
{
  document.getElementById("button").removeAttribute("disabled");
}

// 5. Получить все атрибуты элемента
{
  const attributes = document.querySelector(".item").attributes;
}

// 6. Проверить наличие атрибута data-* у элемента
{
  const hasDataAttribute = document
    .querySelector(".product")
    .hasAttribute("data-price");
}

// 7. Получить значение data-* атрибута элемента
{
  const dataId = document.querySelector(".product").dataset.id;
}

// 8. Установить значение data-* атрибута элемента
{
  document.getElementById("item").dataset.index = "5";
}

// 9. Удалить data-* атрибут у элемента
{
  delete document.querySelector(".product").dataset.info;
}

// 10. Получить все data-* атрибуты элемента
{
  const dataAttributes = document.querySelector(".product").dataset;
}

// 11. Получить имя всех атрибутов элемента
{
  const attributeNames = Array.from(
    document.getElementById("example").attributes
  ).map((attr) => attr.name);
}

// 12. Получить значение всех атрибутов элемента
{
  const attributeValues = Array.from(
    document.getElementById("example").attributes
  ).map((attr) => attr.value);
}

// 13. Проверить наличие атрибута class у элемента
{
  const hasClassAttribute = document
    .getElementById("header")
    .classList.contains("title");
}

// 14. Получить значение атрибута class у элемента
{
  const className = document.getElementById("title").className;
}

// 15. Установить значение атрибута class у элемента
{
  document.getElementById("container").className = "newClass";
}

// 16. Удалить атрибут class у элемента
{
  document.getElementById("box").removeAttribute("class");
}

// 17. Получить все атрибуты class у элемента
{
  const classList = Array.from(document.querySelector(".item").classList);
}

// 18. Проверить наличие атрибута id у элемента
{
  const hasIdAttribute = document.querySelector(".product").hasAttribute("id");
}

// 19. Получить значение атрибута id у элемента
{
  const idValue = document.querySelector(".product").id;
}

// 20. Установить значение атрибута id у элемента
{
  document.querySelector(".box").id = "newId";
}
