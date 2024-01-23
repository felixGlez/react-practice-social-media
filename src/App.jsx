import { v4 } from 'uuid';
import BigCard from './components/big-card/BigCard';
import BigCardsContainer from './components/big-cards-container/BigCardsContainer';
import { RRSS_CARDS_INFO } from './constants/cards-info';

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
		</>
	);
};

export default App;
