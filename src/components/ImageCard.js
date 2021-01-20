import React from 'react';

class ImageCard extends React.Component{

    constructor(props){
        super(props);
        this.imageRef = React.createRef();
    }
    state = {span:0}

    componentDidMount = ()=>{
        this.imageRef.current.addEventListener('load',this.setHeight);
    }

    setHeight = ()=>{
        const span = Math.ceil(this.imageRef.current.clientHeight/10.00);
        this.setState({span:span});
        console.log(span);
        

    }

    render(){
        return(
            
           <img
           style={{gridRowEnd:`span ${this.state.span}`}}
           ref={this.imageRef}
           src={this.props.src}
           alt={this.props.alt}
           onLoad={this.props.setHeight}/>
           
        );
    }
}
export default ImageCard;