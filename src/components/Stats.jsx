import CanvasJSReact from "@canvasjs/react-charts";
import "../styles/stats.css";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Stats = ({ stats }) => {
  const options = {
    animationEnabled: true,
    backgroundColor: null,
    dataPointWidth: 20,
    toolTip: {
      enabled: false,
    },
    title: {
      text: "Base Stats",
    },
    axisY: {
      maximum: 100,
      includeZero: true,
      lineThickness: 0,
      tickThickness: 0,
      valueFormatString: "",
      gridThickness: 0,
      labelFontSize: 0,
    },
    axisX: {
      reversed: true,
      labelTextAlign: "left",
      labelMaxWidth: 150,
    },
    data: [
      {
        type: "bar",
        dataPoints: [
          {
            y: (stats[0].base_stat / 255) * 100,
            label: stats[0].stat.name + ": " + stats[0].base_stat,
            color: "rgba(255, 56, 56, 0.85)",
          },
          {
            y: (stats[1].base_stat / 181) * 100,
            label: stats[1].stat.name + ": " + stats[1].base_stat,
            color: "rgb(255, 162, 75)",
          },
          {
            y: (stats[2].base_stat / 230) * 100,
            label: stats[2].stat.name + ": " + stats[2].base_stat,
            color: "rgb(253, 238, 20)",
          },
          {
            y: (stats[3].base_stat / 173) * 100,
            label: stats[3].stat.name + ": " + stats[3].base_stat,
            color: "rgb(71, 151, 255)",
          },
          {
            y: (stats[4].base_stat / 230) * 100,
            label: stats[4].stat.name + ": " + stats[4].base_stat,
            color: "rgb(111, 231, 74)",
          },
          {
            y: (stats[5].base_stat / 200) * 100,
            label: stats[5].stat.name + ": " + stats[5].base_stat,
            color: "rgb(255, 111, 190)",
          },
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Stats;
