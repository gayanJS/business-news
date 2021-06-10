import React, { useState } from "react";
<<<<<<< Updated upstream
import Login from "./Style/Login.css";
import { useSpring, animated } from "react-spring";

function App() {

   const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
=======
import "./Style/Login.css";
import { useSpring, animated } from "react-spring";
import Footer from './Footer';
import { login,signup } from '../components/Action/LoginRE';
import { useHistory } from "react-router";
import Navbar2 from './Navbar2';

// import RegisterForm from './RegisterForm'


function ValidateSignup(formdata){

  // name:'',
  //       email: '',
  //       password: '',
  //       confirmpassword:''
     let errors={};
  let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  let isValid=true;

  if(formdata.name==null || formdata.name.length<2){

    isValid=false;
    errors["name"]="Please enter your name.";
    
  }

  if(formdata.email==null || formdata.email.length<0){

    isValid=false;
    errors["email"]="Please enter your email.";
    
  }

  if(!pattern.test(formdata.email)){
    
    isValid = false;
    errors["email"] = "Please enter valid email address.";

  }

  if(formdata.password==null || formdata.password.length>7){

    isValid=false;
    if(formdata.password==null){
      errors["password"]="Please enter your password.";
    }
    if(formdata.password.length<8){
      errors["password"]="Your password must have at least 8 characters.";
    }
    
    
  }

  if(formdata.confirmpassword==null || formdata.confirmpassword.length>7||formdata.confirmpassword!=formdata.password){

    isValid=false;
    if(formdata.confirmpassword==null){
      errors["confirmpassword"]="Please enter your password.";
     // console.log("Please enter your password.")
    }
    if(formdata.confirmpassword.length<8){
      errors["confirmpassword"]="Your password must have at least 8 characters.";
      //console.log("Your password must have at least 8 characters..")
    }
    if(formdata.confirmpassword!=formdata.password){
      errors["confirmpassword"]="Password don't match";
      // console.log("Password don't match")
      // console.log(formdata.password,formdata.confirmpassword)
    }
    
  }
  //console.log(errors);
  return{errors,isValid};
}


function LoginA() {


  const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
>>>>>>> Stashed changes
  const loginProps = useSpring({
    left: registrationFormStatus ? -500 : 0, 
  });
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 500, 
  });

  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus 
      ? "solid 0px transparent"
      : "solid 2px #1059FF",  
  });
  const registerBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 2px #1059FF"
      : "solid 0px transparent", 
  });

  function registerClicked() {
    setRegistartionFormStatus(true);
  }
  function loginClicked() {
    setRegistartionFormStatus(false);
  }

  return (
<<<<<<< Updated upstream
    
  <div>
    

=======

    
  <div>
  <Navbar2/>
    
>>>>>>> Stashed changes
<div className="login-register-wrapper">

<div className="nav-buttons">
  <animated.button
    onClick={loginClicked}
    id="loginBtn"
    style={loginBtnProps}
  >
    Login
  </animated.button>
  <animated.button
    onClick={registerClicked}
    id="registerBtn"
    style={registerBtnProps}
  >
    Register
  </animated.button>
</div>
<div className="form-group">
  <animated.form action="" id="loginform" style={loginProps}>
    <LoginForm />
  </animated.form>
  <animated.form action="" id="registerform" style={registerProps}>
    <RegisterForm />
  </animated.form>
</div>
<animated.div className="forgot-panel" style={loginProps}>
<<<<<<< Updated upstream
  <a herf="#">Forgot your password</a>
</animated.div>
</div>

  </div>
    
  );
}

function LoginForm() {
  return (
    <React.Fragment>
      <label for="username">USERNAME</label>
      <input type="text" id="username" />
      <label for="password">PASSWORD</label>
      <input type="text" id="password" />
      <input type="submit" value="submit" className="submit" />
    </React.Fragment>
=======
  <a >Forgot your password</a>
</animated.div>
</div>
<>
  <Footer />
  </>
  </div>
  );
}

