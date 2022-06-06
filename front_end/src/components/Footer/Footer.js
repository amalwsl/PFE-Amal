import React from "react";
import "./Footer.css";


const FooterPage = () => {
return (
	
	<div className="mainFooter">
		<div className="container">
			<div className="row1">
				{/* column 01 */}
				<div className="col">
					<ul type="none">
					<span> The show </span>
						<li><a href="https://www.iadetunisia.com/about-iade-tunisia/" target="_blank">About</a></li>
						<li><a href="https://www.iadetunisia.com/exhibit/" target="_blank">Exhibit</a></li>
						<li><a href="https://www.iadetunisia.com/why-visit/" target="_blank">Visit</a></li>
						
						
					</ul>
				</div>
				{/* column 02 */}
				<div className="col">
				
					<ul type="none">
						<span> B2B </span>
						
						
						<li><a href="http://localhost:3000/exhibitors">Exhibitors</a></li>
						<li><a href="http://localhost:3000/my-company">My Company</a></li>
						<li><a href="http://localhost:3000/calendar">Agenda</a></li>
					</ul>
				</div>
				{/* column 02 */}
				<div className="col">
				
					<ul type="none">
						<span> Sectors </span>
						
						<li><a href="https://www.iadetunisia.com/civil-aviataion/" target="_blank">Aerospace</a></li>
						<li><a href="https://www.iadetunisia.com/exhibit/defence/" target="_blank">Defense</a></li>
						<li><a href="https://www.iadetunisia.com/exhibit/space/" target="_blank">Space</a></li>

					</ul>
				</div>

			</div>
			<hr className="line" />
			<div className="copyrights">copyrights © Amal WESLETI & Chedi GUITNI 2021-2022</div>
		</div>

	</div>

);
};
export default FooterPage;
