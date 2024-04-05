import Header from "../Component/Header";
import { connect } from "react-redux";


const mapStateToProps = (state) => ({
  data:state.carditems
});
const mapDispatchToProps = (dispatch) => ({
  


});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
