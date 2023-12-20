const generateInitialGrid = (
  rows = 5,
  columns = 5,
  chanceLightStartsOn = 0.5
) => {
  const grid = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      row.push(Math.random() < chanceLightStartsOn);
    }
    grid.push(row);
  }
  return grid;
};

export { generateInitialGrid };
