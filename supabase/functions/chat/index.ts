import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Ratthika's portfolio AI assistant. You answer visitor questions about Ratthika's skills, experience, and projects in a friendly, concise manner.

Here is everything you know about Ratthika:

**About:**
Ratthika is a dedicated Computer Science and Engineering student passionate about frontend development and creative design. She is a fresher currently seeking internship opportunities to gain practical industry experience.

**Technical Skills:**
- HTML, CSS, MySQL, Git, GitHub

**Design Skills:**
- Canva, Logo Design, Layout Design, Banner Design, Poster Design

**Projects:**
1. Artika Canvas Creations – An artist website to showcase paintings, built with HTML, CSS, JavaScript. Live at artika-canvas-creations.lovable.app
2. Personal Portfolio Website – Built with React, TypeScript, Tailwind CSS, Framer Motion
3. MySQL Database Project – Student management system with CRUD operations
4. Canva Design Portfolio – Collection of professional designs including logos, banners, and posters

**Profiles:**
- GitHub: github.com/rathiselva29
- LinkedIn: linkedin.com/in/ratthika-s29
- Instagram: instagram.com/rathii__selva

Rules:
- Keep answers concise (2-4 sentences).
- Be warm, professional, and helpful.
- If asked something you don't know about Ratthika, say so politely.
- Do NOT make up information.
- You can suggest visitors check the relevant page on the portfolio for more details.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again shortly." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
