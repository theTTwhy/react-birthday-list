import React, { Component } from "react";

class Visitor extends Component {
    constructor(props) {
        super(props);

        // initiate all states
        this.state = {
            visitor: null,
        };
    }

    componentDidMount(){
        this.setState({
            visitor: this.props.visitor
        });
    }

    render() {
        let v = this.state.visitor;

        console.log(v);

        return (
            <div className={v ? v.status === 1 ? "bg-green visitor d-flex" : "visitor d-flex" : "visitor d-flex"}>
                <div className="id col-2">
                    { v ? v.id : "" }
                </div>
                <div className="name col-4">
                    { v ? v.first_name + " " + v.name : "" }
                </div>
                <div className="status col-4">
                    { v ? v.status === 0 ? "T.B.A." : "Komt" : "" }
                </div>
                <div className="actions col-2">
                    Action
                </div>
            </div>
        );
    }

}

export default Visitor;
