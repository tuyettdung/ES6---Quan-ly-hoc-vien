import { ListPerson } from "../models/ListPerson.js";
import { Person } from "../models/Person.js";

let list = new ListPerson();
document.querySelector("#btnAdd").onclick = () => {
  let newPerson = new Person();
  let arrInput = document.querySelectorAll("#myModal input, #myModal select ");
  for (let input of arrInput) {
    let { id, value } = input;
    newPerson[id] = value;
  }
  list.addPerson(newPerson);
  list.renderListPerson("tbody");
  document.querySelector("[data-dismiss=modal]").click();
};

window.deletePerson = (idPerson) => {
  if (list.deletePerson(idPerson)) {
    list.renderListPerson("tbody");
  }
};

window.editPerson = (idPerson) => {
  let perEdit = list.getInfoPerson(idPerson);
  if (perEdit) {
    let arrInput = document.querySelectorAll("#myModal input, #myModal select");
    for (let input of arrInput) {
      let { id } = input;
      input.value = perEdit[id];
    }
    document.querySelector("#btnThem").click();
  }
};

document.querySelector("#btnUpdate").onclick = () => {
  let perUpdate = new Person();
  let arrInput = document.querySelectorAll("#myModal input, #myModal select");
  for (let input of arrInput) {
    let { id, value } = input;
    perUpdate[id] = value;
  }
  list.updatePerson(perUpdate.id, perUpdate);
  list.renderListPerson("tbody");
  document.querySelector("[data-dismiss=modal]").click();
};

document.querySelector("#searchName").oninput = (e) => {
        let typePerson = e.target.value;
        let arrBackup = [...list.arrPerson];
    
        list.filterTypePerson(typePerson);
        list.renderListPerson("tbody");
        list.arrPerson = arrBackup;
       
    }

//render content html khi chọn type:
document.querySelector("#typeOption").oninput = () => {
  let opt = document.querySelector("#typeOption").value;
  let output = "";
  if (opt == "student") {
    output = `
                  <div class="mt-3 input-group">
      
                          <input  name="math" id="math" class="form-control input-sm"
                          placeholder="Mathematics">
                  </div>
                  <span class="sp-thongbao" id="tbMath"></span>
                  <div class="input-group">
                          <input  name="physic" id="physic" class="form-control input-sm"
                          placeholder="Physics">
                  </div>
                  <span class="sp-thongbao" id="tbMath"></span>
                  <div class="input-group">
                          <input  name="chemisty" id="chemisty" class="form-control input-sm"
                          placeholder="Chemisty">
                  </div>
                  <span class="sp-thongbao" id="tbMath"></span>
                      `;
  } else if (opt == "employee") {
    output = `
          <div class="mt-3 input-group">
                  <input name="countDay" id="countDay" class="form-control input-sm"
                  placeholder="Total Day">
          </div>
          <span class="sp-thongbao" id="tbcountDay"></span>
          <div class="input-group">
                  <input name="salary" id="salary" class="form-control input-sm"
                  placeholder="Salary">
          </div>
          <span class="sp-thongbao" id="tbSalary"></span>
              `;
  }
  document.querySelector("#optionForm").innerHTML = output;
};
