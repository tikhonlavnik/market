// reg
const email = document.querySelector("#exampleInputEmail2"),
      username = document.querySelector("#exampleInputUsername2"),
      password = document.querySelector("#exampleInputPassword2"),
      number = document.querySelector("#exampleInputNumber2"),
      access = document.querySelector(".access"),
      country = document.querySelector(".country"),
      regBtn = document.querySelector("#regBtn");
      let arr = [];

class User {
  constructor(email, username, password, number, access, country){
    this.email = email,
    this.username = username,
    this.password = password,
    this.number = number,
    this.access = access,
    this.country = country
  }
}

regBtn.addEventListener("click", (e) => {
  let em = email.value,
      un = username.value,
      ps = password.value,
      nm = number.value,
      ac = access.options[access.selectedIndex].text;
      ct = country.options[country.selectedIndex].text;
      console.log(un)
  if (!em || !un || !ps || !nm) {
    document.querySelector(".warn2").innerHTML = "Заполните все поля";
  } else {
    let user = new User(em, un, ps, nm, ac, ct);
    document.querySelector(".regIn-form").style.display = "none";
    arr.push(user);
    console.log(arr);
  }
  
})

const lgIn = document.querySelector("#logIn"),
      usernameIn = document.querySelector("#exampleInputUsername1"),
      emailIn = document.querySelector("#exampleInputEmail1"),
      passwordIn = document.querySelector("#exampleInputPassword1"),
      warn = document.querySelector(".warn"),
      inGroup = document.querySelector(".in-group"),
      mainPageInner = document.querySelector(".mainPageInner");
let myPage;

lgIn.addEventListener("click", () => {
  if(usernameIn.value != arr[0].username && emailIn.value != arr[0].email && passwordIn.value != arr[0].password) {
    warn.innerHTML = "Data is wrong, try again";
  } else if (usernameIn.value == arr[0].username && emailIn.value == arr[0].email && passwordIn.value == arr[0].password){
    document.querySelector(".logIn-form").style.display = "none";
    inGroup.innerHTML = `<button type="button" class="btn btn-success order">Заявка</button>
    <button type="button" class="btn btn-success profile">Мой профиль</button>`
    // <button type="button" class="btn btn-success reg-in">Зарегистрироваться</button>
    myPage = document.querySelector(".profile");
    myPage.addEventListener("click", () => {
      mainPageInner.innerHTML = `
      <div class="mainPageInner">
      <div class="container">
        <div class="row position-relative">
          <div class="col-lg-4">
            <div class="form-group">
              <div class="row">
                <label for="exampleInputPassword1">Photo:</label>
              </div>
              <div class="row">
              // <img src="https://avatars.mds.yandex.net/get-zen_doc/3986710/pub_5fa5708047a34812ce63fb35_5fa570a547a34812ce643c11/scale_1200" id="userPhoto" alt="user photo" />
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="form-group">
                <label for="exampleInputPassword1">Name:</label>
                <label for="exampleInputPassword1">${arr[0].username}</label>
              </div>
            </div>
            <div class="row">
              <div class="form-group">
                <label for="exampleInputPassword1">Country:</label>
                <label for="exampleInputPassword1">Russia</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      `
    })
  }
})