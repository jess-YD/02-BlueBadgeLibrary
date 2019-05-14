function userSignUp() {
    let userName = document.getElementById('userSignUp').value;
    let userPass = document.getElementById('passSignUp').value;
    let url = 'http://localhost:3000/api/user/createuser'
    let newUserData = { user: { username: userName, password: userPass }};

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
    })
        .then(response => response.json())
        .then(function(response) {
            console.log(reponse.sessionToken);
            let token = response.sessionToken;
            localStorage.setItem('SessionToken', token);
        })
}

function userSignIn() {
    let userName = document.getElementById('userSignin').value;
    let userPass = document.getElementById('passSignin').value;
    let url = 'http://localhost:3000/api/user/signin';

    fetch(url)
        .then(response => response.JSON())
        .then(function(response) {
            console.log(response.sessionToken);
            let token = response.sessionToken;
            localStorage.setItem('SessionToken', token)
        })

}