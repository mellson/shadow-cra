import { createMachine } from 'xstate';
import './App.css';

const miniMachineConfig = {
  id: 'mini',
  initial: 'idle',
  states: { idle: {} },
};
const machine = createMachine(miniMachineConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <iframe
          id="sandboxFrame"
          sandbox="allow-scripts"
          srcDoc="
          <script>
          // Your JavaScript code
          console.log('Hello, Sandbox!');
          </script>
          "
        ></iframe>
      </header>
    </div>
  );
}

export default App;
