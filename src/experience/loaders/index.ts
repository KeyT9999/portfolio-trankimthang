/**
 * Asset loader interfaces for future 3D models and textures
 */
export interface ModelLoaderResult<T = unknown> {
  data: T;
  isLoaded: boolean;
}
