// 1. Найти первый элемент с классом "example".

{
  const exampleElement = document.querySelector(".example");
  console.log(exampleElement);
}

// 2. Найти все элементы с классом "item".

{
  const itemElements = document.querySelectorAll(".item");
  console.log(itemElements);
}

// 3. Найти элемент с id "header".

{
  const headerElement = document.getElementById("header");
  console.log(headerElement);
}

// 4. Найти все элементы с именем "username".

{
  const usernameElements = document.getElementsByName("username");
  console.log(usernameElements);
}

// 5. Найти все элементы `div`.

{
  const divElements = document.getElementsByTagName("div");
  console.log(divElements);
}

// 6. Найти все элементы `a`.

{
  const aElements = document.getElementsByTagName("a");
  console.log(aElements);
}

// 7. Найти все элементы с классом "container".

{
  const containerElements = document.getElementsByClassName("container");
  console.log(containerElements);
}

// 8. Найти все элементы `input` внутри формы с id "loginForm".

{
  const inputElements = document
    .getElementById("loginForm")
    .querySelectorAll("input");
  console.log(inputElements);
}

// 9. Найти первый элемент с тегом "p".

{
  const pElement = document.querySelector("p");
  console.log(pElement);
}

// 10. Найти элемент с классом "active" внутри элемента с id "navigation".

{
  const activeElement = document
    .getElementById("navigation")
    .querySelector(".active");
  console.log(activeElement);
}

// 11. Найти элемент с атрибутом "data-role" равным "menu".

{
  const menuElement = document.querySelector('[data-role="menu"]');
  console.log(menuElement);
}

// 12. Найти все элементы с классом "error" внутри формы.

{
  const errorElements = document
    .querySelector("form")
    .querySelectorAll(".error");
  console.log(errorElements);
}

// 13. Найти элемент с классом "selected" внутри элемента с классом "parent".

{
  const selectedElement = document.querySelector(".parent .selected");
  console.log(selectedElement);
}

// 14. Найти все элементы `input` с атрибутом "type" равным "checkbox".

{
  const checkboxElements = document.querySelectorAll('input[type="checkbox"]');
  console.log(checkboxElements);
}

// 15. Найти все элементы с именем "option" внутри элемента с id "selectBox".

{
  const optionElements = document
    .getElementById("selectBox")
    .querySelectorAll('[name="option"]');
  console.log(optionElements);
}

// 16. Найти все элементы с классом "post" внутри элемента с id "blog".

{
  const postElements = document
    .getElementById("blog")
    .querySelectorAll(".post");
  console.log(postElements);
}

// 17. Найти все элементы `div` с классом "row" внутри элемента с классом "container".

{
  const rowElements = document
    .querySelector(".container")
    .getElementsByClassName("row");
  console.log(rowElements);
}

// 18. Найти первый элемент с классом "warning" внутри элемента с классом "alert".

{
  const warningElement = document.querySelector(".alert .warning");
  console.log(warningElement);
}

// 19. Найти все элементы с классом "title" внутри элемента с классом "header".

{
  const titleElements = document
    .querySelector(".header")
    .getElementsByClassName("title");
  console.log(titleElements);
}

// 20. Найти элемент с классом "active" внутри ближайшего предка с классом "menu-item".

{
  const activeElementWithinMenu = document
    .closest(".menu-item")
    .querySelector(".active");
  console.log(activeElementWithinMenu);
}
