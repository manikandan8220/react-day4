function ChildOne({ text }) {
        return <h2>Child One: {text}</h2>;
      }
      
function ChildTwo({ text }) {
       return <h2>Child Two: {text}</h2>;
      }
        
 function Task13() {
     const message = "Hello from Parent!";
      
        return (
          <div>
            <h1>Parent Component</h1>
            <ChildOne text={message} />
            <ChildTwo text={message} />
          </div>
        );
      }
export default Task13