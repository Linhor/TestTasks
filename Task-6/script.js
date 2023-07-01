let btn = document.querySelector('#reg');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let labelPhone = document.querySelector('.phone');
let authEmail = document.querySelector('#auth-email');
let labelEmail = document.querySelector('.email');
let password = document.querySelector('#pswd');
let repPassword = document.querySelector('#rep-pswd');
let authPassword = document.querySelector('#auth-pswd');
let LabelPassword = document.querySelector('.pswd');
let agree = document.querySelector('#agree');
let checkbox = document.querySelector('.checkbox');
let checkmark = document.querySelector('.checkmark');
let val;
let warn;
let warnPass;
let valPhone;
let valPass;

/**Валидация email */
function validateEmail(val) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(val).toLowerCase());
}


function validatePhone(phone) {
  const ph = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
  return ph.test(String(phone));
}


function validatePass(pass) {
  const pswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return pswd.test(String(pass));
}

/**Функция уведомления об ошибке введеного email */
function setWarn() {
  email.insertAdjacentHTML('afterEnd', '<span class="warn-span" id="warn-email"></span>');
  warn = document.querySelector('#warn-email');
  warn.innerText = 'Invalid Email';
  email.classList.add('warn');
  labelEmail.classList.add('warn');
};

/**Функция  снятия уведомления об ошибке введеного email */
function unsetWarn() {
  document.querySelector('#warn-email').remove();
  labelEmail.classList.remove("warn");
  email.classList.remove('warn');
}


/**Функция уведомления об ошибке введеного телефона */
function setWarn() {
  phone.insertAdjacentHTML('afterEnd', '<span class="warn-span" id="warn-phone"></span>');
  warn = document.querySelector('#warn-phone');
  warn.innerText = 'Invalid Phone';
  phone.classList.add('warn');
  labelPhone.classList.add('warn');
};
/**Функция  снятия уведомления об ошибке введеного телефона */
function unsetWarn() {
  document.querySelector('#warn-phone').remove();
  labelPhone.classList.remove("warn");
  phone.classList.remove('warn');
}

/**Функция уведомления об ошибке введеного пароля */
function setWarnPass() {
  password.insertAdjacentHTML('afterEnd', '<span class="warn-span" id="warn-pass"></span>');
  warnPass = document.querySelector('#warn-pass');
  warnPass.innerText = 'Пароль должен содержать как минимум 8 символов';
  password.classList.add('warn');
  LabelPassword.classList = 'warn';
}

/**Функция  снятия уведомления об ошибке введеного пароля*/
function unsetWarnPass() {
  document.querySelector('#warn-pass').remove();
  LabelPassword.classList.remove("warn");
  password.classList.remove('warn');
}

/**Функция уведомления об ошибке чекбокса */
function setWarnCheck() {
  agree.insertAdjacentHTML('afterEnd', '<span class="warn-span" id="warn-agree"></span>');
  warnAgree = document.querySelector('#warn-agree');
  warnAgree.innerText = 'Поле обязательно для заполения';
  agree.classList.add('warn');
  checkbox.classList.add('warn');
  checkmark.style.backgroundImage = "url('./img/checkbox/Rectangle3(1).svg')";
}

/**Функция  снятия уведомления об ошибке чекбокса*/
function unsetWarnCheck() {
  document.querySelector('#warn-agree').remove();
  checkbox.classList.remove("warn");
  agree.classList.remove('warn');
  checkmark.style.backgroundImage = "url('./img/checkbox/Rectangle3.svg')";
}



