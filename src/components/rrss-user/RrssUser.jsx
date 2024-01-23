import style from './rrss-user.module.css';

const RrssUser = props => {
	return (
		<div className={style['rrss-user']}>
			<img src={props.icon} alt='' />
			<p className={style.color}>{props.user}</p>
		</div>
	);
};

export default RrssUser;
