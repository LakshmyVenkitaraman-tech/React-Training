export default function App() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  const search = useCallback(async () => {
    const res = await fetch(
      `https://demo.dataverse.org/api/search?q=${debouncedValue}`
    );
    const json = await res.json();
    console.log(json);
  }, [debouncedValue]);

  useEffect(() => {
    search();
  }, [debouncedValue, search]);

  return (
    <div className="App">
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}