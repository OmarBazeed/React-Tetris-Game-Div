import React, { useState } from 'react';
import Display from './Display';
import Stage from './Stage';
import StartButton from './StartButton';

import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

import { StyledTetris, StyledTetrisWrapper } from './Styles/StyledTetrisWrapper';
import { createStage } from '../gameHelpers';

const Tetris = ()=>{

    const [dropTime , setDropTime] = useState(null);
    const [gameOver , setGameOver] = useState(false);

    const [player , updatePlayerPos , resetPlayer] = usePlayer();
    const [stage , setStage] = useStage(player);


    
    const startGame = ()=>{
        // reset everything
        setStage(createStage());
        resetPlayer();
    }
    const movePlayer = dir =>{
        updatePlayerPos({x:dir , y:0})
    }
    const drop = ()=>{
        updatePlayerPos({x:0, y:1 , collided:false})
    }
    const dropPlayer = ()=>{
        drop();
    }
    const move = ({keyCode})=>{
        if(!gameOver){
            if(keyCode === 37){
                movePlayer(-1)
            }else if(keyCode === 39 ){
                movePlayer(1)
            }else if(keyCode === 40){
                dropPlayer()
            }else if(keyCode === 41){
                dropPlayer()
            }
        }
    }


return (
    <StyledTetrisWrapper role='button' tabIndex='0' onKeyDown={e=>move(e)}>

        <StyledTetris>

            <Stage stage={stage} />

            <aside>
                {gameOver ? <Display text='Game Over' gameover={gameOver} /> :
                (<div>
                    <Display text='Score'  />
                    <Display text='Rows' />
                    <Display text='Level' />
                </div>)}

                <StartButton callback={startGame} />
            </aside>
            
        </StyledTetris>
        
    </StyledTetrisWrapper>
)
}

export default Tetris;