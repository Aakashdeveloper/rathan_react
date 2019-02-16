import React, {Component} from 'react';

class Lifecycle extends Component{
    // 1.GET DEFAULT STATE
    constructor(props){
        super(props)

    // 2.SET INITAL STATE
        this.state = {
            title: "Lifecycle"
        }
    }

    // 3.BEFORE GETS CREATED
    componentWillMount(){
       
    }
    componentWillUpdate(){
        console.log("will update");
        // this.setState({title:''});
    }

    componentDidUpdate(){
        console.log("did update");
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.title === "Something else"){
            return false
        }
        return true;
    }

    // 4.RENDER JSX
    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div onClick={() => this.setState({title:'Something else1]'})}>
                Click
                </div> 
            </div>
        )
    }

    //5.AFTER A COMPONENT IS MOUNTED
    componentDidMount(){
        document.querySelector('h1').style.color="red";
    }


}

export default Lifecycle;


// GET DEFAULT STATE
// SET INITAL STATE
// BEFORE GETS CREATED
// RENDER JSX
// AFTER A COMPONENT IS MOUNTED
