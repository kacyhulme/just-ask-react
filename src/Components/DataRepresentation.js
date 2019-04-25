import React, { Component } from 'react';
import d3 from 'd3';

class DataRepresentation extends Component {    
    render() {
        return (
            <div className="datarepresentation">
                <div>Data Representation</div>
                <div class="chart"></div>
            </div>
        );
    }
}

export default DataRepresentation;