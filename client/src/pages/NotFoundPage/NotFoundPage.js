import { NavLink } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
	return (
		<div className="container-fluid p-0">
			<div className="row m-0" id="error-row-container">
				<div className="col p-0" id="error-col-container">
					<div id="error-link">
						<NavLink
							to="/admin/dashboard"
							id="error-navlink"
							className="hover-link"
						>
							<span>Back To Dashboard</span>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;
