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
    category[] -> {
      _id,
      title
    } 
  }`;

const { data: categories } = useSanityQuery(tagsQuery);
const { data: projects } = useSanityQuery(projectQuery);



onMounted(() => {

  const categoryNodes = categories.value?.map((category) => ({
    id: category._id,
    label: category.title,
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
  }));

  const projectNodes = projects.value?.map((project) => ({
    id: project._id,
    label: project.title,
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
  }));


  const nodes = categoryNodes.concat(projectNodes);

  const edges = [];

  projects.value?.forEach((project) => {
    project.category?.forEach((category) => {
      const matchingCategoryNode = categoryNodes.find((node) => node.id === category._id);

      if (matchingCategoryNode) {
        edges.push({ from: matchingCategoryNode.id, to: project._id });
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
      selfReferenceSize: 0.1,
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
