import {useState} from "react";
import Model from "./Model";
import './component.css';



export default function LoanAppForm() {
    const [form, setForm] = useState({name:"", phoneNumber:'', age:'', isEmployee:true, salary:2 });
    const [isVisible, setIsVisible] = useState(false);
    const [error, setError] = useState("")


    const {age, phoneNumber} = form ;
    function handleIsDisabled(event) {
        event.preventDefault();
        setError(null)
       
        if(age < 18 || age > 100){
           setError("The age is not allowad")
        } else if (phoneNumber.length < 10 || phoneNumber.length > 12){
            setError("the phone number is not correct")
        }
        setIsVisible(true)
     
       
    }
    function handleDivCLick() {
        if(isVisible){
            setIsVisible(false)
        }
    }

  
    let isDisabled = form.name == "" || form.phoneNumber == "" || form.age == "" ;
    


    return(
        
        <div  className="container flex"  onClick={handleDivCLick}>
           
            <form  className="flex" >
                <h1>Reaquesing a loan </h1>
                <hr/>
                
                <label >Name:</label>
                <input type="text" maxLength="7" value={form.name} onChange={(event) => {setForm({...form, name:event.target.value})}}/>
                
                <label for="phone">Phone Number:</label>
                <input id="phone" type="number" maxLength="12" value={form.phoneNumber} onChange={(event) => {setForm({...form, phoneNumber:event.target.value})}}/>
            
                <label for="age" min="18" max="90">Age:</label>
                <input id="age" type="number" value={form.age} onChange={(event) => {setForm({...form, age:event.target.value})}}/>
                
                <label>Are you an employee?</label>
                <input className= "check" type="checkbox" checked={form.isEmployee} onChange={(event) => {setForm({...form, isEmployee:event.target.checked})}}/>
           
                <label>Salary</label>
                <select value={form.salary} onChange={(event) => {setForm({...form, salary:event.target.value})}}>
                    <option value="1">less than 500$</option>
                    <option value="2">less than 1000$</option>
                    <option value="3">less than 2000$</option>
                </select>
                
                <button className={isDisabled ? "Disabled" : ""} disabled={isDisabled} onClick={handleIsDisabled} >Submit</button>
                    
                    
            </form>
            <Model isVisibleSub={isVisible} errorMessage={error} />
        
        </div>
      
    
       
        
       
    )
}
        
      
                

                
                    
                


                
                    
                
                
                
                

                
                
                    
                
                
                
            