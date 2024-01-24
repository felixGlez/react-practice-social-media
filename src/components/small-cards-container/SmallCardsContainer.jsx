import style from './small-cards-container.module.css';

const SmallCardsContainer = props => {
	return <div className={style['small-card-container']}>{props.children}</div>;
};

export default SmallCardsContainer;
