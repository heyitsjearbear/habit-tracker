/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const HabitDetails = ({ habit }) => {
  return (
    <div className="habit-details">
      <h4>{habit.habit}</h4>
      <p>
        <strong>Date: </strong>
        {habit.date}
      </p>
      <p>
        <strong>Completed: </strong>
        {habit.completed ? <input type="checkbox" checked/>: <input type="checkbox"/>}
      </p>
    </div>
  );
};
export default HabitDetails;
