import { useState } from "react"

const Logout = () => {
    const [loginData, setLoginData] = useState({ username: "", password: "" })
    return (
        <form className="login-form">
            <div className="form-control">
                <label>Username</label>
                <input
                    type="text"
                    placeholder="User Name"
                    value={loginData.username}
                    onChange={(e) => setLoginData.username(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(e) => setLoginData.password(e.target.value)}
                />
            </div>
            <button type="submit" className="btn-login">
                Login
            </button>
        </form>
    )
}

export default Logout
