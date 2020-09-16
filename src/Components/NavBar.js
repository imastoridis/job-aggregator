/*Imports*/
import React from 'react';
//Bootstrap
import Navbar from 'react-bootstrap/Navbar'


function NavBar(){
	
	return (
		<div>
		
			 <Navbar bg="dark" variant="dark">
					<Navbar.Brand href="#home">
						<img
							alt=""
							src="/logo.svg"
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{' '}
						IoIo Job Aggregator
					</Navbar.Brand>
				</Navbar>
		</div>
	)
}

export default NavBar