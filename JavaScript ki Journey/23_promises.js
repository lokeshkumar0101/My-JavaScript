// promises in js

const PromiseOne = new Promise(function (resolve, reject) {
  // do an async task
  // db calls, cryptography, network

  setTimeout(function () {
    console.log("async task is completed!!");
    resolve();
  }, 1000);
});
PromiseOne.then(function () {
  console.log("promise consumed!!");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolved!!");
});

const PromiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "lokesh.0808", email: "hhar3131@gmail.com" });
  }, 1000);
});
PromiseThree.then(function (user) {
  console.log(user);
});

const promiseFourth = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "lokesh", password: "mai-nhi-btaunga" });
    } else {
      reject("error something went wrong!!!");
    }
  }, 1000);
});
promiseFourth
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("the promise is either resolved or rejected.");
  });

const PromiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "lokesh", password: "mai-nhi-btaunga" });
    } else {
      reject("Error: Js went wrong!!!");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await PromiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("error");
  });
