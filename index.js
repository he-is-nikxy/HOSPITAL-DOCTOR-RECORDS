// fill in javascript code here

let tbody = document.querySelector("tbody");

let docForm = document.querySelector("form");

let docName = document.querySelector("#name");
let docID = document.querySelector("#docID");
let dept = document.querySelector("#dept");
let exp = document.querySelector("#exp");
let email = document.querySelector("#email");
let mobile = document.querySelector("#mbl");



// let role;


function expe() {
    let role;

    if (+exp.value > 5) {
        role = "Senior";
    } else if (+exp.value >= 2 && exp.value <= 5) {
        role = "Junior";
    } else if (+exp.value <= 1) {
        role = "Fresher";
    }

    return role;

}



let docArr = [];

docForm.addEventListener("submit", function(e) {
    // console.log("OK");
    e.preventDefault();

    let docData = {
        doctorName: docName.value,
        doctorID: docID.value,
        department: dept.value,
        experience: exp.value,
        docEmail: email.value,
        docMobile: mobile.value,
        docRole: expe()
    }

    // console.log(docData);
    docArr.push(docData);

    tbody.innerHTML = "";
    
    docArr.map((ele) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");

       

        td1.innerText = ele.doctorName;
        td2.innerText = ele.doctorID;
        td3.innerText = ele.department;
        td4.innerText = ele.experience;
        td5.innerText = ele.docEmail;
        td6.innerText = ele.docMobile;
        td7.innerText = ele.docRole;
        td8.innerHTML = "<button>Delete</button>";

        td8.addEventListener("click", function() {
            tr.innerHTML = "";
        })
        

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);

        tbody.append(tr);

    })

    docName.value = "";
    docID.value = "";
    dept.value = "";
    exp.value = "";
    email.value = "";
    mobile.value = "";

})





















