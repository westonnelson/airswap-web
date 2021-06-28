import { Suspense } from "react";
import { themes } from "@storybook/theming";

import "../src/i18n/i18n";
import "../src/index.css";

export const parameters = {
  // storybook preview-wrapper defines the preview background color.
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appContentBg: "#111215" },
    // Override the default light theme
    // light: { ...themes.normal, appBg: "red" },
    // Also apply the light and dark classes to preview
    stylePreview: true,
  },
};

// Suspense needed for i18n.
export const decorators = [
  (story, context) => {
    return (
      <Suspense fallback="Loading...">
        <div className="flex">{story(context)}</div>
      </Suspense>
    );
  },
];
