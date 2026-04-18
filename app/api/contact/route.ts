import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Forward to n8n Webhook (Server-to-Server call, bypassing CORS)
    const n8nResponse = await fetch("https://n8n.ssrn.online/webhook/portfolio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject: subject || "Project Inquiry",
        message,
        source: "Portfolio Website (Proxy)",
        timestamp: new Date().toISOString()
      }),
    });

    if (!n8nResponse.ok) {
      const errorText = await n8nResponse.text();
      console.error("n8n Webhook Error:", errorText);
      return NextResponse.json(
        { error: "Failed to forward message to the automation server." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully via proxy" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Proxy API Error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
