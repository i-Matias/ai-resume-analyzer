# AI Resume Analyzer (Resumind)

A modern, AI-powered resume analysis platform that provides comprehensive feedback to help job seekers optimize their resumes for specific positions and ATS (Applicant Tracking System) compatibility.

## 🌟 Features

### Core Functionality
- **AI-Powered Analysis**: Leverages advanced AI to analyze resumes against job descriptions
- **ATS Compatibility Check**: Evaluates resume compatibility with Applicant Tracking Systems
- **Multi-Category Scoring**: Provides detailed scores across 5 key areas:
  - ATS Compatibility
  - Tone & Style
  - Content Quality
  - Structure & Format
  - Skills Alignment

### User Experience
- **PDF Upload & Processing**: Upload PDF resumes with automatic image conversion for preview
- **Real-time Analysis**: Live processing status updates during resume analysis
- **Visual Feedback**: Interactive score gauges and color-coded feedback
- **Resume Gallery**: Personal dashboard to manage and review multiple resumes
- **Detailed Insights**: Comprehensive tips and explanations for improvement

### Technical Features
- **Cloud Storage**: Secure file storage and management via Puter.js
- **Authentication**: User authentication and session management
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Type Safety**: Full TypeScript implementation

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **React Router 7** - File-based routing and navigation
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling framework
- **Vite** - Fast build tool and development server

### Backend & Services
- **Puter.js** - Cloud platform for file storage, AI, and authentication
- **PDF.js** - PDF processing and image conversion
- **React Hot Toast** - User notifications
- **Zustand** - State management

### Development Tools
- **ESLint** - Code linting
- **TypeScript Compiler** - Type checking
- **Docker** - Containerization support

## 🚀 Getting Started

### Prerequisites
- Node.js 20 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/i-Matias/ai-resume-analyzer.git
   cd ai-resume-analyzer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm run start
```

### Docker Deployment

```bash
# Build Docker image
docker build -t ai-resume-analyzer .

# Run container
docker run -p 3000:3000 ai-resume-analyzer
```

## 📁 Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── Accordion.tsx   # Collapsible content sections
│   ├── ATS.tsx         # ATS score display
│   ├── Details.tsx     # Detailed feedback sections
│   ├── FileUploader.tsx # Drag & drop file upload
│   ├── Navbar.tsx      # Navigation bar
│   ├── ResumeCard.tsx  # Resume preview cards
│   ├── ScoreCircle.tsx # Circular score indicators
│   ├── ScoreGauge.tsx  # Score visualization
│   └── Summary.tsx     # Analysis summary
├── lib/                # Utility libraries
│   ├── pdf2img.ts      # PDF to image conversion
│   ├── puter.ts        # Puter.js integration
│   └── utils.ts        # Helper functions
├── routes/             # Application routes
│   ├── auth.tsx        # Authentication page
│   ├── home.tsx        # Dashboard/home page
│   ├── resume.tsx      # Resume analysis view
│   ├── upload.tsx      # Upload and analyze page
│   └── wipe.tsx        # Data management
├── types/              # TypeScript definitions
│   ├── index.d.ts      # Core type definitions
│   └── puter.d.ts      # Puter.js types
├── app.css            # Global styles
├── root.tsx           # App root component
└── routes.ts          # Route configuration
```

## 🔧 Configuration

### Environment Setup
The application uses Puter.js for cloud services, which handles:
- User authentication
- File storage and management
- AI processing capabilities
- Key-value storage for resume data

### Customization
- **Styling**: Modify `app/app.css` and Tailwind classes
- **AI Instructions**: Update prompts in `constants/index.ts`
- **Analysis Categories**: Modify feedback structure in `types/index.d.ts`

## 🎯 How It Works

1. **Authentication**: Users sign in through Puter.js authentication
2. **Upload**: Users upload PDF resumes and provide job details
3. **Processing**: 
   - PDF is converted to image for preview
   - Files are stored securely in the cloud
   - AI analyzes resume content against job requirements
4. **Analysis**: AI provides structured feedback across multiple categories
5. **Results**: Users receive detailed scores, tips, and improvement suggestions
6. **Management**: Resumes are saved for future reference and comparison

## 📊 Analysis Categories

### ATS Compatibility (Score: 0-100)
- Keyword optimization
- Format compatibility
- Section organization
- Contact information structure

### Tone & Style (Score: 0-100)
- Professional language
- Writing clarity
- Consistency
- Industry appropriateness

### Content Quality (Score: 0-100)
- Relevance to job description
- Achievement quantification
- Experience depth
- Education alignment

### Structure & Format (Score: 0-100)
- Visual hierarchy
- Section organization
- Length appropriateness
- Readability

### Skills Alignment (Score: 0-100)
- Technical skills match
- Soft skills demonstration
- Industry-specific requirements
- Skill presentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Built with ❤️ by [Matias Poshnjari](https://github.com/i-Matias)