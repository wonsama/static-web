module.exports = {
  apps: [
    {
      name: "static-web",
      script: "./src/app.js",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      cron_restart: "0 * * * *",
    },
  ],
};
