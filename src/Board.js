import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";
import { generateInitialGrid } from "./helpers";

/**
 *
 * Board Component:
 *
 * props: BoardRows , BoardCols, chanceLightStartsOn
 * state: grid, setGrid
 *
 *
 * Builds initial grid from an array of arrays, saves grid in state, renders Cell component for each boolean
 *
 * toggleCellsAround = updates the grid using setGrid, by making a copy of the oldGrid, then calls the toggleCell fn on each neighboring cell.
 *
 * toggleCell = toggles boolean for cells inside of the grid.
 *
 */

const Board = ({ BoardRows = 5, BoardCols = 5, chanceLightStartsOn = 0.1 }) => {
  //creating initial grid and saving to state
  const [grid, setGrid] = useState(
    generateInitialGrid(BoardRows, BoardCols, chanceLightStartsOn)
  );

  const hasWon = (board) => {
    return board.every((row) => row.every((cell) => !cell));
  };

  const toggleCellsAround = (coordinates) => {
    setGrid((oldGrid) => {
      console.log(oldGrid);
      const newGrid = oldGrid.map((row) => [...row]);
      const [row, col] = coordinates.split("-").map(Number);

      //Function to toggle cells t or f
      const toggleCell = (row, col) => {
        //Only toggle cells inside grid
        if (row >= 0 && row < BoardRows && col >= 0 && col < BoardCols) {
          newGrid[row][col] = !newGrid[row][col];
        }
      };

      //Toggle clicked cell first
      toggleCell(row, col);

      //Toggle neighboring cells, above, below, left, right
      toggleCell(row - 1, col);
      toggleCell(row + 1, col);
      toggleCell(row, col - 1);
      toggleCell(row, col + 1);

      console.log(newGrid);
      return newGrid;
    });
  };

  if (hasWon(grid)) {
    return <div className="GameWon">You Won</div>;
  }
  return (
    <div className="Board">
      {grid.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((isLit, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              isLit={isLit}
              onClick={() => toggleCellsAround(`${rowIndex}-${colIndex}`)}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Board;
