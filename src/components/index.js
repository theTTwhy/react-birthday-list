import React, { Component } from "react";
import Visitors from "./visitorsTable/table.js";
import data from "./visitors.json";

class Index extends Component {
    constructor(props) {
        super(props);

        // initiate all states
        this.state = {
            visitors: null,
        };
    }

    componentDidMount(){
        // set title on page
        document.title = "Verjaardag Noud";

        this.setState({
            visitors: data.visitors
        });
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Visitors data-visitors={this.state.visitors} />
                    </div>
                </div>
            </div>
        );
    }

}

export default Index;
