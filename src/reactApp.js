import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreator'


import Layout from './components/layout/layout'


function mapStateToProps(state){
    return {
        locations: state.locations,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps,
mapDispatchToProps)(Layout);

export default App