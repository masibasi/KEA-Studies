import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoritecolor: "red" };
    }

    shouldComponentUpdate() {
        // set false to stop updating
        return false;
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: "blue" });
        }, 1000);
    }
    // static getDerivedStateFromProps(props, state) {
    //     return { favoritecolor: props.favcol };
    // }
    render() {
        return <div>My Favorite Color is {this.state.favoritecolor}</div>;
    }
}

export default Header;
