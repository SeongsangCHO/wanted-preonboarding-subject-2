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
    

`;

export const ModalContainer = styled.div`
    position:absolute;
    bottom: 0;
    left:50%;
    width: 90%;
    max-width: 1024px;
    height: 200px;
    border-radius: 20px;
    background-color: #fff;
    padding: 20px 0;
    transform: translate(-50%, 5%);

    button{
        display: inline-block;
        width: 100%;
        height: 50%;
        padding:20px;
        background-color: #fff;
        border: none;
        
        font-size: 1.3rem;
        text-align: left;
        font-weight: 600;
    }
    


`;