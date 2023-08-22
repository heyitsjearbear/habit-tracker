import { useEffect, useState } from "react";
import NewHabitForm from "./components/NewHabitForm";
import HabitCard from "./components/HabitCard";
import './App.css'
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
    <h1>Productibity Tracker</h1>
      <NewHabitForm habitsList={habits} editHabits={setHabits} />
      <div className="habits">
        {habits &&
          habits.map((habitEntry) => (
            <HabitCard className = "habit-card"
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
