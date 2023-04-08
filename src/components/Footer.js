import React from 'react'

import { GAME_STATE_PLAYING,
} from "../Constants";

const Footer = ({onNewGameClick,onCpuClick,gameState}) => {
  return (
    <div className="panel footer">
      {
        gameState===GAME_STATE_PLAYING &&
        <button onClick={onCpuClick}>CPU Move</button>
      }
      {
        gameState !==GAME_STATE_PLAYING &&
        <button onClick={onNewGameClick}>New Game</button>
      }   
    </div>
  )
}

export default Footer;