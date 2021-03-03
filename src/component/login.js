function loginPage(){
    return(
        <div className="loginApp">
            <form className="formLogin">
                <input type="text" name="nuserName" placeholder="UserName" />
                <input type="text" name="npassWord" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )

}

export default loginPage;