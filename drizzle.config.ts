import { defineConfig } from "drizzle-kit";
import { env } from "~/env";

export default defineConfig({
  dialect: "singlestore",
  schema: "./src/server/db/schema.ts",
  dbCredentials: {
    host: "svc-3482219c-a389-4079-b18b-d50662524e8a-shared-dml.aws-virginia-6.svc.singlestore.com",
    user: "muhammad-c1f4d",
    password: "IaUMeUdoEmTVID902PNUweUgejAZYhZq",
    port: 3333,
    database: "DRIVE_VELLICHOR_DB",
    ssl: {},
  },
  tablesFilter: ["drive-clone_*"],
});
