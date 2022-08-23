let myToDos = [];

const toDo = (title, description, priority) => {
    return { title, description, priority };
};

const pushToDO = (aToDo) => {
    myToDos.push(aToDo);
    console.log(myToDos);
}

let task = toDo('clean mouse', 'clean my mouse', 'high');
pushToDO(task);

export {
    myToDos,
    toDo,
    pushToDO,
}