import DailyFollowers from '../daily-followers/DailyFollowers';
import FollowersNumber from '../followers-number/FollowersNumber';
import LineColor from '../line-color/LineColor';
import RrssUser from '../rrss-user/RrssUser';
import Word from '../word/Word';

import style from './big-card.module.css';

const BigCard = props => {
	return (
		<div className={`${style.card} ${style.radius}`}>
			<LineColor color={props.background} />
			<RrssUser icon={props.icon} user={props.user} />
			<FollowersNumber followers={props.followers} rrss={props.background} />
			<Word word={props.word} />
			<DailyFollowers dailyFollowers={props.dailyFollowers} />
		</div>
	);
};

export default BigCard;
