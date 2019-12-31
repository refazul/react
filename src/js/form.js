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
							{
								props.items.map((item) => {
									if (item.type == 'text') {
										return <Input {...item} keyd={check_email} />
									} else if (item.type == 'password') {
										return <Input {...item} />
									} else if (item.type == 'addon') {
										return <InputAddon {...item} />
									} else if (item.type == 'checkbox') {
										return <CheckBox {...item} />
									} else if (item.type == "radiobutton") {
										return <RadioButton {...item} />
									} else if (item.type == "file") {
										return <File {...item} />
									}
								})
							}

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