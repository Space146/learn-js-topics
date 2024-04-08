// 1. Добавить обработчик клика через атрибут HTML.
{
  // <button id="btn" onclick="alert('Button clicked!')">Click me</button>
}

// 2. Добавить обработчик клика через DOM-свойство.
{
  const button = document.getElementById("btn");
  button.onclick = function () {
    alert("Button clicked!");
  };
}

// 3. Добавить обработчик клика через метод addEventListener.
{
  const button = document.getElementById("btn");
  button.addEventListener("click", function () {
    alert("Button clicked!");
  });
}

// 4. Удалить обработчик клика через атрибут HTML.
{
  // <button id="btn" onclick="alert('Button clicked!')">Click me</button>
  document.getElementById("btn").onclick = null;
}

// 5. Удалить обработчик клика через DOM-свойство.
{
  const button = document.getElementById("btn");
  button.onclick = null;
}

// 6. Удалить обработчик клика через метод removeEventListener.
{
  const button = document.getElementById("btn");
  const handler = function () {
    alert("Button clicked!");
  };
  button.addEventListener("click", handler);
  button.removeEventListener("click", handler);
}

// 7. Добавить обработчик клика с параметром через атрибут HTML.
{
  // <button id="btn" onclick="alert('Button clicked with parameter: ' + event.target.id)">Click me</button>
}

// 8. Добавить обработчик клика с параметром через DOM-свойство.
{
  const button = document.getElementById("btn");
  button.onclick = function () {
    alert("Button clicked with parameter: " + this.id);
  };
}

// 9. Добавить обработчик клика с параметром через метод addEventListener.
{
  const button = document.getElementById("btn");
  button.addEventListener("click", function (event) {
    alert("Button clicked with parameter: " + event.target.id);
  });
}

// 10. Отменить действие по умолчанию для события submit через атрибут HTML.
{
  // <form id="myForm" onsubmit="event.preventDefault(); alert('Form submitted!')">Submit form</form>
}

// 11. Отменить действие по умолчанию для события submit через DOM-свойство.
{
  const form = document.getElementById("myForm");
  form.onsubmit = function (event) {
    event.preventDefault();
    alert("Form submitted!");
  };
}

// 12. Отменить действие по умолчанию для события submit через метод addEventListener.
{
  const form = document.getElementById("myForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted!");
  });
}

// 13. Проверить, есть ли у элемента атрибут.
{
  const hasAttribute = document
    .getElementById("myElement")
    .hasAttribute("data-custom");
}

// 14. Получить значение атрибута у элемента.
{
  const attributeValue = document
    .getElementById("myElement")
    .getAttribute("data-custom");
}

// 15. Установить значение атрибута у элемента.
{
  document.getElementById("myElement").setAttribute("data-custom", "new value");
}

// 16. Удалить атрибут у элемента.
{
  document.getElementById("myElement").removeAttribute("data-custom");
}

// 17. Получить коллекцию всех атрибутов у элемента.
{
  const attributes = document.getElementById("myElement").attributes;
}

// 18. Добавить обработчик клика на все элементы с определенным классом.
{
  const elements = document.querySelectorAll(".myClass");
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      alert("Element clicked!");
    });
  });
}

// 19. Добавить обработчик клика на все элементы с определенным тегом.
{
  const elements = document.querySelectorAll("button");
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      alert("Button clicked!");
    });
  });
}

// 20. Добавить обработчик клика на все элементы с определенным атрибутом.
{
  const elements = document.querySelectorAll("[data-action]");
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      alert("Element clicked!");
    });
  });
}

// 21. Добавить обработчик клика на все элементы с определенным селектором.
{
  const elements = document.querySelectorAll(".mySelector");
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      alert("Element clicked!");
    });
  });
}

// 22. Добавить обработчик клика на все элементы с определенным идентификатором.
{
  const elements = document.querySelectorAll("#myId");
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      alert("Element clicked!");
    });
  });
}

// 23. Добавить обработчик клика на все элементы внутри определенного родительского элемента.
{
  const parent = document.getElementById("parent");
  const elements = parent.querySelectorAll("*");
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      alert("Element clicked!");
    });
  });
}

