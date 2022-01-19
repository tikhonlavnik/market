const lgIn = document.querySelector("#logIn"),
      usernameIn = document.querySelector("#exampleInputUsername1"),
      emailIn = document.querySelector("#exampleInputEmail1"),
      passwordIn = document.querySelector("#exampleInputPassword1"),
      warn = document.querySelector(".warn"),
      inGroup = document.querySelector(".in-group"),
      mainPageInner = document.querySelector(".mainPageInner");
let myPage;

lgIn.addEventListener("click", () => {
  if(usernameIn.value != "Client" || emailIn.value != "loh@ml.ru" || passwordIn.value != "123") {
    warn.innerHTML = "Data is wrong, try again";
  } else if (usernameIn.value == "Client" && emailIn.value == "loh@ml.ru" && passwordIn.value == "123"){
    document.querySelector(".logIn-form").style.display = "none";
    inGroup.innerHTML = `<button type="button" class="btn btn-success order">Заявка</button>
    <button type="button" class="btn btn-success profile">Мой профиль</button>`
    // <button type="button" class="btn btn-success reg-in">Зарегистрироваться</button>`
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
              <img src="https://avatars.mds.yandex.net/get-zen_doc/3986710/pub_5fa5708047a34812ce63fb35_5fa570a547a34812ce643c11/scale_1200" id="userPhoto" alt="user photo" />
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="form-group">
                <label for="exampleInputPassword1">Name:</label>
                <label for="exampleInputPassword1">Client</label>
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

