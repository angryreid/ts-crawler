function getPoint(point: {x: number, y: number}): number {
  return Math.sqrt(point.x ** 2 + point.y ** 2);
}

console.log(getPoint({x: 3, y: 4}))