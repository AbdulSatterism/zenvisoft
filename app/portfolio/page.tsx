import type { Metadata } from "next";
import ProjectsPage from "../projects/page";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore Zenvisoft's featured work and digital products.",
};

export default function PortfolioPage() {
  return <ProjectsPage />;
}
