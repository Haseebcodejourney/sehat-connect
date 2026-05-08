# Boilerplate Documentation

## Overview
This project is a healthcare web app boilerplate built with React, JavaScript, Vite, and Sass.
It supports two roles: **Patient** and **Doctor**.

## Tech Stack
- React (UI)
- React Router DOM (routing)
- JavaScript (language)
- Sass (styling)
- Vite (build tool)

## Project Structure

```txt
src/
  app/                 # router and app-level providers
  layouts/             # PublicLayout and DashboardLayout
  pages/
    public/            # Home, Doctors, DoctorDetail, Login, Signup
    patient/           # Patient-specific screens
    doctor/            # Doctor-specific screens
  features/
    auth/              # auth logic and route guards
    doctors/           # doctors module (list, filters, cards)
    appointments/      # booking and appointment module
    reviews/           # reviews module
  components/
    common/            # shared app components
    ui/                # reusable UI elements
  services/            # API client and endpoints
  hooks/               # reusable hooks
  utils/               # helper and constants
  mock/                # local JSON mock data
  styles/              # Sass architecture
  main.jsx             # app entry