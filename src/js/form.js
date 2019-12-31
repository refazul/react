import React, { useState, useRef, useEffect } from 'react';

import { Input } from './parts/input';
import { InputAddon } from './parts/inputaddon';
import { RadioButton } from './parts/radiobutton';
import { CheckBox } from './parts/checkbox';
import { File } from './parts/file';

const Form = (props) => {
	useEffect(() => {
		// Multiple Times
	});
	useEffect(() => {
		// Just Once
	}, []);
	function check_email(e) {
		if (e.keyCode == 13) {
			var email = e.target.value;
			if (!email_valid_is(email)) {
				alert('Email not valid');
			}
		}
	}
	function email_valid_is(email = '') {
		if (email.indexOf('@') > 0) {
			return true;
		}
		return false;
	}
	return (
		<div class="container-fluid" >
			<div class="row">
				<div class="col-md-12">
					<div class="card card-primary">
						<div class="card-header">
							<h3 class="card-title">Quick Example</h3>
						</div>

						<div class="card-body">
							<Input type="email" id="exampleInputEmail1" text="Email Address" placeholder="Enter email" keyd={check_email} />
							<Input type="password" id="exampleInputPassword1" text="Password" placeholder="Password" />
							<File id="exampleInputFile" text="File input" placeholder="Choose a File" />
							<CheckBox id="exampleCheck1" text="Check me out " />

							<InputAddon placeholder="Username" text1="@" />
							<InputAddon text2=".00" />
							<InputAddon text1="$" text2=".00" />

							<InputAddon placeholder="Email" fontawesome1="fas fa-envelope" />
							<InputAddon fontawesome1="fas fa-check" />
							<InputAddon fontawesome1="fas fa-dollar-sign" fontawesome2="fas fa-ambulance" />

							<Input type="email" id="inputEmail3" text="Email" placeholder="Email" orientation="horizontal" />
							<Input type="password" id="inputPassword3" text="Password" placeholder="password" orientation="horizontal" />
							<CheckBox id="exampleCheck2" text="Remember me" orientation="horizontal" />

							<Input kind="input_with" fontawesome="fas fa-check" text="Input with success" for="inputSuccess" id="inputSuccess" placeholder="Enter..." color="green" />
							<Input kind="input_with" fontawesome="fas fa-bell" text="Input with Warning" for="inputWarning" id="inputWarning" placeholder="Enter..." color="orange" />
							<Input kind="input_with" fontawesome="far fa-times-circle" text="Input with error" for="inputError" id="inputError" placeholder="Enter..." color="red" />

							<CheckBox id="exampleCheck3" text="Remember me" />
							<CheckBox id="exampleCheck4" text="Remember me2" />
							<CheckBox id="exampleCheck5" text="Remember me3" disabled="true" />

							<RadioButton id="exampleCheck6" text="Radio1" name="radio" />
							<RadioButton id="exampleCheck7" text="Radio2" name="radio" />
							<RadioButton id="exampleCheck8" text="Radio3" name="radio" />
						</div>

						<div class="card-footer">
							<button type="submit" class="btn btn-primary">Submit</button>
							<button type="submit" class="btn btn-default float-right">Cancel</button>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
}
export default Form;
