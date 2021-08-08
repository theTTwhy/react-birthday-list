import React, { Component } from "react";
import data from "../visitors.json";
import Visitor from "./visitor";

class Visitors extends Component {
    constructor(props) {
        super(props);

        // initiate all states
        this.state = {
            visitors: null,
        };
    }

    componentDidMount(){
        this.setState({
            visitors: data.visitors
        });
    }

    render() {

        return (
            <div className="visitors">
                {
                    this.state.visitors ? this.state.visitors.map((visitor) => {
                            return (
                                <Visitor key={visitor.id} visitor={visitor}/>
                            );
                        })
                        : ""
                }
            </div>
        );
    }

}

export default Visitors;
