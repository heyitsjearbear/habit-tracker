import { useState, useRef } from "react";
const EditCard = ({ habitDeets,myKey,editHabits, editClicked, changeEditClicked }) => {
  const [habit, setHabit] = useState(habitDeets.habit);
  const [date, setDate] = useState("");
  const [completed, setCompletedBox] = useState(habitDeets.completed);
  const checkBoxRef = useRef([]);
  const updateHandler = async (e) => {
    e.preventDefault();
    try {
      let updatedData = await fetch("http://localhost:3000/api/" + myKey, {
        method: "post",
        body: JSON.stringify({ habit, date, completed }),
      });
      const json = await updatedData.json();
      if (updatedData.ok) {
        alert("data submitted to database successfully");
        //update locally here
        editHabits((lastList) => {
          return [...lastList, json];
        });
        console.log(json);
        //console.log(habitsList);
        changeEditClicked(false);
      } else {
        throw new Error(
          JSON.stringify({ code: updatedData.status, message: updatedData.statusText })
        );
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <form action="">
        <input
          type="text"
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          ref={(box) => {
            checkBoxRef.current[0] = box;
          }}
          type="checkbox"
          value={completed}
          onChange={(e) => setCompletedBox(e.target.checked)}
        />
        <button type="submit" onClick={updateHandler}>
          update
        </button>
      </form>
    </>
  );
};

export default EditCard;
