const users=[];

function signup()
{
    let username=document.getElementById('username').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;



const user ={
    username:username,
    email:email,
    password:password
};
users.push(user);
alert('kayıt oluşturuldu');
window.location.href="login.html";


}

function login()
{
    let loginUsername=document.getElementById('loginUsername').value;
    let loginPassword=document.getElementById('loginPassword').value;


    const user= users.find(function(u)
    {
        return u.username==loginUsername && u.password ==loginPassword;
    }
    );

    if(user)
    {
        alert('giriş başarılı')
        window.location.href="index.html";
    }
    else{
            alert('hatalı giriş bilgisi..')
    }
}

