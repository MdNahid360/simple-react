import React from 'react';
import './Players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const Players = (props) => {
    console.log(props);
    const {img, name,salary,born,testDbt,lastTest}=props.players

    return (
        <div>
             <div className="">
             <div className="img-box cart p-3">
              <div className="cart-body">
                <div className="img-box">
                <img className="img" src={img} alt=""/>
                </div>
                    <h6 className=" mt-2  ">{name}</h6>
                    <h6 className="nh font-weight-bold bgh">$ {salary}</h6>
                    <div className="text-left px-3">
                    <p>Born : <small>{born}</small></p>
                    <p>Test debut (cap 46) : <small>{testDbt}</small></p>
                    <p>LastTest : <small>{lastTest}</small></p>
                    </div>
           
            </div>
            <div className="cart-footer bg-warning">
            <button className="plr btn px-4"
                  onClick={() => props.addPlayer2(props.players)}
                ><FontAwesomeIcon icon={faPlus} />  Add Player</button>
            </div>
            
         
              </div>
             </div>
        </div>
    );
};

export default Players;