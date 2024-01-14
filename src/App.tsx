/**
 * App component
 */
const App = (): React.ReactNode => {
  console.log("🚀 ~ import.meta.env.VITE_APP_NAME:", import.meta.env.VITE_APP_NAME);
  return (
    <div>
      <div>{import.meta.env.VITE_APP_NAME}</div>
    </div>
  );
};

export default App;
