import type { ShaderUniforms } from "@/types/experience";

/**
 * Placeholder interface for future paper curl & ink shaders
 */
export interface ShaderDefinition {
  vertexShader: string;
  fragmentShader: string;
  uniforms: ShaderUniforms;
}
