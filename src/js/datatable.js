import React, { useState, useRef, useEffect } from 'react';
import $ from 'jquery';

const Datatable = (props) => {
	return (
		<div className="row">
			<div className="col-12">
				<div className="card">
					<div className="card-header">
						<h3 className="card-title">DataTable with default features</h3>

					</div>
					<div className="card-body ">

						<table id="example1" class="table table-bordered table-striped">
							<thead>
								<tr>
									<th>Rendering engine</th>
									<th>Browser</th>
									<th>Platform(s)</th>
									<th>Engine version</th>
									<th>CSS grade</th>
								</tr>
							</thead>
							<tbody>
								{
									props.items.map((item) => {
										return (
											<tr>
												<td>{item.text1}</td>
												<td>{item.text2}</td>
												<td>{item.text3}</td>
												<td>{item.text4}</td>
												<td>{item.text5}</td>
											</tr>
										)
									})
								}

							</tbody>
							<tfoot>
								<tr>
									<th>Rendering engine</th>
									<th>Browser</th>
									<th>Platform(s)</th>
									<th>Engine version</th>
									<th>CSS grade</th>
								</tr>
							</tfoot>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Datatable;
