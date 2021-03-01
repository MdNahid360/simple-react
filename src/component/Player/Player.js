import React, { useState } from 'react';
import playerData from '../../plear data/player-data.json'
import Header from '../Header/Header';
import PlayerCount from '../Player count/PlayerCount';
import Players from '../Players/Players';
import './Player.css'
const Player = () => {
     const playerNum = playerData.slice(0,16);   
     const [players, setPlayers]=useState(playerNum)
    
     const[details, setplayerCount] = useState([])

   

   
    
    const addPlayer2 = (plr) =>{

        const newCount = [...details,plr];
        setplayerCount(newCount)
            console.log(newCount);
    }
    


    return (
        <div className="App overflow-hidden">

            {
                <Header></Header>
            }
                   <div className="row flex-column-reverse flex-lg-row overflow-hidden pt-5">
            <div className="col-lg-9 col-md-12 col-12 mls mt-4">
                    <div className="fow">
                         <div className="container mt-5">
                             <div className=" rwo">
                             {
                              players.map(plr => <Players players={plr}  addPlayer2={addPlayer2}></Players>)
                          }
                             </div>
                         </div>
                    </div>

            </div>
            {/* playerCount = {playerCount}  */}
            <div className="col-lg-3 col-md-12 col-12 container mt-lg-5 bg-white mt-0 mt-md-5 pt-2">
                    <PlayerCount details={details}></PlayerCount>
            </div>
        </div>
        </div>
    );
};

export default Player;