import style from './board.module.css';
import Card from '../card/Card';

function Board() {
    return(
        <div className={style.divBoard}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Board;