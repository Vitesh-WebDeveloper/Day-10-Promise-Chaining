/*
Task 1 — Simple Promise Chain
Create 3 functions:
boilWater()
makeTea()
serveTea()
Expected output:
Water boiled
Tea made
Tea served
Tea process completed
Use:
boilWater()
  .then(() => makeTea())
  .then(() => serveTea())
  .finally(() => console.log("Tea process completed"));
*/
function boilWater() {
  return new Promise((resolve) => {
    resolve("Water boiled");
  });
}

function makeTea() {
  return new Promise((resolve) => {
    resolve("Tea made");
  });
}

function serveTea() {
  return new Promise((resolve) => {
    resolve("Tea served");
  });
}

boilWater()
  .then((result) => {
    console.log(result);
    return makeTea();
  })
  .then((result) => {
    console.log(result);
    return serveTea();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Tea process completed");
  });

  
/*
Task 2 — Pass data through chain
Create:
getUser()
getPosts(user)
getComments(post)
Expected flow:
User fetched
Posts fetched for Vitesh
Comments fetched for post 1
Important: pass data like this:
getUser()
  .then((user) => getPosts(user))
  .then((post) => getComments(post))
  .catch((error) => console.log(error));
*/
function getUser() {
  return new Promise((resolve) => {
    console.log("User fetched");

    const user = {
      id: 1,
      name: "Vitesh",
    };

    resolve(user);
  });
}

function getPosts(user) {
  return new Promise((resolve) => {
    console.log(`Posts fetched for ${user.name}`);

    const post = {
      id: 1,
      title: "My first promise chaining post",
      userId: user.id,
    };

    resolve(post);
  });
}

function getComments(post) {
  return new Promise((resolve) => {
    console.log(`Comments fetched for post ${post.id}`);

    const comments = ["Good post", "Nice explanation"];

    resolve(comments);
  });
}

getUser()
  .then((user) => {
    return getPosts(user);
  })
  .then((post) => {
    return getComments(post);
  })
  .then((comments) => {
    console.log(comments);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("User post comment process completed");
  });