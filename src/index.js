/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  count = 0;
  for (let i = 0; i < preferences.length; i++) {
    const loverA = preferences[i];
    const loverB = preferences[loverA - 1];
    const loverC = preferences[loverB - 1];
    if ((i + 1) == loverC && (i + 1) != loverA) {
      count++;
      preferences[i] = 0;
      preferences[loverA - 1] = 0;
      preferences[loverB - 1] = 0;
    }
  }
  return count;
};
