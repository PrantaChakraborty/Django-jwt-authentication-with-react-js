import { useState } from "react"

const Signup = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        if (!username) {
            alert("Please type user name")
            return
        }
    }
    return (
        <form className="login-form" onSubmit={onSubmit}>
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
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Age</label>
                <input
                    type="text"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
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
                Sign Up
            </button>
        </form>
    )
}

export default Signup
