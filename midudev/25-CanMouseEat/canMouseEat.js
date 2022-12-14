function canMouseEat(direction, game) {
  const mousePosition = game.reduce((position, row, i) => {
    const x = row.indexOf('m');
    return x === -1 ? position : { x: x, y: i };
  }, {});

  const targetPosition = { ...mousePosition };

  if (direction === 'up' && mousePosition.y !== 0) { 
    targetPosition.y = mousePosition.y - 1;
  }

  if (direction === 'down' && mousePosition.y !== game.length - 1) {
    targetPosition.y = mousePosition.y + 1;
  }

  if (direction === 'left' && mousePosition.x !== 0) {
    targetPosition.x = mousePosition.x - 1;
  }

  if (direction === 'right' && mousePosition.x !== game[0].length - 1) {
    targetPosition.x = mousePosition.x + 1;
  }

  if (game[targetPosition.y][targetPosition.x] === '*') {
    return true;
  }

  return false
}

module.exports = {
  canMouseEat,
};
