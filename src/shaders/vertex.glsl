uniform float uTime;
uniform float uNoiseStrength;
uniform float uNoiseSharpness;
uniform float uNoiseThickness;
uniform float uNoiseBrightness;

varying vec2 vUv;
varying float vTime;
varying float vNoiseStrength;
varying float vNoiseSharpness;
varying float vNoiseThickness;
varying float vNoiseBrightness;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  modelPosition.z = vNoiseThickness;

  vec4 viewPosition = viewMatrix * modelPosition;

  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  vUv = uv;
  vTime = uTime;
  vNoiseStrength = uNoiseStrength;
  vNoiseSharpness = uNoiseSharpness;
  vNoiseThickness = uNoiseThickness;
  vNoiseBrightness = uNoiseBrightness;
}
