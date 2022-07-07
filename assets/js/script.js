const firstNameInput = document.querySelector("#firstName")
const lastNameInput = document.querySelector("#lastName")
const emailInput = document.querySelector("#email")
const numberInput = document.querySelector("#phoneNumber")
const submitBtn = document.querySelector("#submitBtn")
const cancelBtn = document.querySelector("#cancelBtn")
const displayStudent = document.querySelector("#display")

let studentInput = [];

// function saveStudent(studentInfo) {
//     localStorage.setItem("studentinfo", JSON.stringify(studentInput))
//     studentInput = JSON.parse(sessionStorage.getItem("studentInfo"))
// }

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    let studentInfo = {
        firstName : firstNameInput.value,
        lastName : lastNameInput.value,
        phoneNumber : numberInput.value,
        email : emailInput.value,
    }

    studentInput.push(studentInfo);

    const ul = document.createElement("ul")

    displayStudent.textContent = ""

    for (let i = 0; i < studentInput.length; i++) {
        const li = document.createElement("li")
        li.textContent = `first name:${studentInput[i].firstName} 
        last name : ${studentInput[i].lastName} 
        phone number : ${studentInput[i].phoneNumber} 
        email : ${studentInput[i].email}`

        ul.appendChild(li)
        console.log(studentInput[i])
    }

    displayStudent.appendChild(ul)
    
    function saveStudent(studentInfo) {
        localStorage.setItem("studentinfo", JSON.stringify(studentInput))
        studentInput = JSON.parse(sessionStorage.getItem("studentInfo"))
    }
    
    firstNameInput.value = "";
    lastNameInput.value = "";
    numberInput.value = "";
    emailInput.value = "";

    saveStudent(studentInfo)
    
    console.log(studentInput)
})


    // adding variables for arrays
    
    // let firstName = [];
    // let lastName = [];
    // let phoneNumber =[];
    // let email = [];
    
    // // adding function to add user info 
    
    // function addStudent () {
    //     firstName.push(firstNameInput.value);
    //     lastName.push(lastNameInput.value);
    //     phoneNumber.push(numberInput.value)
    //     email.push(emailInput)
    // }
    
    // // function to display
    // function addInput(){
    //     firstNameInput.value = "";
    //     lastNameInput.value = "";
    //     numberInput.value = "";
    //     emailInput.value = "";
    
    //     displayStudent.innerHTML = "";
    //     displayStudent.innerHTML += "First Name: " + firstName.join(", ") + "<br/>";
    //     displayStudent.innerHTML += "LastName: " + lastName.join(", ") + "<br/>";
    //     displayStudent.innerHTML += "number: " + phoneNumber.join(", ") + "<br/>";
    //     displayStudent.innerHTML += "email: " + email.join(", ") + "<br/>";
    
    // }