function Register(){
    return (
        <div>
            <h1>Register</h1>
            <form>
                <label>Name</label><br/>
                <input type= "text"/><br/>
                <label>Email</label><br/>
                <input type = "email"/><br/>
                <label>Password</label><br/>
                <input type = "password"/><br/>
                <input type = "submit" value = "Register"/><br/>
            </form>

        </div>
    )
}

export default Register;
