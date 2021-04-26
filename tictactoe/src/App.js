import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [clickedCells, setClickedCells] = useState({});
  const [turn, setTurn] = useState(false);
  const [win, setWin] = useState(false);
  const clickCells = (element) => {
    let letter = turn ? 'X' : 'O';
    if (!clickedCells[element.currentTarget.id]) {
      setClickedCells({ ...clickedCells, [element.currentTarget.id]: letter });
      setTurn(!turn);
    }
  };

  useEffect(() => {
    if (Object.values(clickedCells).length > 4) {
      for (const key in clickedCells) {
        let currentElement = clickedCells[key];
        let [x, y] = key.split(',');
        //win possibilities
        let winX;
        let winX1;
        let winY;
        let winY1;
        let winDiagonalP;
        let winDiagonalP1;
        let winDiagonalS;
        let winDiagonalS1;

        if (x <= 2) {
          winX = `${parseInt(x)},${parseInt(y) + 1}`;
          winX1 = `${parseInt(x)},${parseInt(y) + 2}`;
        }

        if (y <= 2) {
          winY = `${parseInt(x + 1)},${parseInt(y)}`;
          winY1 = `${parseInt(x + 2)},${parseInt(y)}`;
        }

        //diagonals Main
        if (x <= 1 || y <= 1) {
          winDiagonalP = `${parseInt(x + 1)},${parseInt(y + 1)}`;
          winDiagonalP1 = `${parseInt(x + 2)},${parseInt(y + 2)}`;
        }

        //secundary diagonal
        if (x <= 1 || y <= 1) {
          winDiagonalS = `${parseInt(x + 1)},${parseInt(y - 1)}`;
          winDiagonalS1 = `${parseInt(x + 2)},${parseInt(y - 2)}`;
        }

        if (
          (clickedCells[winX] === currentElement &&
            clickedCells[winX1] === currentElement) ||
          (clickedCells[winY] === currentElement &&
            clickedCells[winY1] === currentElement) ||
          (clickedCells[winDiagonalP] === currentElement &&
            clickedCells[winDiagonalP1] === currentElement) ||
          (clickedCells[winDiagonalS] === currentElement &&
            clickedCells[winDiagonalS1] === currentElement)
        ) {
          setWin(true);
        }
      }
    }
  }, [clickedCells]);

  return (
    <div className='App'>
      <div className='game-board'>
        <div
          className='box'
          onClick={!win ? (e) => clickCells(e) : null}
          id='0,0'
        >
          {clickedCells['0,0']}
        </div>
        <div
          className='box'
          onClick={!win ? (e) => clickCells(e) : null}
          id='0,1'
        >
          {clickedCells['0,1']}
        </div>
        <div
          className='box'
          onClick={!win ? (e) => clickCells(e) : null}
          id='0,2'
        >
          {clickedCells['0,2']}
        </div>
        <div
          className='box'
          onClick={!win ? (e) => clickCells(e) : null}
          id='1,0'
        >
          {clickedCells['1,0']}
        </div>
        <div
          className='box'
          onClick={!win ? (e) => clickCells(e) : null}
          id='1,1'
        >
          {clickedCells['1,1']}
        </div>
        <div
          className='box'
          onClick={!win ? (e) => clickCells(e) : null}
          id='1,2'
        >
          {clickedCells['1,2']}
        </div>
        <div
          className='box'
          onClick={!win ? (e) => clickCells(e) : null}
          id='2,0'
        >
          {clickedCells['2,0']}
        </div>
        <div
          className='box'
          onClick={!win ? (e) => clickCells(e) : null}
          id='2,1'
        >
          {clickedCells['2,1']}
        </div>
        <div
          className='box'
          onClick={!win ? (e) => clickCells(e) : null}
          id='2,2'
        >
          {clickedCells['2,2']}
        </div>
      </div>
      <div>{win ? <p>Ganaste! {turn ? 'O' : 'X'}</p> : ''}</div>
    </div>
  );
}

export default App;
