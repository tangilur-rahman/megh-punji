// external components

// internal components
import "./Display.css";

const Display = () => {
	return (
		<>
			<div className="row m-0 display-container">
				<div className="col-11 p-0 display-wrapper">
					<h5>Request</h5>
					<table className="table table-hover">
						<thead>
							<th scope="col">#</th>
							<th scope="col">Cottage</th>
							<th scope="col">Name</th>
							<th scope="col">Phone</th>
							<th scope="col">Email</th>
							<th scope="col">Check IN</th>
							<th scope="col">Night</th>
							<th scope="col">Cancel</th>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Meghla</td>
								<td>Tangilur Rahman</td>
								<td>01750928575</td>
								<td>mohammadtangilur@gmail.com</td>
								<td>23-09-2022</td>
								<td>1</td>
								<td>
									<i className="bi bi-x-circle"></i>
								</td>
							</tr>
							<tr>
								<td>1</td>
								<td>Meghla</td>
								<td>Tangilur Rahman</td>
								<td>01750928575</td>
								<td>mohammadtangilur@gmail.com</td>
								<td>23-09-2022</td>
								<td>1</td>
								<td>
									<i className="bi bi-x-circle"></i>
								</td>
							</tr>
							<tr>
								<td>1</td>
								<td>Meghla</td>
								<td>Tangilur Rahman</td>
								<td>01750928575</td>
								<td>mohammadtangilur@gmail.com</td>
								<td>23-09-2022</td>
								<td>1</td>
								<td>
									<i className="bi bi-x-circle"></i>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Display;
