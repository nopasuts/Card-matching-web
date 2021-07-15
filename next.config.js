const path = require('path');

const END_POINT = process.env.SERVICE_HOST_URL

module.exports = {
  basePath: "",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${END_POINT}/api/:path*`, // Proxy to Backend
        basePath: false
      },
    ];
  },
}
