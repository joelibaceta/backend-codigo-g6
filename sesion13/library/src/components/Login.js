import React from 'react'

function Login(props) {

    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [hasError, setHasError] = React.useState(false)

    const {loginCallback} = props

    function doLogin() {

        fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then((response) => {
            console.log(response.status)
            if (response.status == 401) {
                setHasError(true)
            } else {
                setHasError(false)
                return response.json()
            }
           
        }).then((data) => {
            localStorage.setItem("token", data.token)
            localStorage.setItem("currentUser", data.username)
            localStorage.setItem("role", data.role)
            loginCallback()
        })

    }

    function handleUsernameChanged (event) {
        setUsername(event.target.value)
    }

    function handlePasswordChanged (event) {
        setPassword(event.target.value)
    }

    return (
        <div>
            <fieldset>
                { hasError ? (
                    <div> A ocurrido un error </div>
                ) : null}
                <legend>Login</legend>
                <input placeholder="Username" value={username} onChange={handleUsernameChanged} />
                <input placeholder="Password" type="password" value={password} onChange={handlePasswordChanged}/>
                <br/>
                <button onClick={doLogin}>Iniciar Sesion</button>
            </fieldset>
        </div>
    )
}

export default Login