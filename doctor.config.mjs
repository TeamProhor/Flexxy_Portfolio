/** @type {import('react-doctor').Config} */
export default {
  ignore: {
    // Ignore all shadcn/ui components as they are library code
    files: [
      "src/components/ui/**",
    ],
  },
};
