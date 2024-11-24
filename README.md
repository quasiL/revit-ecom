# Simple Revit Project

This project is an e-commerce platform for selling Revit models, providing a modern and user-friendly interface. It includes features like email notifications, secure payment integration with Stripe, and responsive design built with Tailwind CSS.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Email Command

To run the email server for previewing email templates during development:

```bash
npm run email
```

This will start a local server on port 3001 [http://localhost:3001](http://localhost:3000) to display email templates in your browser.

## Libraries Used

- `prisma`: Database ORM for efficient and type-safe queries.
- `zod`: Schema validation library.
- `swiper`: Carousel/slider functionality.
- `resend`: For sending transactional emails.
- `@emailjs/browser`: Simplifies sending emails directly from the contact form without needing a backend.
