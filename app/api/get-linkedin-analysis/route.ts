import { NextResponse } from "next/server";
import { UserDetailedObjectType } from "@/lib/interface";

export async function POST(request: Request) {
  // Extract profileId from the request body
  const { profileId } = await request.json();

  // Check if profileId is provided
  if (!profileId) {
    return NextResponse.json(
      { error: "Profile ID is required." },
      { status: 400 }
    );
  }

  // LinkedIn API setup
  const url = `https://linkedin-api8.p.rapidapi.com/?username=${profileId}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.X_RAPIDAPI_KEY || "",
      "x-rapidapi-host": "linkedin-api8.p.rapidapi.com",
    },
    timeout: 30000,
  };

  try {
    // Fetch LinkedIn data from RapidAPI
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Failed to fetch LinkedIn data: ${response.statusText}`);
    }

    // Parse LinkedIn data response
    const linkedinData: UserDetailedObjectType = await response.json();
    console.log("LinkedIn Data:", linkedinData);

    return NextResponse.json(
      {
        profileData: linkedinData,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error fetching LinkedIn data:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
