let btn = document.getElementById('btn');
let navBar = document.getElementById('nav-bar');
let npage = document.getElementById('npage');
let outres1 = document.getElementById('result1');
let outres2 = document.getElementById('result2');
let prepage = document.createElement('button')
prepage.addEventListener('click', Prev, true);
btn.addEventListener('click', request, true);
npage.addEventListener('click', NextPage, true);
let page = 1;
/**Функция запуска по клику */
function request() {

    outres1.innerHTML = '';
    let users = [];
    let req = fetch(`https://reqres.in/api/users?page=${page}`).then((e) => {
        return e.json()
    })
    req.then((result) => {
        users = result.data
        console.log(users)
        console.log(typeof users)

        if (users.length > 0) {
            const sortedUsers = users.sort((a, b) => a.first_name.localeCompare(b.first_name));

            sortedUsers.forEach(element => {
                outres1.innerHTML += `<div class='cart'>` + `<div>` + `<p>ID: ` + ` ${element.id}</p>` + " " + `<p>Name:  ${element.first_name} ` + `  ` + ` ${element.last_name} </p>` + " " + `<p>Email: ${element.email} </p>` + " " + `</div>` + `<img src="` + element.avatar + `"> </img>` + `</div>` + `<br>`;
            })

        } else {
            outres1.innerHTML = "<p>Page or User not found</p>"
        }
    })
}

function Prev(){
  page--;
  console.log(page)
  request()
  }

function NextPage() {
    page++;
    console.log(page)
    request();
    if ((page > 1) && (prepage.classList.contains(btn))){
        console.log(ok)
    }else if(page > 1){
      console.log('alredy')
      prepage.innerText = 'Prev';
      prepage.classList = 'btn'
      navBar.append(prepage);
    }
}
