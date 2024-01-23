import style from './word.module.css';

const Word = props => {
	return <h3 className={style.uppercase}>{props.word}</h3>;
};

export default Word;
