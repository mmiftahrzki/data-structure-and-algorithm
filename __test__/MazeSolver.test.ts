import mazeSolver from "../MazeSolver";

test("maze solver", function () {
  const mazes = [
    [
      "xxxxxxxxxx x",
      "x        x x",
      "x        x x",
      "x xxxxxxxx x",
      "x          x",
      "x xxxxxxxxxx"],
    [
      "xxxxxxxxxx x",
      "x        x x",
      "x        x x",
      "x xxxxxxxx x",
      "            ",
      "x xxxxxxxxxx"],
  ];
  const starts = [
    { x: 10, y: 0 },
    { x: 0, y: 4 },
  ];
  const ends = [
    { x: 1, y: 5 },
    { x: 11, y: 4 },
  ];
  const mazeResults = [
    [
      { x: 10, y: 0 },
      { x: 10, y: 1 },
      { x: 10, y: 2 },
      { x: 10, y: 3 },
      { x: 10, y: 4 },
      { x: 9, y: 4 },
      { x: 8, y: 4 },
      { x: 7, y: 4 },
      { x: 6, y: 4 },
      { x: 5, y: 4 },
      { x: 4, y: 4 },
      { x: 3, y: 4 },
      { x: 2, y: 4 },
      { x: 1, y: 4 },
      { x: 1, y: 5 },
    ],
    [
      { x: 0, y: 4 },
      { x: 1, y: 4 },
      { x: 2, y: 4 },
      { x: 3, y: 4 },
      { x: 4, y: 4 },
      { x: 5, y: 4 },
      { x: 6, y: 4 },
      { x: 7, y: 4 },
      { x: 8, y: 4 },
      { x: 9, y: 4 },
      { x: 10, y: 4 },
      { x: 11, y: 4 },
    ],
  ];

  for (let i = 0; i < mazes.length; i++) {
    const result = mazeSolver(mazes[i], "x", starts[i], ends[i]);

    expect(result).toEqual(mazeResults[i]);
  }
});
