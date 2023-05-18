const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = { 
    // product host
    user: "media@dacn.site",
    password: "[{oK4OivPKZx",
    host: "14.225.255.250",

    port: 21,
    localRoot: "./build",
    remoteRoot: "/",
    include: ["*", "**/*"],      // this would upload everything except dot files
    // include: ["*.php", "dist/*", ".*"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    // exclude: [
    //     "dist/**/*.map",
    //     "node_modules/**",
    //     "node_modules/**/.*",
    //     ".git/**",
    // ],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true,
    // use sftp or ftp
    sftp: false,
};

ftpDeploy
    .deploy(config)
    .then((res) => console.log("finished:", res))
    .catch((err) => console.log(err));