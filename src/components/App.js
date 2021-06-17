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
import Dashboard from "./dashboard/Dashboard"
import Accounting from "./dashboard/sidebar/Accounting"
import Office from "./dashboard/sidebar/Office"
import Dispatch from "./dashboard/sidebar/Dispach"
import Safety from "./dashboard/sidebar/Safety"
import Recruting from "./dashboard/sidebar/Recruting"





function App(props) {
	const [{ user }, dispatch] = UseStateValue();
	return (
		<Router>
			<AuthProvider>
				<Switch>
					{/*<Drawer />*/}
					<PrivateRoute exact path="/dashboard" component={Dashboard} />
					<PrivateRoute exact path="/dashboard/accounting" component={Accounting} />
					<PrivateRoute exact path="/dashboard/office" component={Office} />
					<PrivateRoute exact path="/dashboard/dispatch" component={Dispatch} />
					<PrivateRoute exact path="/dashboard/safety" component={Safety} />
					<PrivateRoute exact path="/dashboard/recruting" component={Recruting} />


					{/* Auth */}
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<Route path="/forgot-password" component={ForgotPassword} />
					{/* Profile */}
					<PrivateRoute path="/user" component={Profile} />
					<PrivateRoute path="/update-profile" component={UpdateProfile} />
				</Switch>
			</AuthProvider>
		</Router>
	)
}

export default App