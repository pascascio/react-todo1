import React from 'react';


const todoList = [
{
  id: 1,
  title: "Take clothes to dry cleaners",
},
{
  id: 2,
  title: "Confirm Appointment with Dr.Jones",
},
{
  id: 3,
  title: "RSVP for Parker's Piano Recital",
},
];



function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
          {
           todoList.map(function(item){
                return <li key={item.id}>{item.title}</li>
            })
          }
      </ul>
    </div>
  );
}


export default App;
