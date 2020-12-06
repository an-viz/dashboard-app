import React ,{ Component } from 'react';
import './Creator.css';
// import Sound1 from '../../assets/button-1.mp3';
// import Sound2 from '../../assets/button-22.mp3';
// import Sound3 from '../../assets/beep-30b.mp3';
// import { Howl, Howler } from 'react-howler';

class Creator extends Component{
    state={
        quotes:["red", "lightgreen", "blue", "yellow", "purple", "pink", "white"],
        colors: [],
    };


    changeBg = () => {
        const colors = this.state.quotes;
        const color = colors[Math.floor(Math.random() * colors.length)];
        console.log(color)
        const mono = colors[6];
        console.log(mono)
        let min= 1;
        let max= 18;
        let rand = (min + (Math.random() * (max-min))).toFixed(0);
        console.log(rand);
        document.getElementById(rand).style.backgroundColor = color;
        setInterval(
            () => this.setState({colors : mono}), 2000);
        // clearInterval(time);
        
    }
    render(){
        // let divStyle={
        //     height: "200px",
        //     width: "200px",
        //     backgroundColor: this.state.colors,
        //     margin: "30px 100px",
        //     borderRadius: "50%",
            
        // }

        return(
            <div className="Body">
            <header className="Header">
            <h1>Key-press Shape & Sound Creator</h1>
            </header>
            {/* <div className="container" onClick={() => this.changeBg()}>
                <div className="circle" style={{backgroundColor: this.state.colors}} ></div>
                <div  style={divStyle} ></div>
            </div> */}

                    <div class="container" onClick={this.changeBg}>
                        <div id='1' class="circle" style={{backgroundColor: this.state.colors}}></div>
                        <div id='2' class="circle" style={{backgroundColor: this.state.colors}}></div>
                        <div id='3' class="circle" style={{backgroundColor: this.state.colors}}></div>
                        <div id='4' class="circle" style={{backgroundColor: this.state.colors}}></div>
                        <div id='5' class="circle" style={{backgroundColor: this.state.colors}}></div>
                        <div id='6' class="circle" style={{backgroundColor: this.state.colors}}></div>
                        <div id='7' class="circle" style={{backgroundColor: this.state.colors}}></div>
                        <div id='8' class="circle" style={{backgroundColor: this.state.colors}}></div>  
                        <div id='9' class="circle" style={{backgroundColor: this.state.colors}}></div>  
                        <div id='10' class="circle" style={{backgroundColor: this.state.colors}}></div>  
                        <div id='11' class="circle" style={{backgroundColor: this.state.colors}}></div>  
                        <div id='12' class="circle" style={{backgroundColor: this.state.colors}}></div>  
                        <div id='13' class="circle" style={{backgroundColor: this.state.colors}}></div>  
                        <div id='14' class="circle" style={{backgroundColor: this.state.colors}}></div>  
                        <div id='15' class="circle" style={{backgroundColor: this.state.colors}}></div>  
                        <div id='16' class="circle" style={{backgroundColor: this.state.colors}}></div>  
                        <div id='17' class="circle" style={{backgroundColor: this.state.colors}}></div>  
                        <div id='18' class="circle" style={{backgroundColor: this.state.colors}}></div>  
                    </div>


            </div>
        );
    }
}

export default Creator;