// 24. Добавить обработчик клика на все элементы, кроме определенного.
{
  const elements = document.querySelectorAll(":not(.exclude)");
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      alert("Element clicked!");
    });
  });
}

// 25. Добавить обработчик клика на все элементы с определенным классом и тегом.
{
  const elements = document.querySelectorAll("button.myClass");
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      alert("Button clicked!");
    });
  });
}

// 26. Добавить обработчик клика на все элементы с определенным классом и атрибутом.
{
  const elements = document.querySelectorAll(".myClass[data-action]");
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      alert("Element clicked!");
    });
  });
}

// 27. Добавить обработчик клика на все элементы с определенным тегом и атрибутом.
{
  const elements = document.querySelectorAll("button[data-action]");
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      alert("Button clicked!");
    });
  });
}

// 28. Добавить обработчик клика на все элементы с определенным тегом и идентификатором.
{
  const elements = document.querySelectorAll("button#myId");
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      alert("Button clicked!");
    });
  });
}

// 29. Добавить обработчик клика на все элементы с определенным идентификатором и атрибутом.
{
  const elements = document.querySelectorAll("#myId[data-action]");
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      alert("Element clicked!");
    });
  });
}

// 30. Добавить обработчик клика на все элементы с определенным классом, тегом и атрибутом.
{
  const elements = document.querySelectorAll("button.myClass[data-action]");
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      alert("Button clicked!");
    });
  });
}

// 31. Добавить обработчик клика на все элементы с определенным классом и содержащим определенный текст.
{
  const elements = document.querySelectorAll(".myClass");
  elements.forEach(function (element) {
    if (element.textContent.includes("specificText")) {
      element.addEventListener("click", function () {
        alert("Element clicked!");
      });
    }
  });
}

// 32. Добавить обработчик клика на все элементы с определенным именем и значением атрибута.
{
  const elements = document.querySelectorAll(
    '[name="myName"][value="myValue"]'
  );
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      alert("Element clicked!");
    });
  });
}

// 33. Добавить обработчик клика на все элементы, которые не имеют определенного класса.
{
  const elements = document.querySelectorAll(":not(.exclude)");
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      alert("Element clicked!");
    });
  });
}

// 34. Добавить обработчик клика на все элементы с определенным классом и атрибутом, исключая определенный класс.
{
  const elements = document.querySelectorAll(
    ".myClass[data-action]:not(.exclude)"
  );
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      alert("Element clicked!");
    });
  });
}

// 35. Добавить обработчик клика на все элементы с определенным классом и идентификатором, исключая определенный класс.
{
  const elements = document.querySelectorAll(".myClass#myId:not(.exclude)");
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      alert("Element clicked!");
    });
  });
}

// 36. Добавить обработчик клика на все элементы с определенным тегом и атрибутом, исключая определенный класс.
{
  const elements = document.querySelectorAll(
    "button[data-action]:not(.exclude)"
  );
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      alert("Button clicked!");
    });
  });
}

// 37. Добавить обработчик клика на все элементы с определенным тегом и идентификатором, исключая определенный класс.
{
  const elements = document.querySelectorAll("button#myId:not(.exclude)");
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      alert("Button clicked!");
    });
  });
}

// 38. Добавить обработчик клика на все элементы с определенным идентификатором и атрибутом, исключая определенный класс.
{
  const elements = document.querySelectorAll(
    "#myId[data-action]:not(.exclude)"
  );
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      alert("Element clicked!");
    });
  });
}

// 39. Добавить обработчик клика на все элементы с определенным классом, тегом и атрибутом, исключая определенный класс.
{
  const elements = document.querySelectorAll(
    "button.myClass[data-action]:not(.exclude)"
  );
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      alert("Button clicked!");
    });
  });
}

// 40. Добавить обработчик клика на все элементы с определенным классом, содержащим определенный текст, и исключить элементы с определенным классом.
{
  const elements = document.querySelectorAll(".myClass:not(.exclude)");
  elements.forEach(function (element) {
    if (element.textContent.includes("specificText")) {
      element.addEventListener("click", function () {
        alert("Element clicked!");
      });
    }
  });
}
