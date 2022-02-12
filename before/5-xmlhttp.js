// NOT AT ALL IMPORTANT TO REMEMBER ANY OF THIS CODE!
const req = new XMLHttpRequest();

req.onload = function () {
  console.log("ALL DONE WITH REQUEST!!!");
  console.log(req);
  const data = JSON.parse(this.responseText);
  console.log(data);
};

req.onerror = function () {
  console.log("ERROR!!!");
  console.log(this);
};

// https://somewhere.org/i-dont-exist
req.open("GET", "https://jsonplaceholder.typicode.com/todos/");
req.send();
