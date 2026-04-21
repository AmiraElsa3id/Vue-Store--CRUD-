# Vue Store CRUD Application

A modern, responsive e-commerce product management system built with Vue 3, Pinia, and Tailwind CSS. This application demonstrates full CRUD operations with a beautiful UI and seamless user experience.

## 🚀 Features

- **Product Management**: Complete CRUD operations (Create, Read, Update, Delete)
- **Modern UI**: Built with Vue 3, Tailwind CSS, and DaisyUI components
- **State Management**: Pinia for reactive state management
- **Routing**: Vue Router for navigation between views
- **Toast Notifications**: User-friendly feedback system
- **Responsive Design**: Mobile-first approach with beautiful animations
- **JSON Server**: Mock REST API for development
- **Loading States**: Smooth loading indicators and error handling

## 🛠️ Tech Stack

### Frontend
- **Vue 3** - Progressive JavaScript framework
- **Pinia** - Intuitive state management
- **Vue Router** - Official routing solution
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **VueUse** - Composition utilities
- **Vue Toast Notification** - Notification system

### Development Tools
- **Vite** - Fast build tool and dev server
- **Vue DevTools** - Browser extension for debugging

### Backend (Development)
- **JSON Server** - Fake REST API for development

## 📋 Prerequisites

- Node.js ^20.19.0 || >=22.12.0
- npm or yarn package manager

## 🚀 Quick Start

### 1. Clone and Install Dependencies

```bash
git clone <repository-url>
cd Vue-Store--CRUD-
npm install
```

### 2. Start the Development Servers

You'll need two terminals running simultaneously:

**Terminal 1: Start the JSON Server (Backend)**
```bash
npm run server
```
This will start the mock API server at `http://localhost:3000`

**Terminal 2: Start the Vue Development Server**
```bash
npm run dev
```
This will start the Vue app at `http://localhost:5173`

### 3. Open Your Browser

Navigate to `http://localhost:5173` to see the application in action.

## 📁 Project Structure

```
Vue-Store--CRUD-/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, styles, etc.
│   ├── components/        # Vue components
│   │   ├── layout/       # Layout components (Nav, Footer)
│   │   └── shared/       # Reusable components
│   ├── composable/       # Vue composables
│   ├── routes/           # Vue Router configuration
│   ├── stores/           # Pinia stores
│   ├── views/            # Page components
│   ├── App.vue           # Root component
│   └── main.js           # Application entry point
├── db.json               # JSON Server database
├── package.json          # Project dependencies
└── README.md             # This file
```

## 🎯 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run server` - Start JSON Server for mock API
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📊 API Endpoints

The JSON Server provides the following endpoints:

- `GET /products` - Get all products
- `GET /products/:id` - Get a specific product
- `POST /products` - Create a new product
- `PUT /products/:id` - Update a product
- `DELETE /products/:id` - Delete a product

## 🎨 UI Components

The application uses DaisyUI components for a consistent and modern design:

- Navigation bar with responsive menu
- Product cards with images and details
- Modal dialogs for create/edit operations
- Toast notifications for user feedback
- Loading spinners and error states
- Forms with validation

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific settings:

```env
VITE_API_URL=http://localhost:3000
```

### Customization

- **Theme**: Modify Tailwind CSS configuration in `tailwind.config.js`
- **API Endpoints**: Update store files to point to different APIs
- **Components**: Extend or modify components in the `src/components` directory

## 🧪 Development Tips

### Browser DevTools

For the best development experience, install the Vue.js devtools browser extension:

- **Chrome**: [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- **Firefox**: [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

Enable Custom Object Formatter in your browser's DevTools for better debugging experience.

### Code Structure

- **Composables**: Reusable logic using Vue 3 Composition API
- **Stores**: Pinia stores for state management
- **Components**: Single-file components with `<script setup>` syntax
- **Routing**: Declarative routing with Vue Router

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Vue.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- DaisyUI for the beautiful component library
- JSON Server for the easy mock API setup

---

**Happy Coding! 🎉**
