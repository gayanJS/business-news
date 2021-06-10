// import React, { useState } from "react";
// import { login } from '../Action/LoginRE';

// const LoginForm=()=> {

  

//     const [formData, setFromData] = useState(
//         {
//             email: '',
//             password: '',
//         }
//     );
//     console.log("Function Call")

//     const { email, password } = formData;

//     const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value })

//     const onSubmit = async e => {
//         console.log("Onsubmit")
//         e.preventDefault();

//         login(email, password);
//         console.log("Onsubmit login")

//     };
//   return (

    
//       <React.Fragment >
//       <form className="form"  onSubmit={e => onSubmit(e)}>
//       <label for="username">USERNAME</label>
//       <input  name="email" value={email} onChange={e => onChange(e)} type="text" id="username" />
//       <label for="password">PASSWORD</label>
//       <input name="password" value={password} onChange={e => onChange(e)} type="password" id="password" />
//       <input type="submit" value="LoginForm" className="submit" />
//       </form>
//     </React.Fragment>
//   );
// }

// export default LoginForm;