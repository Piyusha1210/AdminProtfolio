import Chart from "react-apexcharts";

function PieChart() {
  var xValues = [14, 31, 55];
  var yValues = ["Super Hoodies", "Custom Short Pants", "Basic Tees"];
  //   var barColors = ["#FFFFFF", "#2b5797"];

  return (
    <Chart
      type="pie"
      width={300}
      height={300}
      series={xValues}
      options={{
        labels: yValues,
        dataLabels: {
          enabled: false,
        },
        colors: ["#EE8484", "#F6DC7D", "#98D89E"],
        stroke: {
          width: 0,
        },
      }}
    ></Chart>
  );
}

export default PieChart;
