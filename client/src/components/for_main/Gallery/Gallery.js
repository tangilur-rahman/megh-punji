// external components
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

// internal components
import "./Gallery.css";

const Gallery = () => {
	let imageArray = [];

	for (let index = 1; index <= 20; index++) {
		imageArray.push(`gallery_${index}.jpg`);
	}

	return (
		<>
			<div className="row gallery-container m-0" id="gallery-section">
				<div className="col-11 p-0 gallery-wrapper">
					<PhotoProvider>
						{imageArray &&
							imageArray.map((item, index) => (
								<PhotoView key={index} src={`assets/images/${item}`}>
									<img src={`assets/images/${item}`} alt="img" />
								</PhotoView>
							))}
					</PhotoProvider>
				</div>
			</div>
		</>
	);
};

export default Gallery;
