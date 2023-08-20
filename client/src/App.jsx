import { useEffect, useState } from "react";
import NewHabitForm from "./components/NewHabitForm";
import HabitCard from "./components/HabitCard";
const App = () => {
  const [habits, setHabits] = useState(null);
  //fetch habits from database
  useEffect(() => {
    const fetchHabits = async () => {
      const response = await fetch("http://localhost:3000/api/getAll");
      const json = await response.json();
      if (response.ok) {
        setHabits(json);
      }
    };
    fetchHabits();
  }, []);

  return (
    <>
      <NewHabitForm habitsList={habits} editHabits={setHabits} />
      <div className="habits">
        {habits &&
          habits.map((habitEntry) => (
            <HabitCard
              key={habitEntry._id}
              myKey = {habitEntry._id}
              habitDeets={habitEntry}
              editHabits={setHabits}
            />
          ))}
      </div>
    </>
  );
};

export default App;
