import axois from 'axios';


export  const  login = (email, password,history) =>  {
    console.log("Onsubmit login")
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res =  axois.post("https://localhost:5001/api/users/login", body, config).then(
            res=>{
                localStorage.setItem("auth",JSON.stringify(res.data));
                history.push("/");
                window.location.reload();
            }
        );

        console.log("Try")

    } catch (error) {
        console.log("error");
        console.log(error);
    }


};


export  const  signup = (name,email, password,confirmpassword,loginAuthor) =>  {
    console.log("Onsubmit login")
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({name,email, password,confirmpassword});

    try {
        const res =  axois.post("https://localhost:5001/api/users/register", body, config).then((res)=>console.log(res));
        console.log("Try")
        // console.log(res)
    } catch (error) {
        console.log("error");
        console.log(error);
    }
};
