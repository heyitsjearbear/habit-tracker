import { useEffect, useState } from "react";
import NewHabitForm from "./components/NewHabitForm";
import HabitDetails from "./components/HabitDetails"
const App = () => {
  const [habits, setHabits] = useState(null);
  //fetch habits from database
  useEffect(() => {
    const fetchHabits = async () => {
      const response = await fetch("http://localhost:3000/api/getAll");
      const json = await response.json();
      if(response.ok) {
        setHabits(json);
      }
    }
    fetchHabits();
  }, [])

  return (
    <>
      <NewHabitForm habitsList={habits} editHabits={setHabits} />
      <div className="habits">
        {habits && habits.map((habitEntry) => (
          <HabitDetails key={habitEntry._id} habit = {habitEntry} />
        ))}
      </div>
    </>
  );
};

export default App;
