// una prop "children" permite pasar elementos o componentes anidados a un componente como sus hijos, mientras que una prop normal se utiliza para pasar valores específicos y no anidados a un componente

export const Button = ({ color = 'orange', children = 'button' }) => {
	// const { color, text } = props; // destructuring

	// objeto style
	const style = {
		backgroundColor: color,
	};

	return <button style={style}> {children} </button>;

	// boton con estilos en linea
	// return (
	// 	<button
	// 		style={{
	// 			backgroundColor: props.color,
	// 		}}
	// 	>
	// 		{props.text}
	// 	</button>
	// );
};
