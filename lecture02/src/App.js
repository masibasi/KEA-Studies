import "./App.css";
import { Comment } from "./Comment";
import { LandingPage } from "./LandingPage";

function App() {
    const users = [
        { id: 1, name: "jimin", comment: "hello~" },
        { id: 2, name: "seungil", comment: "hello~" },
        { id: 3, name: "yejin", comment: "hello~" },
        { id: 4, name: "doyeon", comment: "hello~" },
        { id: 5, name: "bumki", comment: "hello~" },
    ];
    return (
        <div className="App">
            {users.map((it) => (
                <Comment key={it.id} name={it.name} comment={it.comment} />
            ))}
            {/* <LandingPage /> */}
        </div>
    );
}

export default App;
