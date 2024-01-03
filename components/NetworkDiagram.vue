<script setup>
import { DataSet } from "vis-data/peer";
import { Network, networkOptions } from "vis-network/peer";
import "vis-network/styles/vis-network.css";

const networkDiagram = ref();

const tagsQuery = groq`
  *[_type == "tags"] {
    _id,
    title
  }`;

const projectQuery = groq`
  *[_type == "projectType"] {
    _id,
    title,
    'slug' : slug.current, 
    roles[] -> {
      _id,
      title
    },
  }`;

const { data: categories } = await useSanityQuery(tagsQuery);
const { data: projects } = await useSanityQuery(projectQuery);



onMounted(() => {

  const rolesNodes = categories.value?.map((roles) => ({
    id: roles._id,
    label: roles.title,
    color: {
      background: '#000',
      border: '#000',
      hover: {
        border: '#000',
        background: "#000"
      },
      highlight: {
        border: '#000',
        background: "#000"
      },
    },
    font: { color: "white" },
    value: 30
  })) || [];

  const projectNodes = projects.value?.map((project) => ({
    id: project._id,
    label: project.title,
    url: project.slug,
    color: {
      background: '#f8f8f8',
      border: '#000',
      hover: {
        border: '#000',
        background: "#FFE5A4",
      },
      highlight: {
        border: '#000',
        background: "#FFE5A4"
      },
    },
    value: 10
  })) || [];


  const nodes = rolesNodes.concat(projectNodes);

  const nodesDataSet = new DataSet(nodes);

  const edges = [];

  projects.value?.forEach((project) => {
    project.roles?.forEach((roles) => {
      const matchingRolesNode = nodesDataSet.get(roles._id);

      if (matchingRolesNode) {
        edges.push({ from: matchingRolesNode.id, to: project._id });
      }
    });
  });


  const container = networkDiagram.value;

  const data = {
    nodes: new DataSet(nodes),
    edges: new DataSet(edges),
  };
  console.log(data)

  const options = {
    nodes: {
      shape: "box",
      borderWidth: 1,
      borderWidthSelected: 1,
      shapeProperties: {
        borderRadius: 0,
      },
      margin: 5,
      widthConstraint: {
        maximum: 150,
      },
      font: {
        face: 'Venus Plomb',
      },
      scaling: {
        customScalingFunction: function (min, max, total, value) {
          return value / total;
        },
        min: 5,
        max: 150,
      }
    },
    edges: {
      dashes: true,
      selectionWidth: 0.1,
      selfReference: {
        size: 30,
        angle: Path2D.PI / 4
      },
      smooth: false,
    },
    interaction: {
      hover: true,
      selectConnectedEdges: false,
      hoverConnectedEdges: false
    },
    physics: {
      forceAtlas2Based: {
        gravitationalConstant: -400,
        springConstant: 0.6,
        springLength: 80,
        damping: 0.35,
      },
      stabilization: false,
      wind: { x: 0, y: 0 },
    }
  };


  const network = new Network(container, data, options);
  network.fit({ minZoomLevel: 1 });
  network.on('selectNode', function (params) {
    if (params.nodes.length === 1) {
      let node = nodesDataSet.get(params.nodes[0]);
      if (node && node.url) {
        window.open(`http://localhost:3000/project/${node.url}`, '_blank');
      }
    }
  });

});


watchEffect(() => {
  const activeNetwork = useActiveNetwork();
  activeNetwork.value;
})


</script>
<template>
  <div ref="networkDiagram" id="network"></div>
</template>
<style scoped>
.dimensions {
  position: fixed;
  top: 4px;
  left: var(--space-s);
  color: var(--color-black);
  font-size: 16px;
  z-index: 4;
}

#network {
  display: block;
  width: 100svw;
  height: 100svh;
  background-color: var(--color-primary-light);
  overflow: hidden;
}
</style>
