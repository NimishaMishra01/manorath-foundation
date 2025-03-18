"use client";
import { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const initiatives = [
  {
    title: "ABCD Project with Toyota in Varanasi",
    images: ["/images/abcdProject/abcd1.jpg", "/images/abcdProject/abcd2.jpg", "/images/abcdProject/abcd3.jpg", "/images/abcdProject/abcd4.jpg"],
    description:
      "A counseling & personal hygiene awareness program was organized by Manorath Foundation at Radha Kishori Government Girls College in Ramnagar District Varanasi with support of Toyota Kirlosakar Motors...",
  },
  {
    title: "Open Gym",
    images: ["/images/openGym/gym1.jpg", "/images/openGym/gym2.jpg", "/images/openGym/gym3.jpg", "/images/openGym/gym4.jpg"],
    description:
      "The Manorath Foundation’s initiative aims to promote public health and fitness by establishing open gyms across Uttar Pradesh...",
  },
  {
    title: "Child Support",
    images: ["/images/child-empowerment1.png", "/images/child-empowerment2.png", "/images/child-empowerment3.png", "/images/child-empowerment4.png"],
    description:
      "The foundation focused on ensuring children's rights, education, health, and safety through various initiatives...",
  },
  {
    title: "Food and Grain Distribution during Covid 19 Pandemic",
    images: ["/images/pandemic.png"],
    description:
      "During the Covid-19 pandemic, the foundation provided essential food and grain support to underprivileged families...",
  },
];

export default function OurWork() {
  const [currentImageIndex, setCurrentImageIndex] = useState(Array(initiatives.length).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev.map((index, i) => (initiatives[i].images.length > 1 ? (index + 1) % initiatives[i].images.length : index))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = (index: number) => {
    setCurrentImageIndex((prev) => {
      const newIndexes = [...prev];
      newIndexes[index] = (newIndexes[index] - 1 + initiatives[index].images.length) % initiatives[index].images.length;
      return newIndexes;
    });
  };

  const handleNext = (index: number) => {
    setCurrentImageIndex((prev) => {
      const newIndexes = [...prev];
      newIndexes[index] = (newIndexes[index] + 1) % initiatives[index].images.length;
      return newIndexes;
    });
  };

  return (
    <Box sx={{ width: "100%", padding: 4, backgroundColor: "#f5f5f5" }}>
    {initiatives.map((initiative, index) => (
  <Card
    key={index}
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" },
      alignItems: "center",
      padding: 3,
      gap: 3,
      marginBottom: 4,
      borderRadius: 3,
      boxShadow: 3,
      backgroundColor: "white",
    }}
  >
    {/* Image Box */}
    <Box sx={{ width: { xs: "100%", md: "50%" }, position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <IconButton
        onClick={() => handlePrev(index)}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          background: "rgba(255, 255, 255, 0.8)",
          zIndex: 2,
          display: initiative.images.length > 1 ? "flex" : "none", // Hide buttons if only 1 image
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <CardMedia
        component="img"
        image={initiative.images[currentImageIndex[index]]}
        alt={initiative.title}
        sx={{
          width: "100%",
          height: { xs: 250, md: 350 },
          objectFit: initiative.title.includes("Food and Grain Distribution") ? "contain" : "cover", // Use "contain" for Food section
          aspectRatio: "16/9",
          borderRadius: 2,
        }}
      />
      <IconButton
        onClick={() => handleNext(index)}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          background: "rgba(255, 255, 255, 0.8)",
          zIndex: 2,
          display: initiative.images.length > 1 ? "flex" : "none",
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>

    {/* Text Content */}
    <CardContent sx={{ width: { xs: "100%", md: "50%" }, textAlign: "left" }}>
      <Typography variant="h5" fontWeight={600} gutterBottom color="primary">
        {initiative.title}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {initiative.description}
      </Typography>
    </CardContent>
  </Card>
))}
    </Box>
  );
}
