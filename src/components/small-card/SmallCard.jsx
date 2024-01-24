import RrssUser from '../rrss-user/RrssUser';
import style from './small-card.module.css';

const SmallCard = props => {
	return (
		<div className={style['small-card']}>
			<RrssUser icon={props.icon} />
		</div>
	);
};

export default SmallCard;
