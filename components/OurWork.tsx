"use client";
import { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const initiatives = [
  {
    title: "ABCD Project with Toyota in Varanasi",
    images: ["/images/abcdProject/abcd1.jpg", "/images/abcdProject/abcd2.jpg", "/images/abcdProject/abcd3.jpg","/images/abcdProject/abcd4.jpg"],
    description: "A counseling & personal hygiene awareness program was organized by Manorath Foundation at Radha Kishori Government Girls College in Ramnagar District Varanasi with support of Toyota Kirlosakar Motors. Our chief guest Ms. Sandhya Shetty (Actor, model, Karate gold medalist in Common wealth games) spoke to the girls about how they can maintain personal hygiene, which is a main problem in the rural India.Also swachhta captains have been nominated in every class among the students who will monitor the cleanliness and motivate the girls for hygiene & cleanliness."
  },
  {
    title: "Open Gym",
    images: ["/images/openGym/gym1.jpg", "/images/openGym/gym2.jpg", "/images/openGym/gym3.jpg","/images/openGym/gym4.jpg"],
    description: "The Manorath Foundation’s initiative aims to promote public health and fitness by establishing open gyms across Uttar Pradesh. These gyms provide free access to outdoor fitness equipment, helping people adopt healthier lifestyles and prevent lifestyle-related diseases.The project encourages community participation in fitness, especially for those who lack access to traditional gyms, such as low-income individuals, women, and senior citizens. It also focuses on enhancing public infrastructure by integrating gym facilities into parks, making them more attractive and functional.By fostering social impact and behavioral change, the initiative promotes a fitness culture that benefits individuals and society. Additionally, the project represents a government-NGO collaboration, demonstrating the importance of partnerships in addressing public health challenges."
  },
  {
    title: "Child Support",
    images: ["/images/child-empowerment1.png", "/images/child-empowerment2.png", "/images/child-empowerment3.png","/images/child-empowerment4.png"],
    description: "The foundation focused on ensuring children's rights, education, health, and safety through various initiatives. By creating safe spaces such as community centers and programs, it provided a secure environment for children, especially those from vulnerable communities. Mentorship and skill development programs helped children nurture talents in areas like painting, music, leadership, and critical thinking. Awareness campaigns educated society on critical issues such as child abuse and labor. Additionally, scholarship programs supported underprivileged children in pursuing their education. One such initiative, Bright Futures: Mentoring Young Minds, involved professionals from fields like education, business, and technology mentoring children from low-income backgrounds. The program also included an annual talent exhibition, allowing children to showcase their skills in arts, sports, and other areas, boosting their confidence and aspirations."
  },
  {
    title: "Food and Grain Distribution during Covid 19 Pandemic",
    images: ["/images/pandemic.png"],
    description: "The foundation focused on ensuring children's rights, education, health, and safety through various initiatives. By creating safe spaces such as community centers and programs, it provided a secure environment for children, especially those from vulnerable communities. Mentorship and skill development programs helped children nurture talents in areas like painting, music, leadership, and critical thinking. Awareness campaigns educated society on critical issues such as child abuse and labor. Additionally, scholarship programs supported underprivileged children in pursuing their education. One such initiative, Bright Futures: Mentoring Young Minds, involved professionals from fields like education, business, and technology mentoring children from low-income backgrounds. The program also included an annual talent exhibition, allowing children to showcase their skills in arts, sports, and other areas, boosting their confidence and aspirations."
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
