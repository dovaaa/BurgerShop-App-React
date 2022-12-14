import React from "react";
import "./Modal.css";
import Aux from "../../../hoc/auxil";
import Backdrop from "../Backdrop/Backdrop";
class Modal extends React.Component{
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show!==this.props.show;
    }
    componentDidUpdate(){
        console.log('modal updates here')
    }
    render(){
        return (
            <Aux>
            <Backdrop show ={this.props.show} clicked={this.props.modalClosed}></Backdrop>
              <div
                className="Modal"
                style={{
                  transform: this.props.show ? "translateY(0)" : "translateY(-100vh",
                  opacity: this.props.show ? "1" : "0",
                }}
              >
                {this.props.children}
              </div>
            </Aux>
          );
    }
}

export default Modal;
