// app.ts

import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/singlestore";
const pool = mysql.createPool(
  "singlestore://muhammad-c1f4d:<muhammad-c1f4d Password>@svc-3482219c-a389-4079-b18b-d50662524e8a-shared-dml.aws-virginia-6.svc.singlestore.com:3333/DRIVE_VELLICHOR_DB?ssl={}",
);

export const db = drizzle({ client: pool });
