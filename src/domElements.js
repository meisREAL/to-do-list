function mainWindow() {
    const mainDiv = document.getElementById('main');

    const projectDiv = document.createElement('div');
    projectDiv.setAttribute('id', 'projectSide');
    mainDiv.appendChild(projectDiv);

    const toDoDiv = document.createElement('div');
    toDoDiv.setAttribute('id', 'toDoSide');
    mainDiv.appendChild(toDoDiv);

    const projectList = document.createElement('ul');
    projectList.classList.add('projectList');
    projectDiv.appendChild(projectList);

    const allProjectsList = document.createElement('li');
    allProjectsList.classList.add('projects');
    allProjectsList.textContent = "All to-do's"
    projectList.appendChild(allProjectsList);

    const todayProjects = document.createElement('li');
    todayProjects.classList.add('projects');
    todayProjects.textContent = 'Today';
    projectList.appendChild(todayProjects);

    const upcomingProjects = document.createElement('li');
    upcomingProjects.classList.add('projects');
    upcomingProjects.textContent = 'Upcoming';
    projectList.appendChild(upcomingProjects);

    const toDoHeader = document.createElement('div');
    toDoHeader.setAttribute('id', 'toDoHeader');
    toDoHeader.textContent = 'Today';
    toDoDiv.appendChild(toDoHeader);

    const todoPlace = document.createElement('div');
    todoPlace.setAttribute('id', 'toDoPlace');
    toDoDiv.appendChild(todoPlace);

    const toDoItem = document.createElement('div');
    toDoItem.classList.add('toDoItem');
    todoPlace.appendChild(toDoItem);

    const checkBox = document.createElement('input')
    checkBox.setAttribute('type', 'checkbox');
    toDoItem.appendChild(checkBox);

    const toDoName = document.createElement('div');
    toDoName.classList.add('toDoName');
    toDoName.textContent = 'a To Do';
    toDoItem.appendChild(toDoName);

    const toDoPriority = document.createElement('div');
    toDoPriority.classList.add('toDoPriority');
    toDoPriority.textContent = 'High';
    toDoItem.appendChild(toDoPriority);

    const toDoDate = document.createElement('div');
    toDoDate.classList.add('toDoDate');
    toDoDate.textContent = '18:30';
    toDoItem.appendChild(toDoDate);

    const newButton = document.createElement('div');
    newButton.setAttribute('id', 'newBtn');
    newButton.textContent = '+';
    toDoHeader.appendChild(newButton);

}

function createToDo() {
    const mainWindow = document.getElementById('toDoPlace');
    const itemWindow = document.createElement('div');
    itemWindow.setAttribute('id', 'itemWindow');

    const titlePlace = document.createElement('input');
    titlePlace.setAttribute('id', 'titlePlace');
    titlePlace.setAttribute('placeholder', 'Task name');
    itemWindow.appendChild(titlePlace);

    const descriptionPlace = document.createElement('textarea');
    descriptionPlace.setAttribute('id', 'descriptionPlace');
    descriptionPlace.setAttribute('placeholder', 'Task description');
    itemWindow.appendChild(descriptionPlace);

    const priorityHigh = document.createElement('div');
    priorityHigh.classList.add('priority');
    priorityHigh.textContent = 'High priority';
    const highRadio = document.createElement('input');
    highRadio.setAttribute('type', 'radio');
    highRadio.setAttribute('name', 'chosePriority')
    priorityHigh.appendChild(highRadio);
    itemWindow.appendChild(priorityHigh);

    const priorityMedium = document.createElement('div');
    priorityMedium.classList.add('priority');
    priorityMedium.textContent = 'Medium priority';
    const mediumRadio = document.createElement('input');
    mediumRadio.setAttribute('type', 'radio');
    mediumRadio.setAttribute('name', 'chosePriority');
    priorityMedium.appendChild(mediumRadio);
    itemWindow.appendChild(priorityMedium);

    const priorityLow = document.createElement('div');
    priorityLow.classList.add('priority');
    priorityLow.textContent = 'Low priority';
    const lowRadio = document.createElement('input');
    lowRadio.setAttribute('type', 'radio');
    lowRadio.setAttribute('name', 'chosePriority');
    priorityLow.appendChild(lowRadio);
    itemWindow.appendChild(priorityLow);

    const buttonPlace = document.createElement('div');
    buttonPlace.classList.add('buttonPlace');
    const createButton = document.createElement('button');
    createButton.setAttribute('value', 'Create');
    createButton.textContent = 'Create';
    buttonPlace.appendChild(createButton);
    const cancelButton = document.createElement('button');
    cancelButton.setAttribute('value', 'Cancel');
    cancelButton.textContent = 'Cancel';
    buttonPlace.appendChild(cancelButton);
    cancelButton.onclick = function () {
        itemWindow.remove(itemWindow);
    }

    itemWindow.appendChild(buttonPlace);

    mainWindow.appendChild(itemWindow);
}

function createToDoListeners() {

    const toDoBtn = document.getElementById('newBtn');
    toDoBtn.addEventListener('click', createToDo);
}

function cancelPopUpListener() {

}

export {
    mainWindow,
    createToDo,
    createToDoListeners,
}