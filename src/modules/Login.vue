<template>
    <div id="wrapper">
        <h1>DDMP</h1>
        <div id="content">
            <div id="loginform">
                <div class="inputgroup" id="usernamegroup">
                    <label for="username">Username</label>
                    <input type="text">
                </div>
                <div class="inputgroup" id="passwordgroup">
                    <label for="password">Password</label>
                    <input type="password">
                </div>
                <input id="btnlogin" type="button" value="Log In">
            </div>
        </div>
    </div>
</template>
<style>
html,
body {
    background-color: #16325c;
}

#wrapper {
    padding-top: 20px;
    margin: 0 auto;
    max-width: 380px;
    display: block;
}

#content {
    display: block;
    margin-bottom: 24px;
    background-color: #fff;
    padding: 20px;
    border: 1px solid #D8DDE6;
    color: #16325c;
    border-radius: 4px;
}

#loginform {
    display: block;
}

#loginform .inputgroup {
    display: block;
    width: 100%;
}

#loginform .inputgroup label {
    width: 100%;
    display: block;
    text-align: left;
    font-size: 12px;
    color: #54698d;
    margin: 0 0 8px 0;
    line-height: inherit;
}

#loginform .inputgroup input {
    width: 100%;
    display: block;
    text-align: left;
    border: 1px solid #D8DDE6;
    border-radius: 4px;
    background-color: #fff;
    font-family: SFS, Arial, sans-serif;
    box-sizing: border-box;
    -webkit-appearance: none;
    font-size: 14px;
    transition: all 0.1s;
    height: 44px;
    padding: 12px;
    margin-top: 8px;
    margin-bottom: 16px;
}

#btnlogin {
    width: 100%;
    height: 44px;
    border: none;
    border-radius: 4px;
    background-color: #0070d2;
    color: #fff;
    padding: 12px 24px;
    font-size: 14px;
    font-family: SFS, Arial, sans-serif;
}
</style>
<script>
export default {
  name: 'Login'
}
</script>
