import React, { Component } from 'react'
import {ModalWrapper, ModalContainer} from "./style"

class OrderFilterModal extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount=()=>{
        window.addEventListener('mousedown',this.handleClickOutSide);
    }

    componentWillUnmount=()=>{
        window.removeEventListener('mousedown',this.handleClickOutSide);
        
    }

    handleButton = (event)=> {
        this.props.selectValue(event.target.value); 
        this.props.close();
    }

    setContainerRef=(node)=>{
        this.containerRef=node;
    }

    handleClickOutSide=(event)=> {
        if (this.containerRef && !this.containerRef.contains(event.target)) {
            this.props.close();
        }
        
    }
    
    render() {
        return (           
            <ModalWrapper >
                <ModalContainer ref={this.setContainerRef}>
                    <button name="sortGroup" value="recentOrder" onClick={this.handleButton}>최신순</button>
                    <button name="sortGroup" value="lowPriceOrder" onClick={this.handleButton}>최저가순</button>
                </ModalContainer>
            </ModalWrapper>                     
        )
    }
}

export default OrderFilterModal;