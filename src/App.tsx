import Button from "./components/Button";
const App = () => {
  const handleClick = () => console.log("Clicked");
  return (
    <div>
      <Button size="xs" color="indigo" onClick={handleClick}>
        Extral Small Button
      </Button>
      <Button size="sm" color="gray" onClick={handleClick}>
        Small Button
      </Button>
      <Button size="m" color="emerald" onClick={handleClick}>
        Medium Button
      </Button>
      <Button size="l" color="blue" onClick={handleClick}>
        Large Button
      </Button>
      <Button size="xl" color="red" onClick={handleClick}>
        Extra Large Button
      </Button>
      <Button type="secondary" size="xl" color="gray" onClick={handleClick}>
        Secondary Extra Large Button
      </Button>
      <Button type="soft" size="xl" color="emerald" onClick={handleClick}>
        Soft Extra Large Button
      </Button>
    </div>
  );
};

export default App;
