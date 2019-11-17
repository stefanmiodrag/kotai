import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonLink = styled(Link)`
border-radius: 3px;
text-decoration: none;
transition: all 0.15s linear 0s;
background-color: #59cb59;
color: #fff;
padding: 8px;
display: inline-block;

:focus {
    background: #2bb656;
    outline: none;
}

:hover {
    background: #2bb656;
}

:active {
    transform: translateY(1px);
    background: #0ca750;
}
`