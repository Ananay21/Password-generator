const button=document.querySelector("button.gen");
const cpyButton=document.querySelector("button.copy")
const inputBox=document.querySelector("input");

button.addEventListener("click",()=>{
    const pass=generatePassword();
    inputBox.value=pass;
})

cpyButton.addEventListener("click",()=>{
    inputBox.select();
    document.execCommand("copy");
})

function generatePassword(){
    const str="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*();',./{}[]<>?";
    const size=str.length;
    let pass="";
    while(pass.length<8){
        let index=Math.floor(Math.random()*size);
        pass+=str[index];
    }
    return pass;
}