btn.addEventListener('click', () => {
  let userData = {};
  let userLogin = 'email';
  let userPassword = 'password';
  let userPhone = 'phone';
  userData[userLogin] = 0;
  userData[userPassword] = 0;
  userData[userPhone] = 0;
  val = email.value;
  validateEmail(val);
  valPhone = phone.value;
  validatePhone(valPhone);
  valPass = password.value;
  validatePass(valPass);



  /* Условия warn для почты */

  if (val == '') {
    if (check = document.querySelector('#warn-email') == null) {
      setWarn();
      warn.innerText = 'Поле обязательно для заполения';
    } else {
      unsetWarn();
      setWarn();
      warn.innerText = 'Поле обязательно для заполения';
    }
  } else if (validateEmail(val) != true) {
    if (check = document.querySelector('#warn-email') == null) {
      setWarn();
    } else {
      unsetWarn();
      setWarn();
    }
  } else if (validateEmail(val) == true) {
    if (check = document.querySelector('#warn-email') != null) {
      unsetWarn();
      console.log('good login');
      userData[userLogin] = val;
      console.log('==========================', userData);
    } else {
      console.log('good login');
      userData[userLogin] = val;
    }
  };

  /*Условия для телефона */
  if (valPhone == '') {
    if (check = document.querySelector('#warn-phone') == null) {
      setWarn();
      warn.innerText = 'Поле обязательно для заполения';
    } else {
      unsetWarn();
      setWarn();
      warn.innerText = 'Поле обязательно для заполения';
    }
  } else if (validatePhone(valPhone) != true) {
    if (check = document.querySelector('#warn-phone') == null) {
      setWarn();
    } else {
      unsetWarn();
      setWarn();
    }
  } else if (validatePhone(valPhone) == true) {
    if (check = document.querySelector('#warn-phone') != null) {
      unsetWarn();
      console.log('good number');
      userData[userPhone] = valPhone;
      console.log('==========================', userData);
    } else {
      console.log('good number');
      userData[userPhone] = valPhone;
    }
  };

  /* Условия warn для пароля */ 
  let checkPass;
  if (validatePass(valPass) != true) {
    if (checkPass = document.querySelector('#warn-pass') == null) {
      setWarnPass();
    } else {
      unsetWarnPass();
      setWarnPass();
    }
  } else if (password.value.length == 0) {
    if (checkPass = document.querySelector('#warn-pass') == null) {
      setWarnPass();
      warnPass.innerText = 'Поле обязательно для заполения';
    } else {
      unsetWarnPass();
      setWarnPass();
      warnPass.innerText = 'Поле обязательно для заполения';
    }
  } else if (password.value != repPassword.value) {
    setWarnPass();
    warnPass.innerText = 'Пароли не совпадают';
  } else {
    if (checkPass = document.querySelector('#warn-pass') != null) {
      unsetWarnPass();
      console.log('good password');
      userData[userPassword] = password.value;
    } else {
      console.log('good password');
      userData[userPassword] = password.value;
    }
  };

  /* Условия warn для чекбокса */
  if (agree.checked != true) {
    if (checkPass = document.querySelector('#warn-agree') == null) {
      setWarnCheck();
    } else {
      unsetWarnCheck();
      setWarnCheck();
    }
  } else if (checkPass = document.querySelector('#warn-agree') != null) {
    unsetWarnCheck();
  }




  if ((userData[userLogin].length > 1) && (userData[userPassword].length > 1) && (userData[userPhone].length > 1) && (agree.checked == true)) {
    console.log('Obj  - email / password : ', userData, agree.checked);
    localStorage.setItem('Login/Pass', JSON.stringify(userData));
    sigIn.style.display = 'none';
    let alert = document.querySelector('.alert');
    alert.style.display = 'block';
    setTimeout(() => {
      alert.style.display = 'none';
      logIn.style.display = 'block';
    }, 1000);


  } else {
    console.log('error input user data', userData);
  }

  console.log('click');
})



/* 

PART 2 - LOGIN 

*/

let logIn = document.querySelector('#logIn');
let sigIn = document.querySelector('#signIn');
let btnSwitchForm = document.querySelectorAll('.reg__auth')

btnSwitchForm.forEach((e) => {
  e.addEventListener('click', () => {
    if (sigIn.style.display != 'none') {
      sigIn.style.display = 'none';
      logIn.style.display = 'block';
      console.log('sw to auth')
    } else if (sigIn.style.display == 'none') {
      sigIn.style.display = 'block';
      logIn.style.display = 'none';
      console.log('sw to reg')
    }
  })
})


let btnLogin = document.querySelector('#auth');
let matchUserData;
let getUserData;

function setWarnTest(trgEmail, trgLabelEmail, trgPass, trgLabelPass) {
  trgEmail.classList.add('warn');
  trgLabelEmail.classList.add('warn');
  trgPass.insertAdjacentHTML('afterEnd', '<span class="warn-span" id="warn-pass"></span>');
  warnPass = document.querySelector('#warn-pass');
  warnPass.innerText = 'Неправильный логин или пароль';
  trgPass.classList.add('warn');
  trgLabelPass.classList.add('warn');
};

//LOGIN
btnLogin.addEventListener('click', () => {

  getUserData = JSON.parse(localStorage.getItem('Login/Pass'));
  let emailLogIn = document.querySelector('#auth-email');
  let labelLogIn = document.querySelector('section.auth .email');
  let PassLogIn = document.querySelector('#auth-pswd');
  let Passlabel = document.querySelector('section.auth .pswd');

  if ((emailLogIn.value == getUserData.email) && (PassLogIn.value == getUserData.password)) {
    console.log('sucsess')
    window.location.href = 'content.html';
  } else {
    setWarnTest(emailLogIn, labelLogIn, PassLogIn, Passlabel)
    console.log('error');
  }
})