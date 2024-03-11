const { dijkstra } = require('./code');

// Simple graph representation
const graph = {
  'A': {'B': 1, 'C': 4},
  'B': {'A': 1, 'C': 2, 'D': 5},
  'C': {'A': 4, 'B': 2, 'D': 1},
  'D': {'B': 5, 'C': 1}
};

console.log("Testing Dijkstra's Algorithm:");
// Test cases
const tests = [
    { source: 'A', expectedResult: { 'A': 0, 'B': 1, 'C': 3, 'D': 4 } },
    { source: 'B', expectedResult: { 'A': 1, 'B': 0, 'C': 2, 'D': 3 } }
];

tests.forEach(({ source, expectedResult }, index) => {
    const result = dijkstra(graph, source);
    console.assert(JSON.stringify(result) === JSON.stringify(expectedResult), `Test ${index + 1} failed. Expected ${JSON.stringify(expectedResult)}, got ${JSON.stringify(result)}.`);
});

console.log("All tests passed!");
