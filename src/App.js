import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="text-5xl font-bold underline">Hello world!</h1>
      <div class="p-7 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div class="shrink-0">
          <img
            class="h-12 w-12"
            src="https://www.clipartmax.com/png/full/480-4804984_chit-chat-media-group-energy-sector-icon-png.png"
            alt="ChitChat Logo"
          />
        </div>
        <div>
          <div class="text-xl font-bold text-black">ChitChat</div>
          <p class="text-slate-600 font-medium">You have a new message!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
