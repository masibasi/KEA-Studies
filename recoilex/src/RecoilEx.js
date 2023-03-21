import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from "recoil";

export default function App() {
    const textState = atom({ key: "textState", default: "" });

    const charCountState = selector({
        key: "charCountState", // unique ID (with respect to other atoms/selectors)
        get: ({ get }) => {
            const text = get(textState);
            return text.length;
        },
    });

    const TextInput = () => {
        const [text, setText] = useRecoilState(textState);
        const onChange = (event) => {
            setText(event.target.value);
        };
        return (
            <div>
                <input type="text" value={text} onChange={onChange} />
                <br />
                Echo : {text}
            </div>
        );
    };

    const CharacterCount = () => {
        const count = useRecoilValue(charCountState);

        return <>CharacterCount : {count}</>;
    };

    const CharacterCounter = () => {
        return (
            <div>
                <TextInput />
                <CharacterCount />
            </div>
        );
    };

    const Add10 = () => {
        const count = useRecoilState(textState);

        return <>Add 10 : {Number.parseInt(count) + 10}</>;
    };
    const CharacterAdder = () => {
        return (
            <div>
                <TextInput />
                <Add10 />
            </div>
        );
    };
    return (
        <RecoilRoot>
            <div className="App">
                <h1>Hello GCU-Kakao</h1> <h2>Add 10</h2> <CharacterAdder />
            </div>
        </RecoilRoot>
    );
}
