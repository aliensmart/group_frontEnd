import React from 'react'

const UserLogin = ()=>{
    return(
        <div>
      <form>
        <label for="username">Username</label>
        <input type="text" placeholder="username" id="username"/>
        <label for="password">Password</label>
        <input type="text" placeholder="password" id="password"/>
        <input type="button" value="login"/>
      </form>
      <a href="#">Don't have an account?</a>
      </div>
    )
}

export default UserLogin