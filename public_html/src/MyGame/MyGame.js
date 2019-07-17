function MyGame(htmlCanvasID) {
  gEngine.Core.initializeWebGL(htmlCanvasID);
  // The shader for drawing
  this.mConstColorShader = new SimpleShader(
    "src/GLSLShaders/SimpleVS.glsl", // Path to the VertexShader
    "src/GLSLShaders/SimpleFS.glsl"); // Path to the FragmentShader
  // Step C: Create the Renderable objects:
  console.log(this.mConstColorShader);
//   this.mWhiteSq = new Renderable(this.mConstColorShader);
//   console.log(this.mWhiteSq);
//   this.mWhiteSq.setColor([1, 1, 1, 1]);
//   this.mRedSq = new Renderable(this.mConstColorShader);
//   this.mRedSq.setColor([1, 0, 0, 1]);
//   // Step D: Draw!
//   gEngine.Core.clearCanvas([0, 0.8, 0, 1]); // Clear the canvas
//   // Step D1: Draw Renderable objects with the white shader
//   this.mWhiteSq.draw();
//   // Step D2: Draw Renderable objects with the red shader
//   this.mRedSq.draw();

  // Step C1: Clear the canvas
  gEngine.Core.clearCanvas([0, 0.8, 0, 1]);
  // Step C2: Activate the proper shader
  this.mShader.activateShader([0, 0, 1, 1]);
  // Step C3: Draw with the currently activated geometry and the activated shader
  var gl = gEngine.Core.getGL();
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}