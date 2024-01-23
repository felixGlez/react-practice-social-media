import style from './daily-followers.module.css';

const DailyFollowers = props => {
	return <h4 className={style.color}>{`${props.dailyFollowers} Today`}</h4>;
};

export default DailyFollowers;
