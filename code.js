function dijkstra(graph, sourceNode) {
    const distances = {};
    const visited = new Set();
    const totalVertices = Object.keys(graph).length;

    // Initialize distances
    for (const vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[sourceNode] = 0;

    while (visited.size < totalVertices) {
        let currentVertex = null;
        
        // Select the unmarked vertex with the lowest distance
        for (const vertex in distances) {
            if (!visited.has(vertex) && (currentVertex === null || distances[vertex] < distances[currentVertex])) {
                currentVertex = vertex;
            }
        }

        if (currentVertex === null) {
            break;
        }

        // Mark the current vertex and update distances
        visited.add(currentVertex);
        
        for (const neighbor in graph[currentVertex]) {
            const distance = distances[currentVertex] + graph[currentVertex][neighbor];
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
            }
        }
    }

    return distances;
}

module.exports = { dijkstra };

