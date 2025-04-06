/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/singlestore";
import { env } from "~/env";

const pool = mysql.createPool(env.SINGLESTORE_CONNECTION_STRING as string);
const db = drizzle({ client: pool });
