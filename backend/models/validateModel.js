const Validate =  (data)=> {
    let ok=false
    
    const username = data.login;
    const password = data.password;
  
          if (username=='am000111@gmail.com' && password == '14141410000') {
                 ok = true
  
          } return(ok)
  };
  
  
  export default Validate;