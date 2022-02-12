/* copy each one of these separately in you browser console, and see the output */

// new Promise((resolve, reject) => {
//   resolve();
//   //look, this is a function you can call at any point here
// });
// new Promise((resolve, reject) => {
//   reject();
// });
// new Promise((resolve, reject) => {});

/* ================================================= */

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve("Your fake data here");
      }
      reject("Request Error");
    }, 1000);
  });
};

fakeRequest("/dogs/1")
  .then((data) => {
    console.log("done with request");
    console.log("data is:", data);
  })
  .catch((err) => {
    console.log("OH No!", err);
  });

/* ================================== */

const rainbow = (colour, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = colour;
      resolve();
    }, delay);
  });
};

rainbow("red", 1000)
  .then(() => rainbow("orange", 1000))
  .then(() => rainbow("yellow", 1000))
  .then(() => rainbow("green", 1000))
  .catch((err) => console.log(err));
