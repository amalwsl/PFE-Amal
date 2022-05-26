import User  from './userModel.js';



const Validate =  (data)=> {
    let ok=false
    console.log(User.users);
    
    const username = data.login;
    const password = data.password;
  
          if (username==User.users.login && password == User.users.password) {
                 ok = true
                 return(ok)
  
          } 
          else{
              console.log(username)
              console.log(password)
          }
  };
  
  
  export default Validate;

  //if (username=='am000111@gmail.com' && password == '14141410000')