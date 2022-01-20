import { useState } from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
} from "firebase/auth";
import { UserContext } from "../../App";
import { useContext } from "react";
import { useHistory, useLocation } from "react-router";

function Login() {
	const provider = new GoogleAuthProvider();
	initializeApp(firebaseConfig);
	//   const auth = getAuth();
	const [newUser, setNewUser] = useState(false);
	const [user, setUser] = useState({
		isSignedIn: false,
		name: "",
		email: "",
		photoURL: "",
	});

	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const history = useHistory();
	const location = useLocation();
	let { from } = location.state || { from: { pathname: "/home" } };

	const handleSignIn = () => {
		const auth = getAuth();
		signInWithPopup(auth, provider)
			.then((result) => {
				const { displayName, email, photoURL } = result.user;
				const signedInUser = {
					isSignedIn: true,
					name: displayName,
					email: email,
					photoURL: photoURL,
				};
				setUser(signedInUser);
				setLoggedInUser(signedInUser);
				history.replace(from);
				// console.log(displayName, email, photoURL);
				// // This gives you a Google Access Token. You can use it to access the Google API.
				// const credential = GoogleAuthProvider.credentialFromResult(result);
				// const token = credential.accessToken;
				// // The signed-in user info.
				// const user = result.user;
				// // ...
			})
			.catch((error) => {
				// // Handle Errors here.
				// const errorCode = error.code;
				// const errorMessage = error.message;
				// // The email of the user's account used.
				// const email = error.email;
				// // The AuthCredential type that was used.
				// const credential = GoogleAuthProvider.credentialFromError(error);
				// // ...
			});
	};
	const handleSignOut = () => {
		const auth = getAuth();
		signOut(auth)
			.then((res) => {
				const signedOutUser = {
					isSignedIn: false,
					name: "",
					email: "",
					photo: "",
					error: "",
					success: "",
				};
				setUser(signedOutUser);
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			});
	};

	return (
		<div style={{ textAlign: "center" }}>
			{user.isSignedIn ? (
				<button onClick={handleSignOut}>Sign Out</button>
			) : (
				<div
					style={{
						margin: "25%",
						textAlign: "center",
						border: "1px solid gray",
						padding: "30px",
						borderRadius: "20px",
						boxShadow: "1px 1px 10px gray",
					}}
				>
					<h1>Welcome to my Facebook</h1>
					<br />
					<h3 style={{ color: "gray" }}>
						Please Sign in to continue...
					</h3>
					<button
						style={{ marginTop: "20px" }}
						className="btn btn-primary"
						onClick={handleSignIn}
					>
						Sign in
					</button>
				</div>
			)}

			{user.isSignedIn && (
				<div>
					<p>Welcome! {user.name}</p>
					<p>Your email: {user.email}</p>
					<img src={user.photoURL} alt=""></img>
				</div>
			)}

			{user.success && (
				<p style={{ color: "green" }}>
					User {newUser ? "Created" : "Logged In"} Successfully
				</p>
			)}
		</div>
	);
}

export default Login;
