/**
 * Helper function to get the correct asset path for GitHub Pages
 * Vite automatically replaces import.meta.env.BASE_URL with the base path
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Combine with base URL from vite config
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

