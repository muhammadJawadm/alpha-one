// Main color palette for Alpha One App
export const COLORS = {
  // Background colors
  background: {
    primary: '#0F172A',    // Main app background
    secondary: '#1E293B',  // Cards, containers
    tertiary: '#0F1729',   // Input fields
  },
  
  // Text colors
  text: {
    primary: '#FFFFFF',    // Main text
    secondary: '#9CA3AF',  // Secondary text (gray-400)
    muted: '#6B7280',      // Muted text (gray-500)
  },
  
  // Border colors
  border: {
    default: '#374151',    // Default borders (gray-700)
    focus: '#3B82F6',      // Focus state (blue-500)
  },
  
  // Brand colors
  brand: {
    primary: '#3B82F6',    // Blue
    secondary: '#10B981',  // Green
  },
  
  // Button colors
  button: {
    primary: '#3B82F6',         // Blue
    primaryHover: '#2563EB',    // Darker blue
    secondary: '#6B7280',       // Gray
    secondaryHover: '#4B5563',  // Darker gray
    danger: '#EF4444',          // Red
    dangerHover: '#DC2626',     // Darker red
    success: '#10B981',         // Green
    successHover: '#059669',    // Darker green
  },
  
  // Status colors
  status: {
    success: '#10B981',    // Green
    warning: '#F59E0B',    // Orange
    error: '#EF4444',      // Red
    info: '#3B82F6',       // Blue
  }
};

// Helper function to get nested color values
export const getColor = (path) => {
  return path.split('.').reduce((obj, key) => obj?.[key], COLORS);
};

export default COLORS;
