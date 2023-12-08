
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjMWQ4MTcxYy02N2M4LTRlMzctYjMwNi1iOGY3ODEyOWI1YjIiLCJpZCI6MTgxMTQ1LCJpYXQiOjE3MDExNDE2NDh9.5cNpP5nyd3XgzJEM59cY38McIcPyxj4GSN0bOZN26Mw';
    
const viewer = new Cesium.Viewer("cesiumContainer", {
    terrain: Cesium.Terrain.fromWorldTerrain(),
  });
  
  const osmBuildingsTileset = await Cesium.createOsmBuildingsAsync();
  viewer.scene.primitives.add(osmBuildingsTileset);
  
  viewer.scene.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(-74.019, 40.6912, 750),
    orientation: {
      heading: Cesium.Math.toRadians(20),
      pitch: Cesium.Math.toRadians(-20),
    },
    duration: 0,
  }); 