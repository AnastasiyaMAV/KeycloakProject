import { Protected } from "./components/Protected";
import { Matrix } from "./components/Matrix";

import useAuth from "./hooks/useAuth";

function App() {
  const isLogin = useAuth();

  return isLogin ? <Protected /> : <Matrix />;
}

export default App;
