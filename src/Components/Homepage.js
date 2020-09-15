/*Imports*/
import React from 'react';
import '../App.css';
import NavBar from './NavBar'
//Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage(){
	
	
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
					<Button variant="primary" type="submit">
						Rechercher
					</Button>
			</Form>
		</Container>
		</div>
	)
}

export default Homepage