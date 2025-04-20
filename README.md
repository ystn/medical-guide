# Medical Guide

A comprehensive medical management system built with Next.js, Prisma, and PostgreSQL. Medical Guide helps doctors manage patient information, consultations, prescriptions, and medication reminders.

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Features

- **User Authentication**: Secure login and registration system for doctors and patients
- **Patient Management**: Track and manage patient information and medical history
- **Consultation Tracking**: Record patient consultations, symptoms, and diagnoses
- **Prescription Management**: Create and manage prescriptions with detailed medicament information
- **Medication Reminders**: Schedule and track patient medication intake
- **Modern Dashboard**: Intuitive interface for healthcare professionals
- **Responsive Design**: Works on both desktop and mobile devices

## Tech Stack

- **Frontend**: Next.js 14+, React, TypeScript, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Styling**: TailwindCSS with ShadcnUI components
- **Deployment**: Docker support for containerized deployments

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL
- Docker (optional, for containerized setup)

### Environment Setup

1. Clone the repository:

```bash
git clone https://github.com/ystne/medical-guide.git
cd medical-guide
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

```bash
cp example.env .env
```

4. Edit the `.env` file with your database connection details:

```
DATABASE_URL="postgresql://username:password@localhost:5432/medical-guide?schema=public"
```

5. Run database migrations:

```bash
npx prisma migrate dev
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Docker Setup

To run the application using Docker:

```bash
docker-compose up -d
```

This will start both the application and the PostgreSQL database in containers.

## Project Structure

```
src/
  app/                 # Next.js App Router
    (auth)/            # Authentication routes (login/register)
    dashboard/         # Protected dashboard routes
      consultation/    # Consultation management
      patients/        # Patient management
      profile/         # User profile management
  components/          # React components
    ui/                # Shadcn UI components
  generated/           # Generated Prisma client
  hooks/               # Custom React hooks
  lib/                 # Utility functions
prisma/                # Prisma schema and migrations
```

## Database Schema

The system includes several key models:

- **User**: Base user model for authentication
- **Doctor**: Doctor-specific information
- **Patient**: Patient-specific information
- **Medicament**: Medication details including side effects
- **Prescription**: Medical prescriptions
- **Consultation**: Doctor-patient consultation records
- **Reminder**: Medication reminder system

## Deployment

This project can be deployed on platforms like Vercel, Netlify, or using Docker on any cloud provider.

For Vercel deployment:

```bash
npm run build
vercel --prod
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Prisma](https://prisma.io/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
