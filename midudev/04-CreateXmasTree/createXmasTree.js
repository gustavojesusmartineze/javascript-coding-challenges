function createXmasTree(height) {
  let limit = (height * 2) - 1;
  let index = 1;
  let tree = '';
  let level = 0;

  while(level < height){
    let row = '*'.repeat(index);
    tree += fillSpaces(row, limit);
    tree += '\n';

    index += 2;
    level ++;
  }

  // Add footer
  let footer = '#';
  tree += fillSpaces(footer, limit);
  tree += '\n';
  tree += fillSpaces(footer, limit);

  return tree;
}

function fillSpaces(str, limit) {
  let row = str;

  while(row.length < limit){
    row = row.padStart(row.length + 1, '_');
    row = row.padEnd(row.length + 1, '_');
  }

  return row;
}

module.exports = {
  createXmasTree,
}
