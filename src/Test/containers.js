import { connect } from 'react-redux';
import Test from './component';
import { mapStateToProps,mapDispatchToProps } from './selectors';

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Test);