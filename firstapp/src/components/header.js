import React, {Component} from 'react';

class Header extends Component{

    constructor(props){
        super(props);

        this.state={
            title:'React App',
            text:'Search box',
            search:'Enter your text'
        }
    }

    inputChange(event){
        console.log(event.target.value)
        this.setState({search:event.target.value})
        this.props.newsSearch(event.target.value)
    }
    render(){
        return(
            <header>
                <div className="logo"
                onClick={()=>{console.log("hii")}}>
                {this.state.title}
                </div>
                <center>
                    <input onChange={this.inputChange.bind(this)}/>
                    <p>{(this.state.search)?this.state.search:"Enter your text"}</p>
                </center>
            </header>
        ) 
    }
}


export default Header;



/*
const Header = () => {
    return(
        <div>Header</div>
    )
}

const styles = {
            header:{
                backgroundColor:'tomato'
            },
            logo:{
                color:'#fff',
                textAlign:'center',
                fontSize:'40px'
            }
        }
        return(
            <header style={styles.header}>
                <div style={styles.logo} >Logo</div>
                <center>
                    <input/>
                </center>
            </header>
        ) 
*/
