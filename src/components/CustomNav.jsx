import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import './CustomNav.css'


class CustomNav extends React.Component{
	render(){
		console.log("test")
		return (
			<div>
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
						  React Weather
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<NavItem>
							Weather
							</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default CustomNav;