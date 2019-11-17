import styled from "styled-components";

const HANDLE_BORDER_COLOR = type => {
    switch (type) {
        case "danger":
            return "#db3e3e";
        case "success":
            return "#0ca750";
        case "warning":
            return "#dd9903";
        default:
            return "#db3e3e";
    }
};

const HANDLE_BACKGROUND_COLOR = type => {
    switch (type) {
        case "danger":
            return "#ffd5d2";
        case "success":
            return "#d7f4d7";
        case "warning":
            return "#fdefcd";
        default:
            return "#ffd5d2";
    }
};

export const Alert = styled.div`
display: flex;
align-items: flex-start;
padding: 8px;
background-color: ${({ type }) => HANDLE_BACKGROUND_COLOR(type)};
border-width: 1px;
border-style: solid;
border-color: ${({ type }) => HANDLE_BORDER_COLOR(type)};
`