// Card.jsx

import style from "./Card.module.css";

const Card = ({ name, github, englishName }) => {
    return (
        <div className={style.card}>
            <p>이름: {name}</p>
            <p>영문 이름: {englishName}</p>
            <p>GitHub: {github}</p>
        </div>
    );
};

export default Card;
