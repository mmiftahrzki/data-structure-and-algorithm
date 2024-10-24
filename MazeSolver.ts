export type Point = {
  x: number;
  y: number;
};

const directions = [
  [1, 0],
  [0, 1],
  [0, -1],
  [-1, 0],
];

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
  const x_axis_overflow = curr.x < 0 || curr.x >= maze[0].length;
  const y_axis_overflow = curr.y < 0 || curr.y >= maze.length;
  const current_position = maze[curr.y][curr.x];
  const been_there = seen[curr.y][curr.x];

  if (x_axis_overflow || y_axis_overflow) {
    return false;
  }

  if (current_position === wall) {
    return false;
  }

  if (been_there) {
    return false;
  }

  if (curr.y === end.y && curr.x === end.x) {
    path.push(curr);

    return true;
  }

  seen[curr.y][curr.x] = true;
  path.push(curr);

  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];

    if (walk(maze, wall, { x: curr.x + direction[0], y: curr.y + direction[1] }, end, seen, path)) {
      return true;
    }
  }

  path.pop();

  return false;
}

export default function mazeSolver(maze: string[] = [], wall: string, start: Point, end: Point): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  return path;
}
