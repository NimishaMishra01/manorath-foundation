import { Box, Button, Container, Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";
import Image from "next/image";
import React from "react";
import GetInvolvedImage from "@/public/images/get-involved.png"

const involvementOptions = [
  {
    title: "Corporate Activities",
    description: "Incorporate the elder cause into your organisation. Write to rm@helpageindia.org",
    buttonText: "Learn more",
    imageUrl: "/corporate_activities.jpg",
  },
  {
    title: "Volunteer With Us",
    description: "Contribute your time towards the elder cause. Write to hr@helpageindia.org",
    buttonText: "Email Now",
    imageUrl: "/volunteer.jpg",
  },
  {
    title: "Intern With Us",
    description: "Gain valuable work and life experiences with us. Write to hr@helpageindia.org",
    buttonText: "Email Now",
    imageUrl: "/intern.jpg",
  },
];

export default function GetInvolvedPage() {
  return (
    <Container sx={{margin:0,padding:0,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%"}}>
      {/* Header Section */}
      <Box sx={{ position: "relative", mb: 4 }}>
      <div
            style={{
              position: "relative",
              width: "100vw",
              height: "70vh",
              overflow: "hidden",
            }}
          >
        <Image src={GetInvolvedImage} alt="Hero Image" layout="fill"
              objectFit="cover" />
        </div>
        <Typography variant="h3" sx={{ position: "absolute", top: "50%", left: "10%", color: "white", fontWeight: "bold" }}>
          Get Involved
        </Typography>
      </Box>
      
      {/* Description */}
      <Typography variant="body1" align="center" mb={4}>
      If you're eager to make a positive impact on the lives of those in need, including children, women, and the elderly, while enriching yourself in the process, we'd love to hear from you! You can join us in any of the following ways.
      </Typography>
      
      {/* Involvement Options */}
      <Grid container spacing={4}>
        {involvementOptions.map((option, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardMedia component="img" height="200" image={option.imageUrl} alt={option.title} />
              <CardContent>
                <Typography variant="h5" fontWeight="bold">{option.title}</Typography>
                <Typography variant="body2" mt={1}>{option.description}</Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>{option.buttonText}</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
