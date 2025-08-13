const path = require("path");

module.exports = {
  out: "./drizzle",
  schema: "./auth-schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
};
