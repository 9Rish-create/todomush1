// Массив объектов со списком дел
const todoItems = [
    { id: 0, text: 'Собрать грибы' }
  ];
  
  const listContainer = document.getElementById('todo-list');
  const form = document.getElementById('todo-form');
  const input = document.getElementById('new-item-text');
 
  
  // Функция, чтобы произошел рендер всего списка
  function renderList() {
    // чтобы очистить список
    listContainer.innerHTML = '';
  
    // Создать ДОМ-элементы для каждого объекта массива
    todoItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.text;
  
      // Кнопка, чтобы удалить
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Удалить';
      deleteBtn.onclick = () => {
        removeItem(item.id);
      };
  
      li.appendChild(deleteBtn);
      listContainer.appendChild(li);
    });
    chekListLength();
  }
  
  // Функция, чтобы добавить новое дело с кнопками 
  function addItem(text) {
    const newId = todoItems.length > 0 ? Math.max(...todoItems.map(i => i.id)) + 1 : 0;
    const newItem = { id: newId, text };
    todoItems.push(newItem);
    renderList();
  }
  
  // Функция, чтобы удаленить элемент по id ?, но я не уверенна, что правильная
  function removeItem(id) {
    const index = todoItems.findIndex(item => item.id === id);
    if (index !== -1) {
      todoItems.splice(index, 1);
      renderList();
    }
  }
  // Функция добавления картинки с ленивцем (вопрос - почему не получается изменить расположение картинки с ленивцем, хотя я прописала вроде бы правильный путь от нее до ее css?)
  function chekListLength() {
    const sloth = document.getElementById('slothwhispers');
    if (todoItems.length === 0) {
        sloth.style.display = 'block'; 
    } else {
        sloth.style.display = 'none'; 
    }
}
  
  // Чтобы у формы добавилась новая задача
  form.onsubmit = (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (text !== '') {
      addItem(text);
      input.value = '';
    }
  };
  
  // чтобы сразу произошел рендер страницы и проверилось условие для картинки с ленивцем
  renderList();
  chekListLength();



// const form = document.querySelector(".form");
// const ul = document.querySelector(".ul")
// form.addEventListener("submit", do_submit)
// function do_submit(event){
//     event.preventDefault();
//     let input = document.querySelector(".input");
//     let inputText = input.value;
//     let li = document.createElement("li");
//     li.className = "li";
//     let textValue = document.createTextNode(inputText);
//     li.appendChild(textValue);
//     let deleteButton = document.createElement("button")
//     deleteButton.appendChild(document.createTextNode("Удалить"))
//     deleteButton.className = "btn"
//     deleteButton.dataset.action = "delete"
//     li.appendChild(deleteButton)
//     ul.prepend(li);
//     input.value = ""
    
    