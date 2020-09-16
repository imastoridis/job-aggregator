/*Imports*/
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import '../App.css';
import NavBar from './NavBar'
//Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';


function Homepage(){
	
	useEffect(() => {
		GetJobs()
	}, []);
	//State
	const [jobSearch, setJobSearch] = useState({});

	//Fetch weather data
	const GetJobs = () => {
		axios.get('https://api.indeed.com/ads/apisearch?publisher=123412341234123&q=java+developer&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2 ')

			.then(response => {
				const jobSearch = response
				setJobSearch(jobSearch) //SetState for weather description for CSS
				console.log(jobSearch)

			})
			.catch(error => {
				console.log(error);
			})
	}
	
	return (
		<div>
			<Container>
				<NavBar/>

				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Quoi</Form.Label>
						<Form.Text className="text-muted">
							métier, mots-clés ou entreprise
						</Form.Text>			
						<Form.Control 
							type="text" 
							placeholder="métier, mots-clés ou entreprise" />
						</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Où</Form.Label>
						<Form.Text className="text-muted">
							métier, mots-clés ou entreprise
						</Form.Text>
						<Form.Control 
							type="text" 
							placeholder="ville, département, région ou code postal" />
					</Form.Group>
		
					<Link to="/search">
						<Button 
							variant="primary" 
							type="submit">
							Rechercher
						</Button>
					</Link>
		
				</Form>
			</Container>
		</div>
	)
}

export default Homepage