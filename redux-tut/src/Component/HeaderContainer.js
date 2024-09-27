import {connect} from 'react-redux'
import Header from '../Component/Header';

 const mapStateTOProps=state=>({
    data:state.cardItems
 }) 
const mapDispatchToProps=dispatch=>({
    
})
export default connect(mapStateTOProps,mapDispatchToProps)(Header)
