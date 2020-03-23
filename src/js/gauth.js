import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

const useGoogleLogin = ({ onLogin, onLogout, clientId, onFailure }) => {
	const [loggedin, setLoggedin] = useState(false);
	useEffect(() => {
		const params = {
			client_id: clientId,
		}
		window.gapi.load('auth2', () => {
			if (!window.gapi.auth2.getAuthInstance()) {
				window.gapi.auth2.init(params).then(
					res => {
						if (res.isSignedIn.get()) {
							setLoggedin(true);
							handleSigninSuccess(res.currentUser.get())
						}
					},
					err => onFailure(err)
				)
			}
		})
	}, [])
	function handleSigninSuccess(res) {
		var profile = res.getBasicProfile();
		var user_id = profile.getId();
		var user_name = profile.getName();
		var user_image = profile.getImageUrl();
		var user_email = profile.getEmail();

		// The ID token you need to pass to your backend:
		var user_token = res.getAuthResponse().id_token;

		const basicProfile = res.getBasicProfile();
		const authResponse = res.getAuthResponse();
		onLogin({ user_id, user_email, user_name, user_image, user_token })
	}
	function signIn(e) {
		const auth2 = window.gapi.auth2.getAuthInstance();
		auth2.signIn().then(res => {
			handleSigninSuccess(res);
			setLoggedin(true);
		}, err => {
			onFailure(err);
		});
	}
	function signOut(e) {
		if (window.gapi) {
			const auth2 = window.gapi.auth2.getAuthInstance();
			if (auth2 != null) {
				auth2.signOut().then(auth2.disconnect().then(() => {
					setLoggedin(false);
					onLogout();
				}))
			}
		}
	}
	return { signIn, signOut, loggedin }
}
const Gauth = props => {
	const { onLogin, onLogout, clientId, onFailure } = props
	const { signIn, signOut, loggedin } = useGoogleLogin({ onLogin, onLogout, clientId, onFailure })

	function login_onClick(e) {
		if (loggedin) {
			signOut(e);
		} else {
			signIn(e);
		}
	}
	return (
		<div onClick={(e) => { login_onClick(e) }}> {loggedin ? 'Logout' : 'Login'}</div >
	)
}

export default Gauth;
