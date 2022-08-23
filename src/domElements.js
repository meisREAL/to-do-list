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

    const toDoDate = document.createElement('div');
    toDoDate.classList.add('toDoDate');
    toDoDate.textContent = '18:30';
    toDoItem.appendChild(toDoDate);
}

export {
    mainWindow,
}