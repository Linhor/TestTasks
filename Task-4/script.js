let btn = document.getElementById('btn');
let outres1 = document.getElementById('result1');
let outres2 = document.getElementById('result2');
let title = document.createElement('h2');
let title1 = document.createElement('h2');


btn.addEventListener('click', request, true);
/**Функция запуска по клику */
function request() {
  let page = document.getElementById('page').value
  console.log(page, '-------------------------www')
  outres1.innerHTML = '';
  let users = [];
  let userRes;
  console.log('-----------');
  console.log('Пункт №1: Получение данных');
  console.log('-----------');
  outres1.append(title1);
  title1.innerText = 'Пункт №1: Получение данных';
  let req = fetch("https://reqres.in/api/users?page=" + page)
    .then((e) => {
      return e.json()
    })
  req.then((result) => {
    users = result.data
    console.log('Данные получены :', users);
    console.log('-----------');
    console.log('Пункт №2: Карточки юзеров');
    console.log('-----------');
    outres1.append(title);
    title.innerText = 'Пункт №2: Карточки юзеров';
    console.log(typeof users)
    users.forEach(element => {
      outres1.innerHTML += `<div class='cart'>` + element.id + " " + element.last_name + ' ' + element.first_name + " " + element.email + " " + `<img src="` + element.avatar + `"> </img>` + `</div>` + `<br>`;

    })
    console.log('-----------');
    console.log('Пункт №3: База данных юзеров сортировка по имени');
    console.log('-----------');
    outres1.append(title);
    title.innerText = 'Пункт №3: База данных юзеров сортировка по имени';
    userRes = users.reduce((acc, current) => {
      return acc + `${current.first_name}, `
    }, '')
    console.log(userRes)
    outres1.innerHTML += `<div id='userRes'>` + userRes + `</div>` + `<br>`;



    console.log('-----------');
    console.log('Пункт №4: Ключи юзера');
    console.log('-----------');
    console.log('Все ключи объекта :', ...Object.keys(users[1]));
    outres1.innerHTML += `<h2>Пункт №4: Ключи юзера</h2>` + Object.keys(users[1]) + `<br>`;


    let sort = document.querySelector('#userRes');
    let sortName = sort.innerHTML.split(" ")
    sortName.sort()
    sort.innerHTML = sortName.join(' ')

  })




}