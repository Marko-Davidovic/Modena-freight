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

function App() {
	const [{ user }, dispatch] = UseStateValue();
	return (
		<Router>
			<AuthProvider>
				<Switch>
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