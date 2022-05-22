import React from "react";
import "./Footer.css";


const FooterPage = () => {
return (
	
	<div className="mainFooter">
		<div className="container">
			<div className="row1">
				{/* column 01 */}
				<div className="col1">
					<h4>col1</h4>
					<ul>
						<li>1</li>
						<li>1</li>
						
						
					</ul>
				</div>
				{/* column 02 */}
				<div className="col2">
					<h4>col2</h4>
					<ul>
						
						
						<li>2</li>
						<li>2</li>
					</ul>
				</div>
				{/* column 02 */}
				<div className="col3">
					<h4>col3</h4>
					<ul>
						
						<li>3</li>
						<li>3</li>
					</ul>
				</div>

			</div>
			<hr className="line" />
			<div></div>
		</div>

	</div>

);
};
export default FooterPage;
