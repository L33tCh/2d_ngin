// sets the precision for floating point computation
precision mediump float;

// to transform the vertex position
uniform vec4 uPixelColor;

void main(void) {
  gl_FragColor = uPixelColor;
}
