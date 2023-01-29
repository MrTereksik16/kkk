
function onLoginHandler(){
  const login = document.getElementById("login").value
  const password = document.getElementById("password").value

  fetch(`http://localhost:5000/users/auth/?login=${login}&password=${password}`)
    .then((e)=>e.json())
    .then((e)=>{
      if('error' in e){
        alert(e.error)
      }else{
        // ok
        // localStorage.setItem("token", e.token...)
      }
    })
    .catch((error)=>{
      alert(error)
    })
}
