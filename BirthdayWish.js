console.log("This is project.js");
let serial = 1;

function Book(name, date, type) {
  this.name = name;
  this.date = date;
  this.type = type;
}

function Display() {}

Display.prototype.add = function (book) {
  console.log("Adding to UI", book);
  let table = document.getElementById("table");
  table.style.display = "block";
  let tableBody = document.getElementById("tableBody");
  let uistring = `
                <tr>
                    <td>${serial}</td>
                    <td>${book.name}</td>
                    <td>${book.date}</td>
                    <td>${book.type}</td>
                    <td>${book.Action}</td>
                 </tr> `;
  tableBody.innerHTML += uistring;
  serial += 1;
};

Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book?.Author?.length < 2) {
    return false;
  } else {
    return true;
  }
};

Display.prototype.show = function (type, displaymessage) {
  let message = document.getElementById("message");
  message.innerHTML = `<div class=" alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>message</strong>${displaymessage}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div> `;
  setTimeout(function () {
    message.innerHTML = "";
  }, 1000);
};

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSumit);
let table = document.getElementById("table");
table.style.display = "none";
console.log("libraryForm", libraryForm);
function libraryFormSumit(e) {
  console.log("You have sumitted library form");
  e.preventDefault();
  let name = document.getElementById("name").value;
  let date = document.getElementById("date").value;
  console.log(date);

  let WhatApps = document.getElementById("WhatsApp");
  let Email = document.getElementById("Email");
  let type = document.getElementById("TextMessage");
  var typeData = "";
  if (TextMessage.checked) {
    typeData = TextMessage.value;
  }
  if (WhatApps.checked) {
    typeData += WhatApps.value;
  }
  if (Email.checked) {
    typeData += Email.value;
  }
  let regex = /^[a-zA-Z]([a-zA-Z]){2,10}$/;
  let str = name;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your name is valid", name);
    //name.classList.remove("is-invalid");
    validUser = true;
  } else {
    console.log("Your name is not valid");
    // name.classList.add("is-invalid");
    toastr.error("not a valid username");
    validUser = false;
  }
  if (validUser) {
    let book = new Book(name, date, typeData);
    let table = document.getElementById("table");
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
      console.log("click");
      display.add(book);
      display.clear();
      display.show("success", " Your Info has been sucessfully added");
    } else {
      display.show("danger", " Sorry you can not add Brithday Details");
    }
  }
  // Validate name here

  e.preventDefault();
}

function checkAllData() {
  var checkedData = document.getElementById("gridCheck1");
  console.log(checkedData.value);
  if (checkedData.checked) {
    document.getElementById("Email").checked = true;
    document.getElementById("WhatApps").checked = true;
    document.getElementById("TextMessage").checked = true;
  } else if (!checkedData.checked) {
    document.getElementById("Email").checked = false;
    document.getElementById("WhatApps").checked = false;
    document.getElementById("TextMessage").checked = false;
  }
}
