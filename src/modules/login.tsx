import { FC, useState } from "react";



const Login:FC = ()=>{
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const inputLoginHandle = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setLogin(e.target.value)
    }

    const inputPasswordHandle = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
    }


    return(
        <div style={{padding:'10px', maxWidth:'500px', margin:'0 auto' }}>
          <form>
            <div className="mb-3">
                <label className="form-label">Login</label>
                <input type="login" className="form-control"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" >Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}


export default Login