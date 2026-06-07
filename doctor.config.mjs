/** @type {import('react-doctor').Config} */
const config = {
  ignore: {
    // Ignore all shadcn/ui components as they are library code
    files: [
      "src/components/ui/**",
      "doctor.config.mjs",
    ],
  },
};

export default config;
