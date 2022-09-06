import "./Gallery.css";

const Gallery = () => {
	let imageArray = [];

	for (let index = 1; index <= 20; index++) {
		imageArray.push(`gallery_${index}.jpg`);
	}

	return (
		<>
			<div className="row gallery-container m-0">
				<div className="col-11 p-0 gallery-wrapper">
					{imageArray &&
						imageArray.map((value, index) => {
							return <img src={`assets/images/${value}`} alt="" key={index} />;
						})}
				</div>
			</div>
		</>
	);
};

export default Gallery;
