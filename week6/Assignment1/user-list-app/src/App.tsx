

const users: User[] = [
  { id: 1, name: 'Lakshmy', email: 'lakshmy@example.com' },
  { id: 2, name: 'Zoa', email: 'zoa@example.com' },
  { id: 3, name: 'Vicky', email: 'Vicky@example.com' },
];
function displayUserdetails()
{
  <h2>{users.id}</h2>
  <h2>{users.name}</h2>
}
const ThemeToggle = () => {
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 border rounded mb-4">
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

function App() {
  return (
    <h1>heyy</h1>
  );
}

export default App;
