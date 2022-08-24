let myToDos = [];

const toDo = (title, description, priority) => {
    return { title, description, priority };
};

const pushToDO = (aToDo) => {
    myToDos.push(aToDo);
    console.log(myToDos);
}

export {
    myToDos,
    toDo,
    pushToDO,
}