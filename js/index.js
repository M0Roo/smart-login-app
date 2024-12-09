let signInBtn = document.getElementById('signUpBtn');
let nameIn =document.getElementById('nameId');
let emailIn =document.getElementById('emailId');
let passwordIN = document.getElementById('passId');
let errorMsg =document.getElementById('errorMsg');
let successMsg =document.getElementById('successMsg')
/**********************************************************/ 
let logInBtn =document.getElementById('loginBtn');
let emailLog =document.getElementById('emailLog')
let passLog =document.getElementById('passLog')
let logErrorMsg =document.getElementById('logErrorMsg');
let homePage = document.getElementById('homePage')
let loginPage = document.getElementById('loginPage')
/**********************************************************/
let welcome = document.getElementById('welcome')

let person = []
if (localStorage.length != 0){
    person = JSON.parse(localStorage.getItem('person'));
}



function sign(){
    
    if (validation(nameIn.value) |validation(emailIn.value) |validation(passwordIN.value) ){
        let onePerson ={
            name: nameIn.value,
            email: emailIn.value,
            pass: passwordIN.value
        }
        person.push(onePerson)    
        localStorage.setItem('person' ,JSON.stringify(person))
        clearInputs()
        successMsg.classList.remove('d-none');
        errorMsg.classList.add('d-none');
        
    }else{
        successMsg.classList.add('d-none');
        errorMsg.classList.remove('d-none');
    }
    
}

function clearInputs(){
    passwordIN.value =null;
    nameIn.value=null;
    emailIn.value=null;
}
function validation(ele){
    var regex = /^\w{2,}$/
    if(regex.test(ele)){
        return true;
    }
    else{
        return false;
    }
    
}

function login(){
    
    let user = JSON.parse(localStorage.getItem('person'))
    console.log(user);
    for (let i = 0; i < user.length; i++) {
        
        if(emailLog.value === user[i].email & passLog.value === user[i].pass){
            emailLog.value =null;
            passLog.value =null;
            homePage.classList.remove('d-none');
            loginPage.classList.add('d-none');
            welcome.innerHTML =`Welcome ${person[i].name}`
            logErrorMsg.classList.add('d-none')
            break
        }
        else{
            logErrorMsg.classList.remove('d-none')
        }
    }
    
}

function showLogin(){
    homePage.classList.add('d-none')
    loginPage.classList.remove('d-none')
}