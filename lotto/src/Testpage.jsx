import { atom, RecoilRoot, useRecoilState } from "recoil";
import "./App.css";
import Lottery from "./GPTLotto";
import Lotto from "./Lotto";
import { ballsState } from "./Recoil";

export const Testpage = () => {
    const [balls, setBalls] = useRecoilState(ballsState);

    return (
        <RecoilRoot>
            <div className="TestPage">
                <input
                    value={
                        balls.filter((it) => {
                            return it.id === 0;
                        })[0].num
                    }
                    onChange={(e) => {
                        setBalls(
                            balls.map((it) =>
                                it.id === 0
                                    ? {
                                          id: it.id,
                                          num: e.target.value,
                                      }
                                    : it
                            )
                        );
                    }}
                />
                <input
                    value={
                        balls.filter((it) => {
                            return it.id === 1;
                        })[0].num
                    }
                    onChange={(e) => {
                        setBalls(
                            balls.map((it) =>
                                it.id === 1
                                    ? {
                                          id: it.id,
                                          num: e.target.value,
                                      }
                                    : it
                            )
                        );
                    }}
                />
                <div className="Result">
                    Result :
                    {balls.map((it) => (
                        <Ball key={it.id} num={it.num} />
                    ))}
                </div>
            </div>
            <input
                value={
                    balls.filter((it) => {
                        return it.id === 0;
                    })[0].num
                }
            />
            <input
                value={
                    balls.filter((it) => {
                        return it.id === 1;
                    })[0].num
                }
            />
            <input />
            <input />
            <input />
            <input />
            <input />
            <input />
            <input />
            <button className="">로또 생성하기</button>
        </RecoilRoot>
    );
};
export const Ball = (props) => {
    return <div className="Ball">{props.num}</div>;
};
