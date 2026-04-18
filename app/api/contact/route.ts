import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

  try {
    const body = await req.json();

    console.log("Incoming request body:", body);

    const response = await fetch("https://n8n.ssrn.online/webhook/portfolio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const text = await response.text();

    console.log("n8n status:", response.status);
    console.log("n8n response text:", text);

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "n8n webhook failed",
          status: response.status,
          details: text,
        },
        { status: 502 } // Return 502 to mirror the upstream issue
      );
    }

    return NextResponse.json(
      { success: true, message: "Automation triggered successfully" },
      { status: 200 }
    );

  } catch (error: any) {
    clearTimeout(timeoutId);

    if (error.name === 'AbortError') {
      console.error("API ERROR: Request to n8n timed out.");
      return NextResponse.json(
        { error: "The request to n8n timed out. Ensure the workflow is active and fast." },
        { status: 504 }
      );
    }

    console.error("API ERROR:", error);

    return NextResponse.json(
      {
        error: "Server encountered an error while proxying to n8n",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
