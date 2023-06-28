import Sidebar from "./Layout/Sidebar";
import ContentLayout from "./Layout/ContentLayout";
function App() {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <ContentLayout />
      </div>
    </>
  );
}

export default App;
