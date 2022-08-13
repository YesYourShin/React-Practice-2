// import './App.css';
import MyHeader from './MyHeader';

function App() {
    const word = 'Hello World';

    const style = {
        App: {
            backgroundColor: 'green',
        },
        h2: {
            color: 'yellow',
        },
        bold_text: {
            color: 'purple',
        },
    };

    const number = 6;

    return (
        <div className="App" style={style.App}>
            <MyHeader />
            <h2 style={style.h2}>{word}</h2>
            <b id="bold_text" style={style.bold_text}>
                {number}는 : {number % 2 === 0 ? '짝수' : '홀수'}
            </b>
        </div>
    );
}

export default App;
