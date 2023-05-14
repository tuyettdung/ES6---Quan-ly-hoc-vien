import { ListPerson } from "../models/ListPerson.js";
import { Employee, Person, Student } from "../models/Person.js";

let list = new ListPerson();

//Add person
document.querySelector("#btnAdd").onclick = () => {
  let student = new Student();
  let newPerson = new Employee();
  newPerson = { ...student, ...newPerson};
  let arrInput = document.querySelectorAll("#myModal input, #myModal select ");
  for (let input of arrInput) {
    let { id, value } = input;
    newPerson[id] = value;
  }
  list.addPerson(newPerson);
  document.querySelector("[data-dismiss=modal]").click();
  document.querySelector("form").reset();
  list.renderListPerson("tbody");
  
};

//Delete person
window.deletePerson = (idPerson) => {
  if (list.deletePerson(idPerson)) {
    list.renderListPerson("tbody");
  }
};

//Edit info person
window.editPerson = (idPerson) => {
  let perEdit = list.getInfoPerson(idPerson);
  if (perEdit) {
    let arrInput = document.querySelectorAll("#myModal input, #myModal select");
    for (let input of arrInput) {
      let { id } = input;
      input.value = perEdit[id];
    }
    document.querySelector("#btnThem").click();
    document.querySelector("#id").disabled = true;
    document.querySelector("#btnAdd").disabled = true; 
  }
};

//Update info person
document.querySelector("#btnUpdate").onclick = () => {
  let student = new Student();
  let perUpdate = new Employee();
  perUpdate  = { ...student, ...perUpdate};
  let arrInput = document.querySelectorAll("#myModal input, #myModal select");
  for (let input of arrInput) {
    let { id, value } = input;
    perUpdate[id] = value;
  }
  list.updatePerson(perUpdate.id, perUpdate);
  list.renderListPerson("tbody");
  document.querySelector("[data-dismiss=modal]").click();
  document.querySelector("form").reset();
  document.querySelector("#id").disabled = false;
  document.querySelector("#btnAdd").disabled = false;
};


//Filter type person
document.querySelector("#searchName").oninput = (e) => {
        let typePerson = e.target.value;
        let arrBackup = [...list.arrPerson];
        list.filterTypePerson(typePerson);
        list.renderListPerson("tbody");
        list.arrPerson = arrBackup;
        
    }

//render content html for each type person: Student/Customer/Employee:
document.querySelector("#typeOption").oninput = () => {
  let opt = document.querySelector("#typeOption").value;
  let output = "";
  if (opt == "student") {
    output = `
                  <div>
                          <input  name="math" id="math" class="form-control input-sm"
                          placeholder="Mathematics"/>
                  </div>
                  <span class="sp-thongbao" id="tbMath"></span>
                  <div >
                          <input name="physic" id="physic" class="form-control input-sm"
                          placeholder="Physics"/>
                  </div>
                  <span class="sp-thongbao" id="tbPhysic"></span>
                  <div >
                          <input name="chemistry" id="chemistry" class="form-control input-sm"
                          placeholder="Chemistry"/>
                  </div>
                  <span class="sp-thongbao" id="tbChemistry"></span>
                      `;
  } else if (opt == "employee") {
    output = `
          <div class="mt-3 ">
                  <input name="countDay" id="countDay" class="form-control input-sm"
                  placeholder="Total Day">
          </div>
          <span class="sp-thongbao" id="tbcountDay"></span>
          <div class="">
                  <input name="salary" id="salary" class="form-control input-sm"
                  placeholder="Salary">
          </div>
          <span class="sp-thongbao" id="tbSalary"></span>
              `;
  } else if (opt == "customer"){
    output = `
    <div>
            <input name="companyName" id="companyName" class="form-control input-sm"
            placeholder="Company Name">
    </div>
    <span class="sp-thongbao" id="tbCompanyName"></span>
    <div class="">
            <input name="invoiceValue" id="invoiceValue" class="form-control input-sm"
            placeholder="Invoice Value">
    </div>
    <span class="sp-thongbao" id="tbInvoiceValue"></span>
    <div class="">
            <input name="evaluate" id="evaluate" class="form-control input-sm"
            placeholder="Evaluate">
    </div>
    <span class="sp-thongbao" id="tbEvaluate"></span>
        `;
  }
  document.querySelector("#optionForm").innerHTML = output;
};
