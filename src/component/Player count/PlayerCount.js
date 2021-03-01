import React from 'react';
import './PlayerCount.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaseballBall } from '@fortawesome/free-solid-svg-icons'
const PlayerCount = (props) => {
   console.log(props);
     let sech = props.details;
        let name = "";
        let playerAmount ="";
        let total = "";
 
      
       for (let i = 0; i < props.details.length; i++) {
           const element = props.details[i];
           console.log(element.name);
           name = element.name + name;
       }
       for (let i = 0; i < props.details.length; i++) {
        const amount = props.details[i];
        console.log(amount.salary);
        playerAmount = amount.salary;
    }
      
    for (let i = 0; i < props.details.length; i++) {
        const totalSalary = props.details[i];
         total = total + totalSalary.salary;
    } 

    return (
        <div>
             <div className="player-ifo mt-4 ">
                    
                   <h2 >players :{props.details.length}</h2>
               
               <h6> <b className="text-secoundary clr">Name :</b>   <small>{name}</small></h6>
               
              <h6><b className="text-secoundary clr">player salary :</b> {playerAmount}</h6>
              <h6 className="total"><b className="text-secoundary clr">total amount :</b> {total}</h6>
                     
                      <a href="#" className="btn mt-4 font-weight-bold btn-primary nahid"> Submit</a>
             </div>   
           
        </div>
    );
};


export default PlayerCount;