import React, { Component} from 'react';
import './Form.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Checkbox from './Checkbox';
import Radio from './Radio';

toast.configure()
class Form extends Component {
    state = {
                name : '',
                age : '',
                hobbies: '',
                loading: false,
        countries: [
                    {name: "India", value:"india"},
                    {name: "United States", value:"unitedStates"}
                    ],
        technologies: [
                    {id: 1, name: "JavaScript", isChecked: false, showRadio: false},
                    {id: 2, name: "React JS", isChecked: false, showRadio: false},
                    {id: 3, name: "Vue JS", isChecked: false, showRadio: false},
                    {id: 4, name: "Angular JS", isChecked: false, showRadio: false}
        ]
        
    }
    nameHandler = (e) => {
        this.setState({name : e.target.value})
    }

    ageHandler = (e) => {
        this.setState({age : e.target.value})
    }

    hobbyHandler = (e) => {
        this.setState({hobbies: e.target.value})
    }
    countryChanger = () => {
        
        const a = document.getElementById('input').value;
        let array=[];
        if(a === 'india'){
           array = ['Select','Tamilnadu', 'Maharashtra', 'West Bengal']
        }
        
        else if(a==='unitedStates'){
            array= ['Select','Washington', 'Florida', 'California']
        }
        else if(a==='Select'){
            array= ['Please select country']
        }
        else{
             array=[];
        }
        let string="";
        for(let i=0; i<array.length; i++){
            string=string+"<option>"+array[i]+"</option>";
        }
        string="<select name='lol' >"+string+"</select>";
        console.log(string);
        document.getElementById('output').innerHTML = string;

    }

    stateChanger = () => {
        
        const a = document.getElementById('output').value;
        let array=[];
        if(a === 'Tamilnadu'){
           array = ['Select','Chennai', 'Vellore', 'Pondicherry']
        }
        
        else if(a==='Maharashtra'){
            array= ['Select','Mumbai', 'Pune', 'Thane']
        }
        else if(a==='West Bengal'){
            array= ['Select','Kolkata', 'Siliguri', 'Durgapur']
        }
        else if(a==='Washington'){
            array= ['Select','Seattle', 'Olympia', 'Tacoma']
        }
        else if(a==='Florida'){
            array= ['Select','Miami', 'Orlando', 'Jacksonville']
        }
        else if(a==='California'){
            array= ['Select','San Francisco', 'Los Angeles', 'San Jose']
        }
        else if(a==='Select country' || a==='Select'){
            array= ['Please select state']
        }
        else{
             array=[];
        }
        let string="";
        for(let i=0; i<array.length; i++){
            string=string+"<option>"+array[i]+"</option>";
        }
        string="<select name='lol' >"+string+"</select>";
        console.log(string);
        document.getElementById('output1').innerHTML = string;

    }

    submitHandler = (event) => {
        let newAge = this.state.age;
        newAge = null;
        event.preventDefault();
        document.getElementById('survey').reset();
        alert('Your form is submitted!')
        let techs = this.state.technologies;
        techs.forEach(tech => {
            tech.isChecked = false;
            tech.showRadio = false;
        })
        this.setState({age : newAge, technologies: techs})
        
    }
    cancelHandler = () => {
        let newAge = this.state.age;
        newAge = null;
        document.getElementById('survey').reset();
        let techs = this.state.technologies;
        techs.forEach(tech => {
            tech.isChecked = false;
            tech.showRadio = false;
        })
        this.setState({age : newAge, technologies: techs})
        toast.info('Form cleared! You can re-enter values')
    }
    checked = (event) => {
        let techs = this.state.technologies;
        techs.forEach(tech => {
            if(tech.name === event.target.value)
            tech.isChecked = event.target.checked
            tech.showRadio = event.target.checked
        })
        this.setState({technologies: techs})
    }
    fetchData = () => {
        this.setState({loading : true})
        setTimeout(() => {
            this.setState({loading : false});
        }, 2000)
    
    }
    render(){
        const {loading} = this.state;
        let mes =null;
        if(loading){
            mes = <p style={{marginLeft:'35%', padding:'10px' }}>Your form is submitted!</p>
        }
        let content = null;
        this.state.technologies.forEach( tech => {
            // console.log(tech);
            if(tech.showRadio)
            content= <Radio />
            
        })
        let para = null;
        let age = this.state.age;
        age=parseInt(age);
        let diff = null;
        if(age >=1){
            if(age>34){
                const dob = 2020-age;
                console.log(dob)

                const a = 1986 - parseInt(dob);
                console.log(a)

                diff = 35;
                console.log(diff)
            para = <p style={{fontSize:'small', display:'inline'}}>It's been {diff} years since Halley's comet appeared last time. You were {a} year(s) old then!</p>

            }
            else { 
                 diff = 35;
            para = <p style={{fontSize:'small', display:'inline'}}>It's been {diff} years since Halley's comet appeared last time. You were not even born then!</p>

            }
        }
        else para=null;

    return(
    <div className="Body">
        <header className="Header"><h1>Survey Form</h1></header>
        <div className="Form" >
            <form onSubmit={this.submitHandler} id="survey">
                <label style={{width:'100%'}}>Name :<input type="text" placeholder="Enter your name" onChange={this.nameHandler} /></label><br/>
                <label style={{width:'100%'}}>Age :<input type="number"  onChange={this.ageHandler} value={this.state.age} placeholder="Enter your age" />{para}</label><br />
                <label style={{display:'grid', gridTemplateColumns:'50%'}}>Hobbies : 
                    <input  type="text" placeholder="Enter a hobby" onChange={this.hobbyHandler}/> 
                    <input  type="text" placeholder="Enter a hobby" onChange={this.hobbyHandler} /> 
                    <input  type="text" placeholder="Enter a hobby" onChange={this.hobbyHandler} /> 
                    <input  type="text" placeholder="Enter a hobby" onChange={this.hobbyHandler} /> 
                    </label>

                    <label > Technologies:
                        <ul style={{listStyle: 'none'}} >
                            {this.state.technologies.map(tech => {
                                return (
                                    <> <Checkbox clicked={this.checked} {...tech} />{content} </>
                                )})}
                        </ul>
                        
                    </label><br />

                <label>Country : 
                    <select className="country" id="input" onChange={this.countryChanger}>
                        <option>Select</option>
                        {this.state.countries.map(country => (
                            <option key={country.value} value={country.value}>{country.name}</option>
                        ))}
                    </select>
                </label><br/>
                    <div >
                        <label>State :
                            <select className="country" id="output" onChange={this.stateChanger}>
                                <option >Please select country</option>
                            </select>
                        </label>
                    </div>
                    <div >
                        <label>City :
                            <select className="country" id="output1" >
                                <option >Please select state</option>
                            </select>
                        </label>
                    </div>
                
            </form>
            {mes} 
            <button className="submit" onClick={this.fetchData} disabled={loading} >
                    { loading && <i className="fa fa-refresh fa-spin"></i> }
                    { loading && <span>Loading...</span> }
                    { !loading && <span>Submit</span> }

                    
                </button>
                

            <button onClick={this.cancelHandler} className="cancel">Cancel</button>

                            

        </div>
    </div>
    );
    }
}
export default Form;