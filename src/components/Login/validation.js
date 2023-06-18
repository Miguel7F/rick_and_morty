export default function validation({email,password}){
    var validaCorreo = /^(([^<>()\[\]\\.,;:\s@”]{7,35}(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]{1,35}\.)+[a-zA-Z]{2,}))$/
    var validaPassword=/^(?=.*\d)\S.{6,10}$/
       

    if(email && email!=="Debe llenar el campo email"){
        if(!validaCorreo.test(email)){
            email="El email debe cumplir con el formato requerido"
        }else{email="Correcto"}
    }else { email="Debe llenar el campo email"}

    if(password && password!=="Debe llenar el campo password"){
        if(!validaPassword.test(password)){
            password="El password debe cumplir con el formato requerido"
        }else{password="Correcto"}
    }else { password="Debe llenar el campo password"}

    return {email,password}
}

//console.log(validation({}))