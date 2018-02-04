import React, { Component } from 'react';
import RaisedButton from "material-ui/RaisedButton";
import TableSoftware from "../TableSoftware";
import { loadSoftwareLangs } from "../../AC";
import { connect } from 'react-redux';

class WrapperTable extends Component {

	loadSoftware(e) {
		e.preventDefault();
		this.props.loadSoftwareLangs();
	}

	render() {
		const { loading, softWareLangs } = this.props;
		const primaryBtn = <RaisedButton label="Загрузить" onClick={e => this.loadSoftware(e)} primary />;
    	const disabledBtn = <RaisedButton label="Загрузить" disabled={true} />;
    	const loadBtn = !loading ? primaryBtn : disabledBtn;
    	const tableSoftware = <TableSoftware info={softWareLangs} />;

		return (
			<div style={{textAlign: 'center', marginLeft: '270px'}}>
				{tableSoftware}
				{loadBtn}
			</div>
		);
	}
}

export default connect(({ softWare }) => {
  return {
    softWareLangs: softWare.softWareLangs,
	loading: softWare.loading
  }
}, {
  loadSoftwareLangs
})(WrapperTable)