const LoginForm=()=> {
  
  const history=useHistory();

    const [formData, setFromData] = useState(
        {
            email: '',
            password: '',
        }
    );
    

    const { email, password } = formData;
    

    const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value })
  
    const onSubmit = async e => {
        console.log("Onsubmit")
        e.preventDefault();

        login(email, password,history)
        console.log("Onsubmit login")

    };
  return (
      <React.Fragment >
        {/* <form className="form"  onSubmit={e => onSubmit(e)}> */}
        <div>
        <label name="username">USERNAME</label>
        <input  name="email" value={email} onChange={e => onChange(e)} type="text" id="username" />
        <label >PASSWORD</label>
        <input name="password" value={password} onChange={e => onChange(e)} type="password" id="password" />
        <input type="submit" value="Submit" className="submit" onClick={(e)=>onSubmit(e)}/>
        </div>
        {/* </form> */}
      </React.Fragment>


>>>>>>> Stashed changes
  );
}

function RegisterForm() {
<<<<<<< Updated upstream
  return (
    <React.Fragment>
      <label for="name">name</label>
      <input type="text" id="name" />
      <label for="email">email</label>
      <input type="text" id="email" />
      <label for="password">password</label>
      <input type="text" id="password" />
      <label for="confirmpassword">confirm password</label>
      <input type="text" id="confirmpassword" />
      <input type="submit" value="submit" class="submit" />
    </React.Fragment>
  );
}

export default App;
=======


  const [formData, setFromData] = useState(
    {
         name:'',
        email: '',
        password: '',
        confirmpassword:''
    }
);

  
const {name, email, password,confirmpassword } = formData;

let IsValid=true;
const[ename,SetName]=useState();
const [eemail,setEmail]=useState();
const[ecpassoword,SetCpassword]=useState();

const onChange = (e,i) => {

  console.log(i)
  setFromData({ ...formData, [e.target.name]: e.target.value });
  console.log(formData);

   const {errors,isValid}=ValidateSignup(formData);
   //console.log("isValid"+isValid,"errors"+errors.email);
   IsValid=isValid;

   SetName(errors.name);
   setEmail(errors.email);
   SetCpassword(errors.confirmpassword);

   //console.log("IsValid"+IsValid,"error"+errors.confirmpassword);
   if(i>0){
     i--;
     onChange(e,i)
   }

}

const [loginAuthor, setLogin] = useState();
  var onSubmit = async e => {

    alert("Login as a author");
    
    //console.log(IsValid)
    console.log("Onsubmit")
    e.preventDefault();

    const {errors,isValid}=ValidateSignup(formData);
    //console.log("isValid"+isValid,"errors"+errors.email);
    IsValid=isValid;

    if(IsValid){
      signup(name, email, password,confirmpassword )
      console.log("Onsubmit signup")
    }else{
      SetName(errors.name);
      setEmail(errors.email);
      SetCpassword(errors.confirmpassword);
      console.log("not submit");
    }
    


    
};



  return (
    <React.Fragment>
      {/* <form className="form"  > */}
      <div>
      {/* <input  name="email" value={email} onChange={e => onChange(e)} type="text" id="username" /> */}
      
     <div>
       <label >name</label>
        <input type="text" id="name" name="name" value={name} onChange={e => onChange(e,2)} />
        <span style={{color: "red"}}>{ename}</span>
      </div>    
    
      <div>
      <label >email</label>
      <input type="text" id="email" name="email" value={email} onChange={e => onChange(e,2)} />
      <span style={{color: "red"}}>{eemail}</span>
      </div>

      <div>
      <label >password</label>
      <input type="password" id="password" name="password" value={password} onChange={e => onChange(e,2)} />
      <span style={{color: "red"}}>{ecpassoword}</span>
      </div>

      <div>
      <label >confirm password</label>
      <input type="password" id="confirmpassword" name="confirmpassword" value={confirmpassword} onChange={e => onChange(e,2)} />
      <span style={{color: "red"}}>{ecpassoword}</span>
      </div>

      < div style={{display:'flex', justifyContent:'center'}}>

      <label>
    Login as author 
    <input type="checkbox" name="name" onChange={(e)=>setLogin(e)}/>
  </label>
      </div>
      
      <input type="submit" value="submit" className="submit" onClick={(e)=>onSubmit(e,2)}/>
     
    
      </div>
      
      {/* </form> */}
    </React.Fragment>
  );
}
export default LoginA ;

>>>>>>> Stashed changes


