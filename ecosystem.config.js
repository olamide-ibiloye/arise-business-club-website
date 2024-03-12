module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      user: "olamide",
      host: "158.220.114.4",
      ref: "origin/main",
      repo: "https://github.com/olamide-ibiloye/arise-business-club-website.git",
      path: "/home/olamide",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};
