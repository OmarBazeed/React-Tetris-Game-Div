import React from 'react';
import Cell from './Cell';

import { randomTetromino } from '../tetrominos';

const Stage = ({stage})=>{
    

    console.log(randomTetromino())

    
    return(
    <div className='d-flex flex-wrap text-center' style={{width:'600px'}}> 
    {
        stage.map(row => row.map((cell , x)=> <Cell key={x} type={cell[0]} />) )
    }



    </div>
)
}
export default  Stage ;