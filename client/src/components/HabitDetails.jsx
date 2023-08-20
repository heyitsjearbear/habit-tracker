/* eslint-disable react/prop-types */
const HabitDetails = ({
  habit,
  editHabits,
  isEditBtClicked,
  ChangeEditBtnClick,
}) => {
  const deleteHandler = async () => {
    const deleteID = habit._id;
    console.log(deleteID);
    const response = await fetch(
      `http://localhost:3000/api/delete/${deleteID}`,
      {
        method: "DELETE",
      }
    );
    //const json = await response.json();
    if (response.ok) {
      editHabits((lastList) => {
        let filteredArr = lastList.filter((obj) => {
          return obj._id !== deleteID;
        });
        return filteredArr;
      });
    } else alert("error");
  };
  const editHandler = () => {
    ChangeEditBtnClick(!isEditBtClicked);
  };
  return (
    <>
      <div className="habit-details">
        <h4>{habit.habit}</h4>
        <p>
          <strong>Date: </strong>
          {habit.date}
        </p>
        <p>
          <strong>Completed: </strong>
          {habit.completed ? <p>☑️</p> : <p>❌</p>}
        </p>
      </div>
      <button onClick={editHandler}>Edit habit</button>
      <button onClick={deleteHandler}>Delete habit</button>
    </>
  );
};

export default HabitDetails;
