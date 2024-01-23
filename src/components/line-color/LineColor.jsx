import style from './line-color.module.css';

const LineColor = props => {
	return <div className={`${style[props.color]} ${style.line}}`}></div>;
};

export default LineColor;
