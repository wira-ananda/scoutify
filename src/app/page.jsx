"use client";
import React from "react";
import Header from "./components/Header";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Home() {
  return (
    <>
      <Parallax pages={4} style={{ height: "100vh", width: "100%" }}>
        {/* Latar belakang gambar pertama */}
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0)",
            backgroundSize: "cover",
          }}
        />

        {/* Latar belakang gambar kedua */}
        <ParallaxLayer
          offset={1}
          speed={0.3}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0)",
            backgroundSize: "cover",
          }}
        />

        {/* Latar belakang gambar ketiga */}
        <ParallaxLayer
          offset={2}
          speed={0.1}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0)",
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={3}
          speed={0.1}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0)",
            backgroundSize: "cover",
          }}
        />

        {/* Konten teks */}
        <ParallaxLayer offset={0.1} speed={0.6}>
          <div style={{ padding: "50px", color: "white" }}>
            <h1>Selamat Datang di Parallax</h1>
            <p>Efek gambar latar belakang yang bergerak saat scroll</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.1} speed={0.4}>
          <div style={{ padding: "50px", color: "white" }}>
            <h1>Section Kedua</h1>
            <p>Gambar latar belakang yang lebih lambat</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.1} speed={0.2}>
          <div style={{ padding: "50px", color: "white" }}>
            <h1>Section Ketiga</h1>
            <p>Efek parallax semakin dalam</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
