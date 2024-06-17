//React Conditional Rendering
import PropTypes from "prop-types"
function UserGreeting(props) {

    const welcomeMessage = <h2>Welcome {props.username}</h2>;
    const loginPrompt = <h2>Please log in to continue...</h2>;

    return(props.isLoggedIn ? welcomeMessage : loginPrompt)


    // if(props.isLoggedIn) {
    //     return <h2>Welcome {props.username}</h2>
    // } 
    // else {
    //     return <h2>Please Log in to continue...</h2>
    // }

    // return(props.isLoggedIn ? 
    //                 <h2>Welcome {props.username}</h2> : 
    //                 <h2>Please log in to continue...</h2>)

}

UserGreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
}
UserGreeting.defaultProps = {
    username: "Guest",
    isLoggedIn: false,
}

export default UserGreeting