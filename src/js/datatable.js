import React from 'react';

const Datatable = (props) => {
	function addClick(rowData) {
		props.addClick(rowData);
	}
	return (
		<div style={{ backgroundColor: "white" }}>
			<table className="table table-bordered table-hover">
				<thead>
					<tr>
						{
							props.columns.map((column, i) => {
								return <th data-key={'h-' + i} key={'h-' + i}>{column['title']}</th>
							})
						}
					</tr>
				</thead>
				<tbody>
					{
						props.items.map((row, i) => {
							return (
								<tr className={(row['selected'] == 'yes') ? 'table-success' : ''} data-key={'r-' + i} key={'r-' + i} onClick={(e) => { addClick(row) }}>
									{
										props.columns.map((column, j) => {
											return <td data-key={'c-' + i + j} key={'c-' + i + j}>{row[column['id']]}</td>
										})
									}
								</tr>
							)
						})
					}
				</tbody>
			</table>
		</div>
	);
}
export default Datatable;
