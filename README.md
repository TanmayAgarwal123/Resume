# Lakshya - NGO Freelancing Platform

> **"लक्ष्य"** - Your target towards meaningful impact through technology

A modern, comprehensive platform connecting NGOs with skilled freelancers to drive social impact through technology solutions, capacity building, and mission-critical projects.

## 🎯 Mission Statement

Lakshya bridges the gap between passionate freelancers and impact-driven NGOs, creating a sustainable ecosystem where technology meets social good. We believe that every NGO deserves access to world-class talent, and every freelancer deserves the opportunity to create meaningful change.

## 🏗️ Technical Architecture

### **Frontend Stack**
- **React 18** with TypeScript for type-safe, scalable development
- **Vite** for lightning-fast build times and development experience
- **Tailwind CSS** for responsive, modern UI design
- **shadcn/ui** for consistent, accessible component library
- **React Query** for efficient state management and caching

### **Backend Infrastructure**
- **Node.js** with Express.js for robust API development
- **PostgreSQL** for reliable data storage and complex queries
- **Redis** for caching and session management
- **JWT Authentication** with role-based access control
- **Socket.io** for real-time communication features

### **DevOps & Deployment**
- **Docker** containerization for consistent deployments
- **CI/CD Pipeline** with automated testing and deployment
- **AWS/Azure** cloud infrastructure for scalability
- **CDN Integration** for global content delivery
- **Monitoring & Logging** with comprehensive error tracking

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TanmayAgarwal123/Lakshya-ngo-freelancing-site.git
   cd Lakshya-ngo-freelancing-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser:**
   ```
   http://localhost:5173
   ```

### Environment Configuration

```bash
# .env.example
VITE_API_BASE_URL=http://localhost:3000/api
VITE_STRIPE_PUBLIC_KEY=pk_test_...
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
VITE_FIREBASE_CONFIG=your_firebase_config
VITE_SENTRY_DSN=your_sentry_dsn

# Backend Environment
DATABASE_URL=postgresql://user:password@localhost:5432/lakshya
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=sk_test_...
EMAIL_SERVICE_API_KEY=your_email_api_key
REDIS_URL=redis://localhost:6379
```

## 📱 Platform Modules

### 1. **User Management System**
```typescript
// User roles and permissions
enum UserRole {
  NGO_ADMIN = 'ngo_admin',
  NGO_MEMBER = 'ngo_member',
  FREELANCER = 'freelancer',
  PLATFORM_ADMIN = 'platform_admin'
}

interface User {
  id: string;
  email: string;
  role: UserRole;
  profile: NGOProfile | FreelancerProfile;
  verificationStatus: VerificationStatus;
}
```

### 2. **Project Management**
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  budget: BudgetRange;
  timeline: Timeline;
  skills: Skill[];
  milestones: Milestone[];
  status: ProjectStatus;
}
```

### 3. **Payment & Billing**
```typescript
interface Payment {
  id: string;
  projectId: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  escrowDetails: EscrowInfo;
  milestoneId?: string;
}
```

## 🎨 Design System

### **Brand Colors**
```css
:root {
  --primary: #2563eb;      /* Trust Blue */
  --secondary: #059669;    /* Impact Green */
  --accent: #dc2626;       /* Action Red */
  --neutral: #64748b;      /* Professional Gray */
  --success: #10b981;      /* Success Green */
  --warning: #f59e0b;      /* Warning Amber */
}
```

### **Typography Scale**
- **Headings**: Inter, system font stack
- **Body Text**: System font stack for optimal performance
- **Code**: JetBrains Mono for technical content

### **Component Library**
All components follow accessibility standards (WCAG 2.1 AA) and are built with:
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Mobile-first responsive design

## 🧪 Testing Strategy

### **Testing Stack**
```bash
# Unit Testing
npm run test:unit          # Jest + React Testing Library

# Integration Testing  
npm run test:integration   # Cypress component tests

