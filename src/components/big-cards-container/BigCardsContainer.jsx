import style from './big-cards-container.module.css';

const BigCardsContainer = props => {
	return <div className={style['cards-container']}>{props.children}</div>;
};

export default BigCardsContainer;
