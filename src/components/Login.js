import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { auth } from "/Users/marko/Documents/Code/modena-fraight-dashboard/src/firebase.js"
import { provider } from "/Users/marko/Documents/Code/modena-fraight-dashboard/src/firebase.js"
import { UseStateValue } from "./StateProvider"
import { actionTypes } from "./reducer"


export default function Login() {
	const [state, dispatch] = UseStateValue();
	const emailRef = useRef()
	const passwordRef = useRef()
	const { login } = useAuth()
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)
	const history = useHistory()

	async function handleSubmit(e) {
		e.preventDefault()

		try {
			setError("")
			setLoading(true)
			await login(emailRef.current.value, passwordRef.current.value) // error
			history.push("/")
		} catch {
			setError("Failed to log in")
		}

		setLoading(false)
	}
	const googleSinIn = () => {
		auth.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				})

				history.push("/");
			})
			.catch((error) => (error.message));

	}

	return (
		<>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Log In</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required />
						</Form.Group>
						<Form.Group id="password">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" ref={passwordRef} required />
						</Form.Group>
						<Button disabled={loading} className="w-100 mt-3" type="submit">
							Log In
            </Button>
						<Button disabled={loading} className="w-100 mt-3" type="submit" onClick={googleSinIn}>
							Log In with Google
            </Button>
					</Form>
					<div className="w-100 text-center mt-3">
						<Link to="/forgot-password">Forgot Password?</Link>
					</div>
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
				Need an account? <Link to="/signup">Sign Up</Link>
			</div>
		</>
	)
}