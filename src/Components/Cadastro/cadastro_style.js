import styled from "styled-components";
import { LoginBox, MainBox, LogoContainer, Logo, FormBox, UserInput, Line } from "../Login/login_style.js";
import email from "../../Assets/email.png";
import camera from "../../Assets/camera_foto.png";
import cpf from "../../Assets/cpf.png";
import cadeado from "../../Assets/cadeado_senha.png";
import endereco from "../../Assets/endereço.png"

export const RegisterMainBox = styled(MainBox)`
height: 145vh;
background-size: cover;
input:nth-child(5){
background-image: url(${email});
}
input:nth-child(8){
    background-image: url(${camera});
}
input:nth-child(11){
    background-image: url(${cpf});
}
input:nth-child(14){
    background-image: url(${endereco});
}
input:nth-child(17), input:nth-child(20){
    background-image: url(${cadeado});
}
div:nth-child(6), div:nth-child(9){
    height: 0.3vh;
}
`
export const RegisterBox = styled(LoginBox)`
background-color: #1D0A33;
height: 128vh;
width:33vw ;
`
export const RegisterLogoContainer = styled(LogoContainer)`
height: 30vh;
align-items: flex-end;
`
export const RegisterLogo = styled(Logo)`
 width: 10.55vw;
`
export const RegisterForm = styled(FormBox)`
position: relative;
top:0.5vh;
/* border:solid; */
height:76vh;
width:78%;
label{
    top:1.4vh;
    left: 0;
}
`
export const RegisterInput = styled(UserInput)`
/* border: solid red; */
background-size:7.40%;
height:6vh;
background-position: 0 0.9vh;
padding-top: 0.2vh;
padding-left:2.4vw;
`
export const RegisterLine = styled(Line)`
`
export const InputBox = styled.div`
display: flex;
flex-direction: column;
/* border: solid; */
height: 10vh;
`