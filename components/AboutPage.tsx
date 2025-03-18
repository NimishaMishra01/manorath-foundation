import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  ListItem,
  List,
  ListItemText,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import DevelopmentImage from "@/public/images/development.png";
import NutritiousDiet from "@/public/images/NutritiousDiet.png";
import WomenEmpowerment from "@/public/images/WomenEmpowerment.png";
import YouthEducation from "@/public/images/YouthEducation.png";
import EnvironmentWelfare from "@/public/images/environment.png";
import {
  LocalHospital,
  Wc,
  School,
  MenuBook,
  Forest,
  Favorite,
  Work,
} from "@mui/icons-material";

import Image from "next/image";

export default function AboutPage() {
  const impactData = [
    {
      title: "Healthcare Access",
      details: "Improved healthcare for thousands.",
      icon: <Favorite />,
      color: "#D32F2F",
    },
    {
      title: "Education for Youth",
      details: "Increased educational opportunities.",
      icon: <School />,
      color: "#1976D2",
    },
    {
      title: "Women Empowerment",
      details: "Economic independence for women.",
      icon: <Work />,
      color: "#FF9800",
    },
    {
      title: "Environmental Conservation",
      details: "Sustainability & conservation efforts.",
      icon: <Forest />,
      color: "#388E3C",
    },
  ];

  const approachData = [
    {
      title: "Enhancing Health",
      details:
        "Providing healthcare services, organizing health camps, vaccinations, and ensuring medical aid.",
      icon: <LocalHospital sx={{ fontSize: 50, color: "#d32f2f" }} />, // Red for healthcare
    },
    {
      title: "Empowering Women",
      details:
        "Leadership training, financial independence programs, and advocacy for gender equality.",
      icon: <Wc sx={{ fontSize: 50, color: "#ff4081" }} />, // Pink for women's empowerment
    },
    {
      title: "Inspiring Youth & Children",
      details:
        "Educational support, mentorship, scholarships, and career guidance.",
      icon: <School sx={{ fontSize: 50, color: "#1976d2" }} />, // Blue for education
    },
    {
      title: "Advancing Education",
      details:
        "Bridging gaps with lifelong learning, digital literacy, and skill-based learning.",
      icon: <MenuBook sx={{ fontSize: 50, color: "#ff9800" }} />, // Orange for learning
    },
    {
      title: "Protecting Our Environment",
      details:
        "Sustainability programs, eco-friendly practices, and conservation initiatives.",
      icon: <Forest sx={{ fontSize: 50, color: "#388e3c" }} />, // Green for environment
    },
  ];
  return (
    <Container maxWidth={"xl"} style={{ padding: 0 }}>
      <Grid container sx={{ m: 0, textAlign: "center" }}>
        <Grid item xs={12} sx={{ position: "relative" }}>
          <div
            style={{
              position: "relative",
              width: "100vw",
              height: "90vh",
              overflow: "hidden",
            }}
          >
            <Image
              src={DevelopmentImage}
              alt="Hero"
              layout="fill"
              objectFit="cover"
            />
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                textAlign: "center",
                width: "90%",
              }}
            >
              Thriving Communities, Empowered Lives
            </Typography>
          </div>
        </Grid>
      </Grid>

      {/* Our Vision */}
      <Box sx={{ py: 5, textAlign: "center" }}>
        <Typography
          variant="h6"
          sx={{ maxWidth: "900px", margin: "auto", color: "#555" }}
        >
          At <b>Manorath Foundation</b>, we are dedicated to building resilient
          communities by addressing interconnected challenges in{" "}
          <b>
            healthcare, education, women empowerment, and environmental
            sustainability
          </b>
          . We believe every individual deserves access to{" "}
          <b>
            {" "}
            quality healthcare, lifelong learning, and a nurturing environment
          </b>{" "}
          that supports their growth and well-being.
        </Typography>
      </Box>

      <Box sx={{ bgcolor: "#ECE7F3", py: 5, px: { xs: 2, sm: 5, md: 20 } }}>
  <Typography
    variant="h4"
    fontWeight="bold"
    textAlign="center"
    gutterBottom
  >
    Our Mission
  </Typography>
  <Grid container spacing={3} alignItems="center" sx={{ mt: 5 }}>
    {[
      {
        title: "Enhance Health and Well-being",
        desc: "Deliver accessible, quality healthcare services that promote physical and mental wellness, ensuring every community member can lead a healthy, productive life.",
        img: NutritiousDiet,
        reverse: false,
      },
      {
        title: "Empower Women",
        desc: "Champion gender equality by providing women with the tools, resources, and opportunities to become leaders and change-makers in their communities.",
        img: WomenEmpowerment,
        reverse: true,
      },
      {
        title: "Inspire Youth and Children",
        desc: "Cultivate the potential of the next generation by offering educational opportunities, mentorship, and empowerment programs that equip children and youth to overcome challenges and build a brighter future.",
        img: YouthEducation,
        reverse: false,
      },
      {
        title: "Promote Environmental Stewardship",
        desc: "Advocate for sustainable practices and protect our natural resources, ensuring a safe and healthy environment for present and future generations.",
        img: EnvironmentWelfare,
        reverse: true,
      },
    ].map((item, index) => (
      <Grid
        container
        spacing={3}
        alignItems="center"
        flexDirection={{ xs: "column", sm: item.reverse ? "row-reverse" : "row" }}
        key={index}
        textAlign={{ xs: "center", sm: "left" }}
      >
        <Grid item xs={12} sm={6}>
          <Image
            src={item.img}
            alt={item.title}
            width={500}
            height={300}
            style={{ borderRadius: 8, width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" fontWeight="bold">
            {item.title}
          </Typography>
          <Typography variant="body1">
            {item.desc}
          </Typography>
        </Grid>
      </Grid>
    ))}
  </Grid>
</Box>
      {/* Our Story */}
      <Box
        sx={{
          py: 5,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="#000" gutterBottom>
          Our Story
        </Typography>

        <Typography
          variant="h6"
          color="#555"
          sx={{ mx: 10, lineHeight: 1.8, textAlign: "center" }}
        >
          Founded in <b>2015</b>, our journey began with a bold vision: to
          create communities where
          <b> everyone</b> has the opportunity to live a{" "}
          <b>healthy, empowered, and sustainable life</b>. From the start, we
          recognized that healthcare, education, women’s empowerment, and
          environmental protection are <b>deeply connected</b>. To make a real
          difference, we identified key social challenges hindering community
          growth and developed <b>integrated solutions</b> that address multiple
          issues simultaneously. By establishing a <b>grassroots network</b>, we
          ensured that our impact reached those who needed it the most,
          empowering individuals and fostering long-term change.
        </Typography>
      </Box>

      {/* Our Approach */}
      <Box
        sx={{
          background: "#ECE7F3",
          py: 8,
          px: 4,
          borderRadius: 3,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
          sx={{ mb: 5 }}
        >
          Our Approach
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {approachData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: "50%",
                  width: 180,
                  height: 180,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                  position: "relative",
                  border: "6px solid",
                  borderColor: "transparent",
                  background:
                    "radial-gradient(circle, rgba(255,255,255,1) 60%, rgba(240,244,248,1) 100%)",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    border: "6px dashed rgba(0,0,0,0.1)",
                    top: 0,
                    left: 0,
                    boxSizing: "border-box",
                  }}
                />
                {item.icon}
              </Card>
              <CardContent sx={{ textAlign: "center", mt: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.details}
                </Typography>
              </CardContent>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Card 
  sx={{ 
    p: { xs: 3, sm: 4, md: 5 },
    borderRadius: 3,
    width: "100%", 
  }}
>
  <CardContent>
    <Typography 
      variant="h4" 
      fontWeight="bold" 
      textAlign="center" 
      gutterBottom
    >
      Our Impact
    </Typography>

    <Grid 
      container 
      spacing={3} 
      sx={{ justifyContent: "center", mt: 3, px: { xs: 2, sm: "5%", md: "10%" } }}
    >
      {impactData.map((item, index) => (
        <Grid
          key={index}
          item
          xs={12}
          md={6}
          display="flex"
          alignItems="stretch" // Ensures equal height
          justifyContent="center"
          sx={{ py: 2 }}
        >
          {/* Step Content */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              flexDirection: { xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" },
              width: "100%",
              maxWidth: "400px",
              textAlign: "center",
              height: "100%", // Ensures equal height
            }}
          >
            {/* Circular Icon */}
            <Box
              sx={{
                padding:"1rem",
                borderRadius: "50%",
                border: `4px solid ${item.color}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
                color: item.color,
                backgroundColor: "#FFF",
                boxShadow: 2,
                zIndex: 2,
              }}
            >
              {item.icon}
            </Box>

            {/* Step Text */}
            <Box
              sx={{
                backgroundColor: "#F5F5F5",
                p: 3,
                borderRadius: 2,
                boxShadow: 2,
                width: "100%",
                maxWidth: "350px",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%", // Ensures equal height
                flexGrow: 1, // Fills available space
              }}
            >
              <Typography variant="body1" fontWeight="bold">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.details}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  </CardContent>
</Card>

    </Container>
  );
}
