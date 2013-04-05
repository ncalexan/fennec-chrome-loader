let { register } = require("./chrome-protocol");

register("local", require("sdk/self").data.url());
register("remote", "http://twitter.com/");
