import styled from "styled-components";


export const ModalWrapper = styled.div`
    display : flex;
    position:fixed;
    width: 100%;
    height: 100%;;
    top:0;
    left:0;
    z-index:99;
    background-color:rgba(0,0,0,0.6);
    
    span{
        display: inline-block;
        position:absolute;
        top: 50%;
        left: 50%;
        border-radius: 10px;
        transform: translate(-50%, -50%);
        height: fit-content;
        padding:10px;

        background-color: #F84242;
        color: #fff;
        
    }

`;