# E2E Testing
npm run test:e2e          # Playwright end-to-end tests

# Visual Regression
npm run test:visual       # Chromatic visual testing

# Performance Testing
npm run test:performance  # Lighthouse CI
```

### **Code Quality**
```bash
# Linting & Formatting
npm run lint              # ESLint + Prettier
npm run type-check        # TypeScript compiler

# Security Scanning
npm run security:check    # npm audit + snyk

# Bundle Analysis
npm run analyze          # Bundle size analysis
```

## 📊 Project Categories

### **Technology & Development**
- 🌐 **Web Development**: Responsive websites, web applications
- 📱 **Mobile Apps**: iOS, Android, cross-platform solutions
- 🎨 **UI/UX Design**: User experience design, branding, accessibility
- 🔧 **DevOps**: Cloud infrastructure, automation, monitoring

### **Digital Marketing & Content**
- 📢 **Digital Marketing**: SEO, social media, email campaigns
- ✍️ **Content Creation**: Copywriting, video production, graphic design
- 📊 **Analytics**: Data analysis, reporting, dashboard creation
- 🎯 **Strategy**: Digital transformation, technology planning

### **Operations & Management**
- 💰 **Grant Writing**: Fundraising support, proposal development
- 📋 **Project Management**: Agile coaching, process optimization
- 🔍 **Research**: Market research, impact assessment, data collection
- 📚 **Training**: Digital literacy, capacity building, workshops

## 🔐 Security & Privacy

### **Data Protection**
- **GDPR Compliant**: Full compliance with European data protection regulations
- **Data Encryption**: End-to-end encryption for sensitive information
- **Secure Authentication**: Multi-factor authentication and OAuth integration
- **Regular Audits**: Quarterly security assessments and penetration testing

### **Privacy Features**
- **Granular Permissions**: Control what information you share
- **Data Portability**: Export your data anytime
- **Right to Deletion**: Complete data removal on request
- **Transparent Policies**: Clear, understandable privacy policies

## 🚀 Deployment

### **Production Deployment**

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Deploy via Lovable (Recommended):**
   - Visit the [Lovable Project](https://lovable.dev/projects/74c2c752-6fbc-443c-9f82-19a300f86ee6)
   - Click Share → Publish
   - Your app will be deployed instantly

3. **Alternative Deployment Options:**
   ```bash
   # Netlify
   npm run build && netlify deploy --prod --dir=dist

   # Vercel
   vercel --prod

   # Custom Server
   npm run build && npm run start:prod
   ```

### **Environment-Specific Configurations**
```bash
# Development
NODE_ENV=development

# Staging
NODE_ENV=staging
VITE_API_BASE_URL=https://api-staging.lakshya.org

# Production
NODE_ENV=production
VITE_API_BASE_URL=https://api.lakshya.org
```

## 🤝 Contributing

We welcome contributions from developers, designers, and anyone passionate about social impact!

### **How to Contribute**

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes** and add tests
4. **Commit with conventional commits:**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
5. **Push to your branch:**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### **Contribution Guidelines**
- **Code Style**: Follow the established ESLint and Prettier configuration
- **Testing**: Add tests for new features and ensure existing tests pass
- **Documentation**: Update relevant documentation for any changes
- **Accessibility**: Ensure all UI changes meet WCAG 2.1 AA standards

### **Priority Areas for Contribution**
- 🌐 **Internationalization**: Add support for more languages
- ♿ **Accessibility**: Improve platform accessibility features
- 📱 **Mobile Experience**: Enhance mobile app functionality
- 🤖 **AI Features**: Improve matching algorithms
- 🎨 **Design System**: Expand component library
- 🔧 **Integrations**: Add third-party service integrations

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**Built with ❤️ by Tanmay Agarwal**

---

> *"लक्ष्य सिर्फ एक प्लेटफॉर्म नहीं, एक मिशन है।"*  
> *"Lakshya is not just a platform, it's a mission."*
