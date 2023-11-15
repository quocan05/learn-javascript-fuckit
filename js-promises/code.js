let tasks = [
  { id: "1", name: "cook", completed: true },
  { id: "2", name: "overthink", completed: false },
  { id: "3", name: "study", completed: true },
  { id: "4", name: "watch youtube", completed: false },
  { id: "5", name: "sick duck", completed: true },
];

const promiseExample = () => {
  return new Promise((resolve, reject) => {
    resolve("ok");
    reject("not ok");
  });
};

const getTaskById = (id) => {
  return new Promise((resolve, reject) => {
    let task = tasks.find((item) => item.id === id);
    if (task) {
      resolve(task);
    } else {
      reject(`task not found, id wrong : ${id}`);
    }
  });
};

getTaskById("1")
  .then((data1) => {
    console.log(data1);
    return getTaskById("2");
  })
  .then((data2) => {
    console.log(data2);
    return getTaskById("3");
  })
  .then((data3) => {
    console.log(data3);
    return getTaskById("asdasdasd");
  })
  .then((data4) => {
    console.log(data4);
    return getTaskById("4");
  })
  .catch((err) => {
    console.log(err);
  });
