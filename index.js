const logIn = document.querySelector(".log-in"),
      wrapper = document.querySelector(".body-text");
let lg;

logIn.addEventListener("click", () => {
  wrapper.innerHTML=`
  <div class="log-in-form">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputUsername1">Username</label>
      <input type="username" class="form-control" id="exampleInputUsername1" placeholder="Username">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button id="logIn" type="submit" class="btn btn-primary">Log In</button>
  </div>
`
lg = document.querySelector("#logIn");
lg.addEventListener("click", () => {
  wrapper.innerHTML = "";
})
})

