import { v4 } from 'uuid';
import BigCard from './components/big-card/BigCard';
import BigCardsContainer from './components/big-cards-container/BigCardsContainer';
import { RRSS_CARDS_INFO } from './constants/cards-info';
import SmallCardsContainer from './components/small-cards-container/SmallCardsContainer';
import SmallCard from './components/small-card/SmallCard';
import { SMALL_RRSS_CARDS_INFO } from './constants/small-cards-info';

const App = () => {
	return (
		<>
			<BigCardsContainer>
				{RRSS_CARDS_INFO.map(card => (
					<BigCard
						key={v4()}
						icon={card.icon}
						user={card.user}
						followers={card.followers}
						dailyFollowers={card.dailyFollowers}
						background={card.background}
						word={card.word}
					/>
				))}
			</BigCardsContainer>

			<SmallCardsContainer>
				{SMALL_RRSS_CARDS_INFO.map(card => (
					<SmallCard
						key={v4()}
						icon={card.icon}
						word={card.word}
						number={card.number}
						percentage={card.percentage}
					/>
				))}
			</SmallCardsContainer>
		</>
	);
};

export default App;
