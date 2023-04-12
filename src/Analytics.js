
import React, { Component } from "react";
import Chart from "react-apexcharts";
import './Analytics.css';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

class Analytics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    id: "basic-bar"
                    
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                     
                }
            },
            series: [
                {
                    name: "series-1",
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                    
                }
            ]

        };

    }
   
    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <CloseIcon className="cross" />
                            </Link>
                        <Chart
                            className='chart'
                            options={this.state.options}
                            series={this.state.series}
                            type="bar"
                            width="900"
                        />
                       
                    </div>
                </div>
            </div>
        );
    }
}

export default Analytics;
