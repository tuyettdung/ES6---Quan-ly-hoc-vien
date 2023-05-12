import { Person } from "./Person.js";

export class ListPerson {
  arrPerson = [];
  addPerson(newPerson) {
    this.arrPerson.push(newPerson);
    return this.arrPerson;
  }

  renderListPerson(selector) {
    let trPerson = "";
    for (let person of this.arrPerson) {
      let newPerson = new Person();
      newPerson = { ...newPerson, ...person };
      trPerson += `
         <tr>
           <td>${newPerson.id}</td>
           <td>${newPerson.name}</td>
           <td>${newPerson.address}</td>
           <td>${newPerson.email}</td>
           <td>${newPerson.typeOption}</td>
           <td></td>
           <td>
           <button class="btn btn-danger" onclick="deletePerson('${newPerson.id}')">Xoá</button>
           <button class="btn btn-primary" onclick="editPerson('${newPerson.id}')">Sửa</button>
           </td>
         </tr>
        `;
    }
    document.querySelector(selector).innerHTML = trPerson;
  }

  deletePerson(idPerson) {
    let indexDel = this.arrPerson.findIndex(per => per.id == idPerson);
    if(indexDel !== -1){
        this.arrPerson.splice(indexDel,1);
        return true;
    }
    return false;
}





  
}
