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
console.log("libraryForm", libraryForm);
function libraryFormSumit(e) {
  console.log("You have sumitted library form");
  e.preventDefault();
  let name = document.getElementById("name").value;
  let date = document.getElementById("date").value;
  console.log(date);

  //   let TextMessage = document.getElementById("TextMessage");
  //   console.log("TextMessage");
  let WhatApps = document.getElementById("WhatApps");
  let Email = document.getElementById("Email");
  let type = document.getElementById("TextMessage");
  if (TextMessage.value) {
    type = TextMessage.value;
  }
  if (TextMessage.checked) {
    type = TextMessage.value;
  } else if (WhatApps.checked) {
    type = WhatApps.value;
  } else if (Email.checked) {
    type = Email.value;
  }
  {
    let type = document.getElementById("type");
    var ele = document.getElementsByName("");
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].type == "checkbox") ele[i].checked = true;
    }
  }
  {
    var ele = document.getElementsByName("type");
    for (var i = 0; i < ele.length; i++) {
      if (ele[i].type == "checkbox") ele[i].checked = false;
    }
  }
  let book = new Book(name, date, type);
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

  e.preventDefault();
}
