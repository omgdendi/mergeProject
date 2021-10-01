
import React from 'react'
import useCanvas from "./UseCanvas";
import styles from './Hexagon.module.css';


const Hexagon = props => {



    const draw = (ctx, frameCount) => {
        //stroked hexagon
        const SIZE = 10
        ctx.beginPath();
        ctx.moveTo(SIZE,0);
        ctx.lineTo(3*SIZE,0);
        ctx.lineTo(4*SIZE,2*SIZE);
        ctx.lineTo(3*SIZE,4*SIZE);
        ctx.lineTo(SIZE,4*SIZE);
        ctx.lineTo(0,2*SIZE);
        ctx.fillStyle = 'black';
        ctx.fill();
    }

    const canvasRef = useCanvas(draw)

    let onHexagonClick = () => {
        props.onHexagonClick();
    }

    return (
        <div className={styles.canvas}>
            <canvas
                onClick={onHexagonClick}
                ref={canvasRef} {...props}/>
        </div>
    )
}

export default Hexagon