// 1. Найти родительский элемент для определенного узла.

{
  const childElement = document.getElementById("child");
  const parentElement = childElement.parentElement;
  console.log("Родительский элемент:", parentElement);
}

// 2. Найти количество дочерних узлов определенного узла.

{
  const parentElement = document.getElementById("parent");
  const childNodeCount = parentElement.childNodes.length;
  console.log("Количество дочерних узлов:", childNodeCount);
}

// 3. Найти первый дочерний элемент определенного узла.

{
  const parentElement = document.getElementById("parent");
  const firstChildElement = parentElement.firstElementChild;
  console.log("Первый дочерний элемент:", firstChildElement);
}

// 4. Найти последний дочерний элемент определенного узла.

{
  const parentElement = document.getElementById("parent");
  const lastChildElement = parentElement.lastElementChild;
  console.log("Последний дочерний элемент:", lastChildElement);
}

// 5. Найти предыдущий соседний элемент для определенного узла.

{
  const childElement = document.getElementById("child");
  const previousSibling = childElement.previousElementSibling;
  console.log("Предыдущий соседний элемент:", previousSibling);
}

// 6. Найти следующий соседний элемент для определенного узла.

{
  const childElement = document.getElementById("child");
  const nextSibling = childElement.nextElementSibling;
  console.log("Следующий соседний элемент:", nextSibling);
}

// 7. Перебрать все дочерние узлы определенного узла.

{
  const parentElement = document.getElementById("parent");
  parentElement.childNodes.forEach((node) => {
    console.log(node);
  });
}

// 8. Перебрать все дочерние элементы определенного узла.

{
  const parentElement = document.getElementById("parent");
  parentElement.children.forEach((child) => {
    console.log(child);
  });
}

// 9. Перебрать все соседние элементы определенного узла.

{
  const childElement = document.getElementById("child");
  let currentElement = childElement;
  while ((currentElement = currentElement.previousElementSibling)) {
    console.log(currentElement);
  }
  let nextElement = childElement;
  while ((nextElement = nextElement.nextElementSibling)) {
    console.log(nextElement);
  }
}

// 10. Найти первый элемент в родительском элементе.

{
  const childElement = document.getElementById("child");
  const firstElementInParent = childElement.parentElement.firstElementChild;
  console.log("Первый элемент в родительском элементе:", firstElementInParent);
}

// 11. Найти последний элемент в родительском элементе.

{
  const childElement = document.getElementById("child");
  const lastElementInParent = childElement.parentElement.lastElementChild;
  console.log(
    "Последний элемент в родительском элементе:",
    lastElementInParent
  );
}

// 12. Проверить, является ли данный узел корневым элементом документа.

{
  const childElement = document.getElementById("child");
  const isRootElement = childElement === document.documentElement;
  console.log("Это корневой элемент документа:", isRootElement);
}

// 13. Перебрать все элементы формы (если применимо).

{
  const form = document.querySelector("form");
  if (form) {
    Array.from(form.elements).forEach((element) => {
      console.log(element);
    });
  } else {
    console.log("Форма не найдена на странице.");
  }
}

// 14. Перебрать все элементы таблицы (если применимо).

{
  const table = document.querySelector("table");
  if (table) {
    table.querySelectorAll("td, th").forEach((element) => {
      console.log(element);
    });
  } else {
    console.log("Таблица не найдена на странице.");
  }
}

// 15. Перебрать все строки таблицы (если применимо).

{
  const table = document.querySelector("table");
  if (table) {
    table.querySelectorAll("tr").forEach((row) => {
      console.log(row);
    });
  } else {
    console.log("Таблица не найдена на странице.");
  }
}

// 16. Перебрать все ячейки таблицы (если применимо).

{
  const table = document.querySelector("table");
  if (table) {
    table.querySelectorAll("td, th").forEach((cell) => {
      console.log(cell);
    });
  } else {
    console.log("Таблица не найдена на странице.");
  }
}

// 17. Найти ближайший общий родительский элемент для двух заданных узлов.

{
  const element1 = document.getElementById("element1");
  const element2 = document.getElementById("element2");

  let commonParent = null;
  let parent1 = element1;
  while (parent1 && !commonParent) {
    let parent2 = element2;
    while (parent2 && !commonParent) {
      if (parent1 === parent2) {
        commonParent = parent1;
      }
      parent2 = parent2.parentElement;
    }
    parent1 = parent1.parentElement;
  }

  console.log("Ближайший общий родительский элемент:", commonParent);
}

// 18. Найти индекс определенного узла среди дочерних элементов его родителя.

{
  const childElement = document.getElementById("child");
  const parentElement = childElement.parentElement;
  const index = Array.from(parentElement.children).indexOf(childElement);
  console.log("Индекс элемента среди дочерних элементов родителя:", index);
}

// 19. Найти первый элемент в документе.

{
  const firstElement = document.body.firstElementChild;
  console.log("Первый элемент в документе:", firstElement);
}

// 20. Найти последний элемент в документе.

{
  const lastElement = document.body.lastElementChild;
  console.log("Последний элемент в документе:", lastElement);
}
