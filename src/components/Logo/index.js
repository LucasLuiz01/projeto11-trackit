import LogoImage from "../../assets/Logo.jpg";

export default function Logo(props) {
    return <img width={props.width} height={props.height} src={LogoImage} />
}