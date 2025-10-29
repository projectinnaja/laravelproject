import React from "react";
import MainLayout from "../Layouts/MainLayout";
import HeroSection from "../Components/HeroSection";
import PopularProjects from "../Components/PopularProjects";
import ProjectGallery from "../Components/ProjectGallery";
import WhyTelkom from "../Components/WhyTelkom";

export default function Home() {
    return (
        <MainLayout>
            <HeroSection />
            <PopularProjects />
            <ProjectGallery />
            <WhyTelkom />
        </MainLayout>
    );
}
