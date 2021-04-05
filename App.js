import {useState} from 'react'
import Header from './components/Header'
import Threads from './components/Threads'
function App() {
  //Have Static Threads for now
  //Included here so that it is not seperate with the component, thus using state hooks
  // i.e: Global State, can be accessed by other comps by Props
  const [threads, setThread] = useState([  //Hooks allowing state var in fun comp (any type)
    { //defaults
      id:1,
      text:'QuickFixes and Troubleshooting',
    },
    {
      id:2,
      text:'JS Issues Faced',
    },
    {
      id:3,
      text:'Casual Talks',
    },
  ])

  //Deleting the threads
  // setThread - immuatable cuz of states, thus using this to recreate, passdown and change
  const deleteThread = (id) =>{
    setThread(threads.filter((thread) => thread.id!==id))  //Function to update the state of the app
  }
  return (
    <div className='container'>
      <Header />
      {threads.length > 0 ? (
      <Threads threads={threads} onDelete={deleteThread} />) //Checks for threads
      :('Create a new Thread')} 
    </div>
  );
}

export default App;

//Todo:
//replace console log with logger
//Refactor Hooks by normal class and function components based codes
//Creates Routes for the indv thread and implement 'Add' function
//