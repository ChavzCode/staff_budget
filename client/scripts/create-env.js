import { writeFileSync } from "fs";
writeFileSync("./.env", `VITE_SERVER_URL=${process.env.VITE_SERVER_URL}\n`)