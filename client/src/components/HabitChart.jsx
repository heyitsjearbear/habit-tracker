import { Line } from "react-chartjs-2";

const HabitChart = () => {
  return (
    <div className="chart-container">
      <Line
        data={{
          labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "# of things completed",
              data: [5, 4, 7, 6, 4, 3],
              fill: true,
              borderWidth: 4,
              backgroundColor: "green",
              borderColor: "red",
              responsive: true,
            },
          ],
        }}
        isResponsive = 'true'
        options={{ maintainAspectRatio: false, responsive:true }}
      />
    </div>
  );
};

export default HabitChart;
