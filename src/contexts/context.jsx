import { Component, createContext } from "react";

export const Context = createContext();

class ContextProvider extends Component {

    state = {
        username: "",
        email: "",
        picture: ""
    }

    updateContext = (user) => {
        console.log(this.state);
        this.setState({username:user.username, email: user.email, picture: user.picture});
    }

    render() {
        return (
            <Context.Provider value={{user:{...this.state}, updateContext: this.updateContext}}>
                {this.props.children}
            </Context.Provider>
        )
    }

}

export default ContextProvider;
