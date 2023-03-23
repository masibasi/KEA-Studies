import { RecoilRoot } from "recoil";
import "./App.css";
import { Testpage } from "./Testpage";

function App() {
    return (
        <RecoilRoot>
            <div className="App">
                <Testpage />
            </div>
        </RecoilRoot>
    );
}

export default App;
