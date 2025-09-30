module.exports = {
  apps: [
    {
      name: "portfolio-next",
      script: "npm",
      args: "start",
      env: {
        PORT: 3000,
        NODE_ENV: "production",
      },
    },
  ],
};
