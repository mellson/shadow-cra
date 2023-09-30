import './App.css';

window.hello = 'Hello, World!';

const miniMachineConfig = {
  predictableActionArguments: true,
  id: 'mini',
  initial: 'idle',
  states: { idle: {} },
};

function iframeContent(config) {
  return `
  <script type="module">
    import { createMachine } from 'https://cdn.skypack.dev/xstate';
    alert('Hello, World!');
    console.log(window.hello); 
    const machine = createMachine(${config});
    console.log(machine.id);
  </script>
  `;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <iframe
          sandbox="allow-scripts"
          title="sandbox"
          srcDoc={iframeContent(JSON.stringify(miniMachineConfig))}
          style={{ display: 'none', position: 'absolute' }}
        ></iframe>
      </header>
    </div>
  );
}

export default App;
