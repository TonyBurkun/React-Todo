import React from 'react'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import { connect } from 'react-redux'
import {
	handleInitialData
} from '../actions/shared'



class App extends React.Component{

	componentDidMount(){
		const {dispatch} = this.props;
		dispatch(handleInitialData());
	}

	render(){	
		let loading = this.props.loading;

		if (loading === true) {
			return <h3>Loading ...</h3>
		} 
		
		
		return (
			<div>
				<ConnectedGoals/>
				<ConnectedTodos/>
			</div>
			)
	}
}


export default connect((state) => ({
	loading: state.loading
}))(App)
 