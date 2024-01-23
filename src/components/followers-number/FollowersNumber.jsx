import style from './followers-numbers.module.css';

const FollowersNumber = props => {
	console.log(props);
	return (
		<h1 className={style.number}>
			{props.rrss === 'instagram' ? `${props.followers}k` : props.followers}
		</h1>
	);
};

export default FollowersNumber;
