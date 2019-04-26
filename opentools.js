window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Open Tools for 3D-Visualization"
	},
	axisX: {
		title:"Type of tool (1 = Library, 10 = Application)"
	},
	axisY: {
		title:"Level of Complexity"
	},
	legend:{
		horizontalAlign: "left"
	},
	data: [{
		type: "bubble",
		showInLegend: true,
		legendText: "Size of Bubble Represents Repo Size",
		legendMarkerType: "circle",
		legendMarkerColor: "grey",
		indexLabelPlacement: "auto",		
		indexLabelFontSize: 16,
		indexLabelFontColor: "#eee",
		toolTipContent: "<b>{name}</b><br/>Url: {url} <br/> Github: {github}<br/>",
		dataPoints: [
			{ name: "ShaderToy", indexLabel: '{name}', url: 'www.shadertoy.com', repo: '-', x: 1, y: 10, z:40,  },
			{ name: "Blender", indexLabel: '{name}',url: 'www.blender.org', repo: '-', x: 9, y: 2.5, z:90,  },
			{ name: "Clara.io", indexLabel: '{name}',url: 'www.clara.io', repo: '-', x: 9, y: 1.5, z:60,  },
			{ name: "SketchFab", indexLabel: '{name}',url: 'www.sketchfab.com', repo: '-', x: 6, y: 1, z:60,  },
			{ name: "potree", indexLabel: '{name}',url: 'www.potree.org', repo: '-', x: 7, y: 5, z:90,  },
			{ name: "3D Forest", indexLabel: '{name}',url: 'www.3dforest.eu', repo: '-', x: 10, y: 3, z:30,  },
			{ name: "Gephi", indexLabel: '{name}',url: 'www.gephi.org', repo: '-', x: 9.5, y: 5, z:40,  },
			{ name: "MeshLab", indexLabel: '{name}',url: 'www.meshlab.net', repo: '-', x: 10, y: 4, z:100,  },
			{ name: "VTS Geospatial", indexLabel: '{name}',url: 'www.vts-geospatial.org', repo: 'melowntech/vts-browser-js', x: 6, y: 7, z:40,  },
			{ name: "TensorFlow Projector", indexLabel: '{name}',url: 'projector.tensorflow.org', repo: '-', x: 9, y: 9, z:40,  },
			{ name: "Celestia Space", indexLabel: '{name}',url: 'www.celestia.space', repo: 'CelestiaProject/Celestia', x: 8, y: 7, z:30,  },
			{ name: "NVIDIA Falcor", indexLabel: '{name}',url: 'developer.nvidia.com/falcor', repo: '-', x: 5, y: 10, z:90,  },
			{ name: "Google Cartographer", indexLabel: '{name}',url: '', repo: 'googlecartographer/cartographer', x: 4, y: 8, z:100,  },
			{ name: "Topology Toolkit", indexLabel: '{name}',url: 'topology-tool-kit.github.io', repo: '-', x: 3, y: 6, z:50,  },
			{ name: "three.js", indexLabel: '{name}',url: 'www.threejs.org', repo: '-', x: 2, y: 4, z:100,  },
			{ name: "DynaMaker", indexLabel: '{name}',url: 'www.dynamaker.com', repo: '-', x: 6.5, y: 4.5, z:70,  },
			{ name: "graph-Vis..", indexLabel: '{name}',url: 'davidpiegza.github.io/Graph-Visualization', repo: 'davidpiegza/Graph-Visualization', x: 3.5, y: 3, z:20,  },
			{ name: "Mayavi", indexLabel: '{name}', url: 'docs.enthought.com/mayavi/mayavi/', repo: '-', x: 4, y: 5, z:70,  },
			{ name: "delunator", indexLabel: '{name}', url: '', repo: 'mapbox/delunator', x: 1, y: 2, z:10,  },
			{ name: "earcut", indexLabel: '{name}', url: '', repo: 'mapbox/earcut', x: 1, y: 1, z:10,  },
			{ name: "React VR", indexLabel: '{name}', url: 'facebook.github.io/react-360', repo: 'facebook/react-360', x: 6, y: 5, z:50,  },
			
			
			
			
		]
	}]
});
chart.render();

}
