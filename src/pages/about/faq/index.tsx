"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Collapse,
  Link as MuiLink,
} from "@mui/material";
import React, { useState } from "react";

import MainLayout from "@/layouts/MainLayout";

const faqSections = [
  {
    title: "Course Information",
    faqs: [
      {
        question: "What levels of English courses do you offer?",
        answer:
          "We offer Beginner, Intermediate, Advanced courses, Conversation Practice, and IELTS preparation to suit every level.",
      },
      {
        question: "How long is each course?",
        answer:
          "Each course typically lasts 3 months with weekly sessions. Conversation Practice is usually 1 month.",
      },
      {
        question: "Are classes online or in-person?",
        answer:
          "We provide flexible options for both online live classes and in-person sessions depending on your location and preference.",
      },
    ],
  },
  {
    title: "Registration & Payment",
    faqs: [
      {
        question: "How do I register for a course?",
        answer:
          "You can register directly on our website by selecting your desired course and completing the enrollment form.",
      },
      {
        question: "What payment methods are accepted?",
        answer:
          "We accept all major credit/debit cards, bank transfers, and popular e-wallets.",
      },
      {
        question: "Are there any discounts?",
        answer:
          "Yes! Early bird discounts, group rates, and referral bonuses are available. Contact support for details.",
      },
    ],
  },
  {
    title: "Course Policies",
    faqs: [
      {
        question: "Can I get a refund if I cancel?",
        answer:
          "Full refunds are available within the first week of class. Partial refunds are prorated based on attendance thereafter.",
      },
      {
        question: "Do I get a certificate after course completion?",
        answer:
          "Yes, upon successful completion you will receive a certificate recognized by our institution.",
      },
    ],
  },
  {
    title: "Technical Support",
    faqs: [
      {
        question: "What if I have trouble accessing online classes?",
        answer:
          "Our tech support team is available 24/7. Contact us via chat or email and we’ll assist you promptly.",
      },
      {
        question: "Are there prerequisites for online courses?",
        answer:
          "A stable internet connection and a device with video/audio capability are required. Basic computer skills are recommended.",
      },
    ],
  },
];

const FAQPageExpanded = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const handleSectionToggle = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: "#f0f4ff",
        minHeight: "calc(100vh - 152px)",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          color="#035a8e"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
          sx={{ mb: 3 }}
        >
          Frequently Asked Questions
        </Typography>

        <Typography
          variant="h6"
          color="#035a8e"
          fontWeight="medium"
          textAlign="center"
          mb={6}
          sx={{ fontStyle: "italic", maxWidth: 700, mx: "auto" }}
        >
          Find answers to common questions about courses, registration,
          policies, and support.
        </Typography>

        {faqSections.map(({ title, faqs }, i) => (
          <Box key={title} sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              color="#fc9a14"
              fontWeight="bold"
              onClick={() => handleSectionToggle(i)}
              sx={{
                cursor: "pointer",
                userSelect: "none",
                mb: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
                "&:hover": { color: "#e2940f" },
              }}
            >
              {title}
              <ExpandMoreIcon
                sx={{
                  transition: "transform 0.3s",
                  transform:
                    expandedSection === i ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </Typography>

            <Collapse in={expandedSection === i} timeout="auto" unmountOnExit>
              {faqs.map(({ question, answer }, idx) => (
                <Accordion
                  key={idx}
                  sx={{
                    backgroundColor: "white",
                    boxShadow: "0 2px 8px rgba(3, 90, 142, 0.1)",
                    borderRadius: 2,
                    mb: 1,
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#fc9a14" }} />}
                    aria-controls={`panel${i}-${idx}-content`}
                    id={`panel${i}-${idx}-header`}
                  >
                    <Typography
                      fontWeight="bold"
                      color="#035a8e"
                      fontSize="1.1rem"
                    >
                      {question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{ color: "#555", fontSize: "1rem", lineHeight: 1.6 }}
                    >
                      {answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}

              {i === 0 && (
                <>
                  <Divider sx={{ my: 4 }} />
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="#035a8e"
                    mb={2}
                  >
                    Watch Our Course Overview Video
                  </Typography>
                  <Box
                    sx={{
                      position: "relative",
                      paddingTop: "56.25%", // 16:9 ratio
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: "0 8px 20px rgba(3, 90, 142, 0.15)",
                      mb: 4,
                    }}
                  >
                    <iframe
                      src="https://www.youtube.com/embed/4W_Zt2cbGlc"
                      title="Course Overview"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: "none",
                      }}
                    />
                  </Box>
                </>
              )}
            </Collapse>
          </Box>
        ))}

        <Divider sx={{ my: 4 }} />

        <Typography
          variant="subtitle1"
          textAlign="center"
          color="text.secondary"
          sx={{ fontStyle: "italic", fontSize: "1rem" }}
        >
          Still have questions? Reach out to our support team via{" "}
          <MuiLink href="/contact" underline="hover" color="primary">
            Contact Page
          </MuiLink>
          .
        </Typography>
      </Container>
    </Box>
  );
};

export default FAQPageExpanded;

FAQPageExpanded.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
