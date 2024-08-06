import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Opexa Portal SDK</span>,
  project: {
    link: "https://github.com/HighOutputVentures/opexacms-templates",
  },
  docsRepositoryBase:
    "https://github.com/HighOutputVentures/opexacms-templates",
  primaryHue: 40,
  primarySaturation: 100,
  useNextSeoProps() {
    return {
      title: "Opexa Portal SDK",
    };
  },
};

export default config;
