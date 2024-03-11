[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/2Wy-Iis-)
# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Dijkstra's Runtime Analysis:
The implementation focuses on two key factors: the number of nodes or vertices $(V)$ in the graph, and how many edges or connections $(E)$ there are between these nodes.
### Deriving the Complexity:
- **Initialization**: The algorithm initializes the distances to &infin; and sets the source to 0. This step iterates once over all vertices, giving us a complexity of $O(V)$.
  
- **Finding the Unmarked Vertex/Node with Lowest Distance**: Since the implementation doesn't use a priority queue, this step requires iterating over all vertices to find the unmarked vertex with the lowest distance. Moreover, because this operation is inside the main loop that could iterate up to $V$ times in the worst case, and each iteration potentially examines all V vertices, this contributes $O(V^2)$ to the complexity.

- **Updating Distances**: For each selected vertex, the algorithm updates the distance to its neighbors. In the worst-case scenario, an update operation could be needed for every edge in the graph. However, since these updates are distributed across the V iterations of the main loop, the total contribution from updating distances across all iterations is $O(E)$.

Given these considerations, the dominant factor here is the $O(V^2)$ complexity from selecting the unmarked vertex with the lowest distance (without a priority queue). The $O(V)$ initialization and $O(E)$ for updating distances are overshadowed by the $O(V^2)$ operation.
Therefore, the overall complexity of the Dijkstra's implementation is $Θ(V^2)$

**Conclusion**:
The $Θ(V^2)$ complexity arises primarily from the repeated search for the vertex with the lowest distance among all unvisited vertices, a process that lacks efficiency. A priority queue can help speed up finding the smallest distance node, lowering the overall time needed, especially in graphs where there are lots of nodes but not necessarily a connection between each. Without a priority queue to optimize the selection process, the implementation is less efficient for large or dense graphs.

