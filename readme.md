# PROCS

A responsive web form application for conducting conversation assessments, built with React and Tailwind CSS.

## Live Demo

[View Live Demo](tysonstanley.github.io/PROCS_Form)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/conversation-assessment-form.git
cd conversation-assessment-form
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to see the application.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Technology Stack

- [React](https://reactjs.org/) - UI Framework
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [shadcn/ui](https://ui.shadcn.com/) - UI Components

## Project Structure

```
conversation-assessment-form/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── card.tsx
│   │   └── ConversationAssessment.tsx
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Form design based on research by Budge, Baylor, Barrett, & Borrie
- UI components from shadcn/ui
