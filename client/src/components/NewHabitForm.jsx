import { useRef, useState } from "react";

const NewHabitForm = () => {
  const [habit, setHabit] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompletedBox] = useState(false);
  const checkBoxRef = useRef([]);
  const submitHabit = async (e) => {
    e.preventDefault();
    // console.log(`Date: ${date}, habit: ${habit}, completed: ${completed}`)
    try{
      let newData = await fetch("http://localhost:3000/api/post", {
      method: "post",
      body: JSON.stringify({ habit, date, completed }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await newData.json();

    alert("data submitted to database successfully");
      //reset fields
      setHabit("");
      setDate("");
      setCompletedBox(false);
      checkBoxRef.current[0].checked = false;
    }
    catch (error){
      console.log(error);
    }
    // let newData = await fetch("http://localhost:3000/api/post", {
    //   method: "post",
    //   body: JSON.stringify({ habit, date, completed }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const json = await newData.json();
    // if (json.ok) {
    //   alert("data submitted to database successfully");
    //   //reset fields
    //   setHabit("");
    //   setDate("");
    //   setCompletedBox(false);
    //   checkBoxRef.current[0].checked = false;
    // } 
    // else {
    //   console.log(Promise.reject(json))
    // }
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
        <button type="submit" onClick={submitHabit}>
          submit
        </button>
      </form>
    </>
  );
};

export default NewHabitForm;