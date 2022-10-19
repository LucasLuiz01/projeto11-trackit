import { StyledNavbar } from "./styles"
export default function Navbar (props){
    return <StyledNavbar ><span>{props.text}</span><img src={props.img} /></StyledNavbar>
}