import { Button } from './Button';

export const Card = ({ title, img, description }) => {
	return (
		<div>
			<h2>{title}</h2>
			<img src={img} alt={title} />
			<p>{description}</p>
			<Button>Ver mas...</Button>
		</div>
	);
};
