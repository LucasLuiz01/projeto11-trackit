import { StyledInput } from "./styles";

export default function Input(props) {
    return <StyledInput placeholder={props.placeholder} type={props.type} />;
}