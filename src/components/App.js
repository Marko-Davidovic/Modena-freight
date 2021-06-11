import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import { UseStateValue } from "./StateProvider"

function App() {
	const [{ user }, dispatch] = UseStateValue();
	return (
		<Container
			className="d-flex align-items-center justify-content-center"
			style={{ minHeight: "100vh" }}
		>
			<div className="w-100" style={{ maxWidth: "400px" }}>

				<Router>
					<AuthProvider>
						<Switch>



							<Route path="/login" component={Login} />
							<Route path="/signup" component={Signup} />
							<Route path="/forgot-password" component={ForgotPassword} />

							<PrivateRoute exact path="/" component={Dashboard} />
							<PrivateRoute path="/update-profile" component={UpdateProfile} />



						</Switch>
					</AuthProvider>
				</Router>
			</div>
		</Container>
	)
}

export default App