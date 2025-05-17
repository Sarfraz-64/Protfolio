import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { Email, Phone, LinkedIn, GitHub, Instagram } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0f172a",
        color: "#ffffff",
        py: 4,
        px: { xs: 2, md: 10 },
        mt: "auto", // Push footer to bottom if there's empty space
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={4}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Contact Info */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Contact
          </Typography>
          <Typography>
            <Email fontSize="small" sx={{ mr: 1 }} />
            muhammadsarfrazx64@email.com
          </Typography>
          <Typography>
            <Phone fontSize="small" sx={{ mr: 1 }} />
            +92 304 0411162
          </Typography>
        </Box>

        {/* Social Links */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Follow Me
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton
              href="https://www.linkedin.com/in/muhammad-sarfraz-051a5b299"
              target="_blank"
              sx={{ color: "white" }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://github.com/Sarfraz-64"
              target="_blank"
              sx={{ color: "white" }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/sarfraz_280"
              target="_blank"
              sx={{ color: "white" }}
            >
              <Instagram />
            </IconButton>
          </Stack>
        </Box>
      </Stack>

      <Typography variant="body2" align="center" sx={{ mt: 4 }}>
        © {new Date().getFullYear()} Muhammad Sarfraz. All rights reserved.
      </Typography>
    </Box>
  );
}
