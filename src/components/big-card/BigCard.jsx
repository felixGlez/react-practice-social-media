import DailyFollowers from '../daily-followers/DailyFollowers';
import FollowersNumber from '../followers-number/FollowersNumber';
import RrssUser from '../rrss-user/RrssUser';

import style from './big-card.module.css';

const BigCard = props => {
	return (
		<div className={style.card}>
			<RrssUser />
			<FollowersNumber />
			<DailyFollowers />
		</div>
	);
};

export default BigCard;
