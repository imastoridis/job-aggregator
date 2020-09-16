/*Imports*/
import React from 'react';
import NavBar from './NavBar'
//Bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


function ResultsPage(){
	
	
	return (
		<div>
			<Container>
					<NavBar/>
			<span id="indeed_at">
				<a href="https://www.indeed.com/" rell="nofollow" >jobs</a> by <a href="https://www.indeed.fr/" rell="nofollow" title="Job Search">
				<img src="https://www.indeed.com/p/jobsearch.gif"  alt="Indeed job search"></img></a>
			</span>
		
			</Container>
		</div>
	)
}

export default ResultsPage