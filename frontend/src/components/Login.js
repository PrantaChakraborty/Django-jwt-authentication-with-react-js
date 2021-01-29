import { useState } from "react"

const Logout = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <form className="login-form">
            <div className="form-control">
                <label>Username</label>
                <input
                    type="text"
                    placeholder="User Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="btn-login">
                Login
            </button>
        </form>
    )
}

export default Logout
