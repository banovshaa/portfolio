import { demoProjects } from "@/data/fake";

export async function GET() {
  return new Response(JSON.stringify(demoProjects), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
