import React, {Component} from "react";
import CardUI from './CardUI';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state={ };
    }
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row-2">
                    <div className="col">
                        <CardUI />
                    </div>
                    <div className="col">
                        <CardUI />
                    </div>
                </div>
                <div className="row-2">
                    <div className="col">
                        <CardUI />
                    </div>
                    <div className="col">
                        <CardUI />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;