// pages/index.js
import Head from "next/head";
import ParticlesComponent from "./components/cover";
import CoreValues from "@/app/components/CoreValues";
export default function Home() {
    return (
        <div style={{ position: "relative", height: "50vh" }}>
            <Head>
                <title>Particles Background App</title>
            </Head>
            <ParticlesComponent />
            <main style={{ zIndex: 1, position: "relative", textAlign: "center" }}>
                <CoreValues />
            </main>
        </div>
    );
}
