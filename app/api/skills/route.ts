import { demoSkills } from "@/data/fake";

export async function GET() {
  return new Response(JSON.stringify(demoSkills), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
