"use client"
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  AppBar,
  Toolbar,
  Card,
  CardContent,
  CardMedia,
  TextField,
} from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import studentStudying from "@/public/images/student-studying.png";
import healthAndNutrition from "@/public/images/health-and-nutrition.png";
import womenEmpowerment from "@/public/images/women-empowerment.png";
import communityDevelopment from "@/public/images/community-development.jpeg";
import Fitness from "@/public/images/Fitness.jpg";
import logo from "@/public/images/logo.png";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Education from "@/public/images/Education.jpg";
import HealthCare from "@/public/images/HealthCare.jpg";
import Nutrition from "@/public/images/Nutrition.png";
import Team1 from "@/public/images/team-1.jpg";
import Team2 from "@/public/images/team-2.png";
import Team3 from "@/public/images/team-3.jpg";
import {
  FaBalanceScale,
  FaChartLine,
  FaGraduationCap,
  FaHandshake,
  FaHeartbeat,
  FaVenus,
} from "react-icons/fa";

export default function HomePage() {
  const finalValues = [100000, 153, 31, 100000];
  const duration = 1; // Duration in seconds
  const steps = 60; // Number of animation steps
  const [counters, setCounters] = useState(
    new Array(finalValues.length).fill(0)
  );

  useEffect(() => {
    const intervalTime = (duration * 1000) / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      if (currentStep >= steps) {
        setCounters(finalValues);
        clearInterval(interval);
      } else {
        setCounters(
          finalValues.map((value) =>
            Math.ceil((value / steps) * (currentStep + 1))
          )
        );
        currentStep++;
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);
  const slides = [
    {
      img: studentStudying,
      title: "Empowering Children Through Education",
      description:
        "Providing quality education to underprivileged children to secure a better future.",
    },
    {
      img: healthAndNutrition,
      title: "Health & Nutrition",
      description:
        "Ensuring proper healthcare and nutrition for children and families in need.",
    },
    {
      img: womenEmpowerment,
      title: "Women Empowerment",
      description:
        "Supporting women with skill development and self-reliance initiatives.",
    },
    {
      img: communityDevelopment,
      title: "Community Development",
      description:
        "Strengthening communities through sustainable development programs.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          overflow: "hidden",
          width: "100%",
          height: { xs: "400px", md: "600px" },
        }}
      >
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src={slides[currentSlide].img}
            alt={`Slide ${currentSlide + 1}`}
            layout="fill"
            objectFit="cover"
            priority
          />
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: "absolute",
              top: "50%",
              left: "10%",
              transform: "translateY(-50%)",
              color: "white",
              padding: "30px",
              borderRadius: "12px",
              maxWidth: "80%",
              textAlign: "left",
              boxShadow: "5px 5px 15px rgba(0,0,0,0.5)",
              background: "rgba(0, 0, 0, 0.7)",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.5rem", md: "2.5rem" },
                fontWeight: "bold",
                color: "#f9a826",
              }}
              gutterBottom
            >
              {slides[currentSlide].title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.3rem" },
                lineHeight: "1.6",
                color: "#fff",
              }}
              gutterBottom
            >
              {slides[currentSlide].description}
            </Typography>
          </motion.div>
        </Box>
      </Box>

      <Box sx={{ py: 5 }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#333" }}
          >
            Our Impact
          </Typography>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="stretch"
          >
            {[
              {
                subtitle: "Children Reached",
                description:
                  "Providing education, healthcare, and support to underprivileged children across the nation.",
              },
              {
                subtitle: "Villages Supported",
                description:
                  "Reaching remote villages with essential services, including clean water, sanitation, and education.",
              },
              {
                subtitle: "Projects",
                description:
                  "Numerous initiatives focused on child welfare, women empowerment, and sustainable development.",
              },
              {
                subtitle: "Volunteers",
                description:
                  "A strong network of passionate individuals dedicated to making a difference in society.",
              },
            ].map((impact, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    textAlign: "center",
                    p: 3,
                    color: "#333",
                    background: "white",
                    borderRadius: "12px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{
                        fontWeight: "bold",
                        color: index % 2 === 0 ? "#f9a826" : "#ff5722",
                      }}
                    >
                      {counters[index].toLocaleString()}+
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "1.1rem", fontWeight: "500" }}
                    >
                      {impact.subtitle}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, color: "#555" }}>
                      {impact.description}
                    </Typography>
                  </motion.div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Programs Section */}
      <Box sx={{ backgroundColor: "#f4f4f4", py: 5 }}>
  <Container>
    <Typography
      variant="h4"
      align="center"
      gutterBottom
      sx={{ fontWeight: "bold", color: "#333" }}
    >
      Our Programmes
    </Typography>
    <Grid container spacing={3} justifyContent="center" alignItems="stretch">
      {[
        {
          name: "Education",
          subheading: "Transforming lives with knowledge and skills",
          img: Education.src,
        },
        {
          name: "Healthcare",
          subheading: "Promoting wellness through awareness and medical support",
          img: HealthCare.src,
        },
        {
          name: "Nutrition",
          subheading: "Spreading awareness on healthy eating habits",
          img: Nutrition.src,
        },
        {
          name: "Fitness",
          subheading: "Encouraging an active lifestyle for a healthier tomorrow",
          img: Fitness.src,
        },
      ].map((program) => (
        <Grid item xs={12} sm={6} md={3} key={program.name}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={program.img}
              alt={program.name}
              sx={{ objectFit: "cover" }}
            />
            <CardContent
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                align="center"
                sx={{ typography: { xs: "body1", md: "h6" } }}
              >
                {program.name}
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  align="center"
                  sx={{ color: "grey", typography: { xs: "body2", md: "body1" } }}
                >
                  {program.subheading}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>

      <Box sx={{ py: 5, textAlign: "center", px: { xs: 2, sm: 5, md: 10 } }}>
  <Typography
    variant="h4"
    gutterBottom
    sx={{ fontWeight: "bold", mb: 5 }}
  >
    Working Towards Global Goals
  </Typography>
  <Grid container spacing={3} justifyContent="center">
    {[
      {
        name: "Healthy Lives & Well-being",
        color: "#DDA0DD",
        number: "#3",
        icon: <FaHeartbeat size={50} />,
      },
      {
        name: "Empowering Women",
        color: "#FF69B4",
        number: "#5",
        icon: <FaVenus size={50} />,
      },
      {
        name: "Accessible Education",
        color: "#FFD700",
        number: "#4",
        icon: <FaGraduationCap size={50} />,
      },
      {
        name: "Sustainable Growth & Fair Work",
        color: "#32CD32",
        number: "#8",
        icon: <FaChartLine size={50} />,
      },
      {
        name: "Equity for All",
        color: "#4169E1",
        number: "#10",
        icon: <FaBalanceScale size={50} />,
      },
      {
        name: "Global Alliances for Change",
        color: "#008000",
        number: "#17",
        icon: <FaHandshake size={50} />,
      },
    ].map((goal, index) => (
      <Grid item xs={12} sm={6} md={4} lg={2} key={index} display="flex" justifyContent="center">
        <Card
          sx={{
            textAlign: "center",
            background: goal.color,
            color: "white",
            height: "180px",
            width: "180px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
          }}
        >
          <Box sx={{ mb: 1 }}>{goal.icon}</Box>
          <Typography sx={{ fontSize: "14px", px: 1 }}>
            {goal.name}
          </Typography>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>

      <Box
        sx={{ py: 5, textAlign: "center", backgroundColor: "#f8f9fa", px: 10 }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Meet Our Team
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            {
              name: "Akhilanand Pandey",
              designation: "Founder and Trustee",
              image: Team1.src,
            },
            { name: "Nitin Sirohi", designation: "Trustee", image: Team2.src },
            {
              name: "Avinash Sharma",
              designation: "Trustee",
              image: Team3.src,
            },
          ].map((member, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  p: 3,
                  background: "transparent", // Removed background
                  boxShadow: "none", // Removed box shadow
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "300px", // Increased image size
                    height: "300px", // Increased image size
                    borderRadius: "50%",
                    overflow: "hidden",
                    mb: 2,
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Typography variant="h6" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                  {member.designation}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

    </>
  );
}
