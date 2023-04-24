import React from "react";
import Chart from "react-apexcharts";

class SplineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-spline",
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        xaxis: {
          categories: [" ", "Week 1", "Week 2", "Week 3", "Week 4", ""],
        },
        toolbar: {
          show: false,
        },
      },
      series: [
        {
          name: "Guest",
          data: [200, 400, 200, 300, 200, 450],
          color: "#E9A0A0",
        },
        {
          name: "User",
          data: [100, 470, 120, 450, 200, 250],
          color: "#9BDD7C",
        },
      ],
    };
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="line"
        height={150}
        width={900}
      />
    );
  }
}

export default SplineChart;
