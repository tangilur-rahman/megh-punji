import "./Virtual.css";

const Virtual = () => {
	return (
		<>
			<div className="row m-0 virtual-container" id="virtual-section">
				<div className="col-11 p-0 virtual-wrapper">
					<div className="title-text">
						<h2>HAVE A VIRTUAL TOUR</h2>
						<hr id="video-title" />
						<p>
							Sajek Tripuri Valley is one of the most popular tourist spots in
							Bangladesh situated among the hills of the Kasalong range of
							mountains in Sajek union, Baghaichhari Upazila in Rangamati
							District. The valley is 2,000 feet above sea level. Sajek Tripuri
							Valley is known as the Queen of Hills & Roof of Rangamati.
						</p>
					</div>

					<video controls preload="none" poster="/assets/video/video-cover.jpg">
						<source src="/assets/video/video.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>

					<div className="title-text">
						<h2>PHOTO GALLERY</h2>
						<hr id="photo-title" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Virtual;
