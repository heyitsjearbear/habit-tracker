/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const HabitDetails = ({ habit, editHabits }) => {
  const deleteHandler = async () => {
    const deleteID = habit._id;
    console.log(deleteID);
    const response = await fetch(`http://localhost:3000/api/delete/${deleteID}`, {
      method: "DELETE",

    });
    //const json = await response.json();
    if (response.ok) {
      editHabits((lastList) => {
        let filteredArr = lastList.filter((obj) => {
          return obj._id !== deleteID;
        });
        return filteredArr;
      });
    } else alert("error")
  };
  return (
    <div className="habit-details">
      <h4>{habit.habit}</h4>
      <p>
        <strong>Date: </strong>
        {habit.date}
      </p>
      <p>
        <strong>Completed: </strong>
        {habit.completed ? (
          <input type="checkbox" checked />
        ) : (
          <input type="checkbox" />
        )}
      </p>
      <button onClick={deleteHandler}>Delete habit</button>
    </div>
  );
};
export default HabitDetails;
