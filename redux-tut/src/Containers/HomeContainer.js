import {connect} from 'react-redux'
import Home from '../Component/Home';
import {addToCart, removeToCart}from '../Services/Actions/Actions'
 const mapStateTOProps=state=>({
    data:state.cardItems
 }) 
const mapDispatchToProps=dispatch=>({
    addToCartHandler: data=>dispatch(addToCart(data)),
    removeToCartHandler: data=>dispatch(removeToCart(data))
})
export default connect(mapStateTOProps,mapDispatchToProps)(Home)

//export default Home;