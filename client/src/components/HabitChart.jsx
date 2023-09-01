import { Bar } from "react-chartjs-2";

const HabitChart = ({ habitDates }) => {
  const dates = new Array();
  for (let i = 0; i < habitDates.length; i++) {
    dates.push(habitDates[i].date);
  }
  console.log("after appending test: ", dates)
  return (
    <div className="chart-container">
      <Bar
        data={{
          labels: dates,
          datasets: [
            {
              label: "# of things completed",
              data: [5, 4, 7, 6, 4, 3],
              fill: true,
              borderWidth: 4,
              backgroundColor: "lightBlue",
              borderColor: "blue",
              responsive: true,
            },
          ],
        }}
        options={{ maintainAspectRatio: false, responsive: true }}
      />
    </div>
  );
};

export default HabitChart;
