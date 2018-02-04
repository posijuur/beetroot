import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { connect } from 'react-redux';

const style = {
	table: {
		marginBottom: '25px'
	},
	tableHeader: {
		textAlign: 'center', 
		fontSize: '20px', 
		color: 'rgb(0, 188, 212)'
	}
}

class TableSoftware extends Component {
	render() {
		const { info } = this.props;

		return (
			<div>
				<Table multiSelectable={true} style={style.table}>
		          <TableHeader>
		            <TableRow>
		              <TableHeaderColumn colSpan="3" tooltip="Super Header" style={style.tableHeader}>
		                Select programming language
		              </TableHeaderColumn>
		            </TableRow>
		            <TableRow>
		              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
		              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
		              <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
		            </TableRow>
		          </TableHeader>
		          <TableBody>
		            {info.map( (row, index) => (
						<TableRow key={index}>
							<TableRowColumn>{index}</TableRowColumn>
							<TableRowColumn>{row.lang}</TableRowColumn>
							<TableRowColumn>{row.paradigm}</TableRowColumn>
						</TableRow>
					))}
		          </TableBody>
		          <TableFooter>
		            <TableRow>
		              <TableRowColumn>ID</TableRowColumn>
		              <TableRowColumn>Name</TableRowColumn>
		              <TableRowColumn>Status</TableRowColumn>
		            </TableRow>
		          </TableFooter>
		        </Table>
			</div>
		);
	}
}

export default connect(({ softWare }) => {
  return {
    softWareLangs: softWare.softWareLangs,
	loading: softWare.loading,
	loaded: softWare.loaded
  }
})(TableSoftware)