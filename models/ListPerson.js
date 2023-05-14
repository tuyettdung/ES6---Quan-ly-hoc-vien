import { Employee, Person, Student } from "./Person.js";

export class ListPerson {
  arrPerson = [];
  addPerson(newPerson) {
    this.arrPerson.push(newPerson);
    return this.arrPerson;
  }

  renderListPerson(selector) {
    let trPerson = "";
    for (let person of this.arrPerson) {
      let newPerson = new Student();
      newPerson = { ...newPerson, ...person };
      let personNew = new Employee();
      personNew = { ...personNew, ...newPerson};
      trPerson += `
         <tr>
           <td>${personNew.id}</td>
           <td>${personNew.name}</td>
           <td>${personNew.address}</td>
           <td>${personNew.email}</td>
           <td>${personNew.typeOption}</td>
           <td>${personNew.totalScore().toLocaleString()}
           </td>
           <td>$${personNew.totalSalary().toLocaleString()}
           </td>
           <td>
           <button class="btn btn-danger" onclick="deletePerson('${personNew.id}')">Xoá</button>
           <button class="btn btn-primary" onclick="editPerson('${personNew.id}')">Sửa</button>
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

getInfoPerson(idPerson) {
  let personEdit = this.arrPerson.find (person => person.id === idPerson);
  return personEdit;
}

updatePerson(idPerson,personUpdate){
  let personGet = this.getInfoPerson(idPerson);
  if(personGet){
      for(let key in personGet){
          personGet[key] = personUpdate[key];
      }
      return true;
  }
  return false
}

filterTypePerson(value){
      this.arrPerson = this.arrPerson.filter(person => person.typeOption === value);
  return this.arrPerson;

}


}
