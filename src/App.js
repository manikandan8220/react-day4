import React from 'react'
import Task1 from "./Components/Task1"
import Task2 from "./Components/Task2"
import Task3 from "./Components/Task3"
import Task4 from "./Components/Task4"
import Task5 from "./Components/Task5"
import Task6 from "./Components/Task6"
import Task7 from "./Components/Task7"
import Task8 from "./Components/Task8"
import Task9 from "./Components/Task9"
import Task10 from "./Components/Task10"
import Task11 from "./Components/Task11"
import Task12 from "./Components/Task12"
import Task13 from "./Components/Task13"

function App() {
   const UserInfo={
      name:"venkatesh",
      email:"venkatesh@gmail.com",
      phone:"123456789",
   };
   <>
   <coloredtext text="Hello, Red!" color="red" />
   <coloredtext text="Hello, Blue!" color="blue" />
   <coloredtext text="Hello, Green!" color="green" />
 </>

const showAlert = () => {
   alert("Button clicked!");
 };

    
  return (
    <div>
       <Task1/>
       <Task2 message = " Hii Greeting for today"/>
       <Task3 name ="mani" age ="23"/>
       <Task4 name ="Venki" age ="20" city ="salem"/>
       <Task5 name="mani" isStudent={true}/>
       <Task6 city="Attur" />
       <Task7 hobbies={["Reading", "Painting", "Cycling"]} />;
       <Task8 User={UserInfo} />;
       <Task9 name="golul"  />
       <Task10/>
       <Task11  message="Click Me" handleClick={showAlert} />;
       <Task12  title="React" description="A JavaScript library for building UIs." />
       <Task13/>
    </div>
  )
}
export default App
