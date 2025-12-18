import "./App.css";
import { Exams } from "./components/Exams";
import { Layout } from "./components/Layout";
import { Login } from "./components/Login";

function App() {
  const isLogged = false;

  if (isLogged) {
    return <Login />;
  }

  return (
    <Layout>
      <Exams />
    </Layout>
  );
}

export default App;
