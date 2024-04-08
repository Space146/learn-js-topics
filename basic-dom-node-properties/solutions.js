// 1. Найти тип DOM-узла для элемента с id "example".
{
  const exampleType = document.getElementById("example").nodeType;
  console.log(exampleType);
}

// 2. Получить название тега для элемента с классом "container".
{
  const containerTagName = document.querySelector(".container").tagName;
  console.log(containerTagName);
}

// 3. Изменить внутреннее HTML-содержимое элемента с id "header".
{
  document.getElementById("header").innerHTML = "New Header";
}

// 4. Получить полный HTML элемента с классом "item".
{
  const itemOuterHTML = document.querySelector(".item").outerHTML;
  console.log(itemOuterHTML);
}

// 5. Изменить содержимое текстового узла.
{
  const textNode = document.createTextNode("New Text");
  // Заменить содержимое текущего текстового узла
  document.getElementById("content").childNodes[0].replaceWith(textNode);
}

// 6. Получить текст внутри элемента с id "content" без тегов.
{
  const contentText = document.getElementById("content").textContent;
  console.log(contentText);
}

// 7. Сделать элемент с классом "popup" невидимым.
{
  document.querySelector(".popup").style.display = "none";
}

// 8. Найти значение атрибута "href" для ссылки с id "link".
{
  const linkHref = document.getElementById("link").getAttribute("href");
  console.log(linkHref);
}

// 9. Получить тип элемента input с именем "username".
{
  const usernameInputType = document.querySelector(
    'input[name="username"]'
  ).type;
  console.log(usernameInputType);
}

// 10. Изменить значение атрибута "href" для ссылки с классом "external".
{
  document
    .querySelector(".external")
    .setAttribute("href", "https://www.example.com");
}

// 11. Установить значение "hidden" для атрибута "hidden" для элемента с id "element".
{
  document.getElementById("element").hidden = true;
}

// 12. Получить значение value для элемента input с id "password".
{
  const passwordValue = document.getElementById("password").value;
  console.log(passwordValue);
}

// 13. Найти тип элемента input с id "emailInput".
{
  const emailInputType = document.getElementById("emailInput").type;
  console.log(emailInputType);
}

// 14. Получить содержимое узла-комментария.
{
  const commentContent = document.getElementById("note").firstChild.nodeValue;
  console.log(commentContent);
}

// 15. Получить текст внутри элемента с классом "description" без тегов.
{
  const descriptionText = document.querySelector(".description").textContent;
  console.log(descriptionText);
}

// 16. Сделать все элементы с классом "message" невидимыми.
{
  const messageElements = document.querySelectorAll(".message");
  messageElements.forEach((element) => {
    element.style.display = "none";
  });
}
// 17. Найти значение атрибута "src" для изображения с классом "avatar".
{
  const avatarSrc = document.querySelector(".avatar").getAttribute("src");
  console.log(avatarSrc);
}

// 18. Изменить тип элемента input с id "submitButton" на "button".
{
  document.getElementById("submitButton").type = "button";
}

// 19. Установить атрибут "disabled" для кнопки с классом "submit".
{
  document.querySelector(".submit").setAttribute("disabled", true);
}

// 20. Получить значение атрибута "data-id" для элемента с классом "item".
{
  const itemId = document.querySelector(".item").dataset.id;
  console.log(itemId);
}
// 21. Изменить содержимое текстового узла для элемента с id "note".
{
  document.getElementById("note").textContent = "New note content";
}

// 22. Получить текст внутри элемента с классом "content" без тегов.
{
  const contentText = document.querySelector(".content").textContent;
  console.log(contentText);
}

// 23. Сделать элемент с id "modal" невидимым.
{
  document.getElementById("modal").style.visibility = "hidden";
}

// 24. Найти значение атрибута "value" для элемента с id "inputField".
{
  const inputFieldValue = document.getElementById("inputField").value;
  console.log(inputFieldValue);
}

// 25. Получить тип элемента input с классом "textInput".
{
  const textInputType = document.querySelector(".textInput").type;
  console.log(textInputType);
}

// 26. Изменить значение атрибута "href" для ссылки с id "homeLink".
{
  document.getElementById("homeLink").href = "https://www.example.com";
}

// 27. Установить значение "hidden" для атрибута "hidden" для элемента с классом "sidebar".
{
  document.querySelector(".sidebar").hidden = true;
}

// 28. Получить значение value для элемента input с id "searchInput".
{
  const searchInputValue = document.getElementById("searchInput").value;
  console.log(searchInputValue);
}

// 29. Найти тип элемента input с именем "passwordInput".
{
  const passwordInputType = document.querySelector(
    'input[name="passwordInput"]'
  ).type;
  console.log(passwordInputType);
}

// 30. Получить содержимое узла-комментария.
{
  const commentContent = document.getElementById("note").firstChild.nodeValue;
  console.log(commentContent);
}

// 31. Получить текст внутри элемента с классом "summary" без тегов.
{
  const summaryText = document.querySelector(".summary").textContent;
  console.log(summaryText);
}

// 32. Сделать все элементы с классом "alert" невидимыми.
{
  const alertElements = document.querySelectorAll(".alert");
  alertElements.forEach((element) => {
    element.style.display = "none";
  });
}
// 33. Найти значение атрибута "src" для изображения с id "logoImage".
{
  const logoSrc = document.getElementById("logoImage").getAttribute("src");
  console.log(logoSrc);
}

// 34. Изменить тип элемента input с классом "inputField" на "text".
{
  document.querySelector(".inputField").type = "text";
}

// 35. Установить атрибут "disabled" для кнопки с id "submitButton".
{
  document.getElementById("submitButton").setAttribute("disabled", true);
}
// 36. Получить значение атрибута "data-info" для элемента с id "infoElement".
{
  const infoData = document.getElementById("infoElement").dataset.info;
  console.log(infoData);
}

// 37. Изменить содержимое текстового узла для элемента с классом "message".
{
  document.querySelector(".message").textContent = "New message content";
}

// 38. Получить текст внутри элемента с id "description" без тегов.
{
  const descriptionText = document.getElementById("description").textContent;
  console.log(descriptionText);
}

// 39. Сделать элемент с классом "tooltip" невидимым.
{
  document.querySelector(".tooltip").style.visibility = "hidden";
}

// 40. Найти значение атрибута "href" для ссылки с классом "navigationLink".
{
  const navigationLinkHref = document
    .querySelector(".navigationLink")
    .getAttribute("href");
  console.log(navigationLinkHref);
}
