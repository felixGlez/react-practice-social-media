import style from './line-color.module.css';

const LineColor = props => {
	console.log(style);
	return <div className={`${style[props.color]} ${style.rectangle}`}></div>;
};

export default LineColor;
