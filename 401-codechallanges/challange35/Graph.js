class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }
  addVertex(vertex) {
    // we need to add the vertex to the adjacency list and set an empty array for the edges
    this._adjacencyList.set(vertex, []);
    return vertex;
  }
  addDirectedEdge(startVertex, endVertex) {
    if (
      !this._adjacencyList.has(startVertex) ||
      !this._adjacencyList.has(endVertex)
    ) {
      return "Invalid vertex";
    }
    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex));
  }
  printAll() {
    let str = "";
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      let edg;
      if (edge[0]) {
        edg = "";
        for (let i = 0; i < edge.length; i++) {
          edg += `${edge[i].vertex.value},`;
        }
      } else {
        edg = edge;
      }
      str = str + ` Vertex ${vertex["value"]} => edge ${edg} ||`;
    }
    return str;
  }

  getNeighbors(node) {
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      if (vertex === node) {
        return edge;
      }
    }
  }

  getGraphByNode(node) {
    if (this._adjacencyList.has(node)) {
      return this.printAll();
    }
  }

  size() {
    if (this._adjacencyList.size > 0) {
      return this._adjacencyList.size;
    } else {
      return null;
    }
  }
}

module.exports = { Graph, Vertex, Edge };
