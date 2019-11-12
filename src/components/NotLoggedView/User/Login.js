import React from 'react'

const UserLogin = ()=>{
    return(
        <div>
      <form>
        <h3>User Login</h3>
        <label for="username">Username</label>
        <input type="text" placeholder="username" id="username"/>
        <label for="password">Password</label>
        <input type="text" placeholder="password" id="password"/>
        <input type="button" value="login"/>
      </form>
      <a href="/user/signup">Don't have an account?</a>
      <a href="/provider">Go to Provider</a>
      </div>
    )
}

export default UserLogin