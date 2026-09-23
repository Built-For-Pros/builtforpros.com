import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { hero } from "@/content/site";

export const alt = "Built for Pros contractor marketing hero preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const canvas = "#09090b";

async function loadManrope(weight: 600 | 700) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Manrope:wght@${weight}&display=swap`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    },
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to load Manrope CSS (${response.status}).`);
    }
    return response.text();
  });

  const match = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/);
  if (!match?.[1]) {
    throw new Error("Manrope font file was not found.");
  }

  const fontResponse = await fetch(match[1]);
  if (!fontResponse.ok) {
    throw new Error(`Failed to load Manrope font (${fontResponse.status}).`);
  }

  return fontResponse.arrayBuffer();
}

export default async function OpenGraphImage() {
  const [semibold, bold] = await Promise.all([loadManrope(600), loadManrope(700)]);
  const background = await readFile(join(process.cwd(), "public/hero-bg.jpg"));
  const heroBackground = `data:image/jpeg;base64,${background.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          height: "100%",
          width: "100%",
          overflow: "hidden",
          background: canvas,
          color: "#fafafa",
          fontFamily: "Manrope",
        }}
      >
        <img
          src={heroBackground}
          alt=""
          width={size.width}
          height={size.height}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: size.width,
            height: size.height,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: size.width,
            height: size.height,
            display: "flex",
            background: "rgba(9, 9, 11, 0.64)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: size.width,
            height: size.height,
            display: "flex",
            background: `linear-gradient(90deg, ${canvas} 0%, rgba(9, 9, 11, 0.88) 50%, rgba(9, 9, 11, 0.22) 100%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: size.width,
            height: size.height,
            display: "flex",
            background: `linear-gradient(180deg, rgba(9, 9, 11, 0.4) 0%, rgba(9, 9, 11, 0) 46%, ${canvas} 100%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -80,
            left: 200,
            display: "flex",
            height: 220,
            width: 800,
            background:
              "radial-gradient(ellipse at center, rgba(249, 99, 2, 0.1), rgba(249, 99, 2, 0) 70%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 72px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginBottom: 22,
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: "0.2em",
              paddingLeft: "0.2em",
              textTransform: "uppercase",
              color: "#f96302",
            }}
          >
            {hero.eyebrow}
          </div>

          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#fafafa",
            }}
          >
            {hero.titleLines.map((line) => (
              <div
                key={line}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {line.split(/(marketing)/).map((part, index) =>
                  part === "marketing" ? (
                    <div
                      key={`${line}-${index}`}
                      style={{
                        display: "flex",
                        position: "relative",
                        marginLeft: 18,
                      }}
                    >
                      {part}
                      <svg
                        width="340"
                        height="18"
                        viewBox="0 0 320 14"
                        style={{
                          position: "absolute",
                          left: 0,
                          bottom: -2,
                        }}
                      >
                        <path
                          d="M 3 10 Q 155 1 317 7"
                          stroke="#f96302"
                          strokeWidth="6"
                          strokeLinecap="round"
                          fill="none"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div key={`${line}-${index}`} style={{ display: "flex" }}>
                      {part}
                    </div>
                  ),
                )}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              width: 780,
              marginTop: 28,
              justifyContent: "center",
              textAlign: "center",
              fontSize: 24,
              fontWeight: 600,
              lineHeight: 1.45,
              color: "#a1a1aa",
            }}
          >
            {hero.description}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Manrope", data: semibold, weight: 600, style: "normal" },
        { name: "Manrope", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
