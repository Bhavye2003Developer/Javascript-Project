const submit = document.querySelector("#submit");
const keysubmit = document.querySelector("#key_submit");
const result = document.querySelector(".result");

submit.addEventListener("click", (event) => {
  event.preventDefault();

  if (localStorage["cnt"] == undefined) {
    localStorage["cnt"] = 1;
  }

  localStorage.setItem(
    localStorage["cnt"],
    document.querySelector("#name").value
  );
  console.log("successfully added to localstorage.");

  localStorage["cnt"]++;
});

let key = undefined;
keysubmit.addEventListener("click", (event) => {
  event.preventDefault();
  key = document.querySelector("#key").value;
  if (key == "") result.innerHTML = "Please enter the valid key";
  else {
    if (localStorage.getItem(key))
      result.innerHTML = `Key : ${key}<br>Value : ${localStorage.getItem(key)}`;
    else {
      result.innerHTML = "No value found!!!";
    }
  }
});
