import React from "react"
import Signup from "./authentication/Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./authentication/Login"
import PrivateRoute from "./authentication/PrivateRoute"
import ForgotPassword from "./authentication/ForgotPassword"
import UpdateProfile from "./authentication/UpdateProfile"
import { UseStateValue } from "../contexts/StateProvider"
import Profile from "./Profile"
import Drawer from "./dashboard/Drawer3"
import Accounting from "./dashboard/sidebarPages/Accounting"
import Office from "./dashboard/sidebarPages/Office"
import Dispach from "./dashboard/sidebarPages/Dispach"
import Safety from "./dashboard/sidebarPages/Safety"
import Recruting from "./dashboard/sidebarPages/Recruting"
import { makeStyles } from "@material-ui/core/styles"
import Drawer3 from "./dashboard/Drawer3"



const useStyles = makeStyles({
	container: {
		display: "block"

	}
})

function App() {
	const classes = useStyles();
	const [{ user }, dispatch] = UseStateValue();
	return (
		<div>

			<Router>
				<AuthProvider>
					{/*<NavBar></NavBar>
					<Drawer></Drawer>*/}
					<Drawer3></Drawer3>
					<Switch>
						{/*<Dashboard />*/}
						<Route exact from="/" render={props => <Office {...props} />} />
						<Route exact from="/Dispach" render={props => <Dispach {...props} />} />
						<Route exact from="/Accounting" render={props => <Accounting {...props} />} />
						<Route exact from="/Safety" render={props => <Safety {...props} />} />
						<Route exact from="/Recruting" render={props => <Recruting {...props} />} />


						{/* Auth */}
						<div className={classes.container}>
							<Route path="/login" component={Login} />
							<Route path="/signup" component={Signup} />
							<Route path="/forgot-password" component={ForgotPassword} />
						</div>
						{/* Profile */}
						<PrivateRoute path="/user" component={Profile} />
						<PrivateRoute path="/update-profile" component={UpdateProfile} />
					</Switch>
				</AuthProvider>
			</Router>
		</div >
	)
}

export default App