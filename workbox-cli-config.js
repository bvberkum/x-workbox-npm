module.exports = {
  "globDirectory": "./dist/",
  "globPatterns": [
    "**/*.html",
    "**/*.js"
  ],
  "swDest": "dist/sw.js",
  "clientsClaim": true,
  "skipWaiting": true,
  "runtimeCaching":  [
    {
      "urlPattern": new RegExp('https://hacker-news.firebaseio.com'),
      "handler": "staleWhileRevalidate"
    }
  ]
};