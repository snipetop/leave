# 📋 Leave Application and Tracking System

> A comprehensive web-based leave management system for organizations to streamline leave applications, approvals, and tracking.

![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Latest-blueviolet?logo=vite)
![Firebase](https://img.shields.io/badge/Firebase-Latest-orange?logo=firebase)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📝 Description

The **Leave Application and Tracking System** is a modern, responsive web application designed to simplify leave management for employees and administrators. It provides an intuitive interface for employees to apply for leave and track their status, while giving administrators tools to manage and approve leave requests efficiently.

---

## ✨ Features

- 🔐 **User Authentication**: Secure login for both employees and administrators
- 📝 **Leave Application**: Easy-to-use form for submitting leave requests
- 📊 **Leave Tracking**: Real-time status updates and leave history
- 👨‍💼 **Admin Dashboard**: Comprehensive dashboard for managing all leave requests
- 🎯 **Attendance Tracking**: Monitor employee attendance records
- ⚙️ **User Profiles**: Manage personal information and preferences
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI**: Clean, professional interface with PrimeReact components

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React JS** | Frontend framework |
| **Vite** | Build tool and dev server |
| **CSS** | Styling and responsive design |
| **PrimeReact** | UI component library |
| **React Router DOM** | Client-side routing |
| **Firebase** | Backend, authentication, and database (Firestore) |
| **React Icons** | Icon library |

---

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/leave-application-and-tracking-system.git
   cd leave-application-and-tracking-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

---

## 🚀 Usage

### For Employees
1. Login with your credentials
2. Navigate to the **Leave** section
3. Fill out the leave application form with:
   - Leave type (Casual, Sick, Earned, etc.)
   - Start and end dates
   - Reason for leave
4. Submit the application
5. Track your leave status on the **Dashboard**

### For Administrators
1. Login with admin credentials
2. Access the **Admin Dashboard** to view all leave requests
3. Review pending applications
4. Approve or reject leave requests
5. View employee profiles and settings
6. Monitor attendance records

---

## 📁 Folder Structure

```
leave-application-and-tracking-system/
├── public/                    # Static assets
├── src/
│   ├── assets/
│   │   ├── components/       # Reusable React components
│   │   │   ├── AdminDashboardContent.jsx
│   │   │   ├── AdminProfile.jsx
│   │   │   ├── EmployeeDashboardContent.jsx
│   │   │   ├── EmployeeProfile.jsx
│   │   │   ├── LeaveForm.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Topbar.jsx
│   │   ├── pages/            # Page components
│   │   │   ├── AdminPage.jsx
│   │   │   ├── EmployeePage.jsx
│   │   │   ├── AdminLogin.jsx
│   │   │   ├── EmployeeLogin.jsx
│   │   │   ├── AdminLeavesPage.jsx
│   │   │   ├── AdminAttendance.jsx
│   │   │   ├── EmployeeAttendance.jsx
│   │   │   ├── HomePage.jsx
│   │   │   └── AboutPage.jsx
│   │   └── images/           # Image assets
│   ├── routes/               # Route configurations
│   │   ├── adminRoutes.jsx
│   │   ├── employeeRoutes.jsx
│   │   ├── publicRoutes.jsx
│   │   └── index.js
│   ├── App.jsx               # Main App component
│   ├── firebase.js           # Firebase configuration
│   ├── main.jsx              # Entry point
│   ├── index.css             # Global styles
│   └── App.css               # App styles
├── .gitignore                # Git ignore rules
├── eslint.config.js          # ESLint configuration
├── vite.config.js            # Vite configuration
├── package.json              # Project metadata and dependencies
└── README.md                 # This file
```

---

## 🔗 API Endpoints (Firebase)

The application uses **Firebase Firestore** for data storage:

- **Collections**: `users`, `leaveRequests`, `attendance`
- **Authentication**: Firebase Auth with email/password
- **Real-time Updates**: Firestore listeners for live data

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Delete `node_modules` and `package-lock.json`, then run `npm install` |
| Firebase connection error | Verify `.env.local` variables match Firebase project settings |
| Port 5173 in use | Kill the process or specify another port: `npm run dev -- --port 3000` |
| Styling issues | Clear cache: `npm run build` and restart dev server |

---

## 🚀 Future Improvements

- [ ] Email notifications for leave approvals
- [ ] SMS reminders for leave status
- [ ] Advanced analytics and reporting
- [ ] Leave balance forecasting
- [ ] Integration with calendar (Google Calendar, Outlook)
- [ ] Mobile app (React Native)
- [ ] Multi-language support (i18n)
- [ ] Dark mode theme
- [ ] PDF export for leave reports
- [ ] Automated leave policy enforcement

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Kanav Sharma**
- GitHub: https://github.com/snipetop
- Email: kanavsharma953@gmail.com

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact: kanavsharma953@gmail.com

---

## 🙏 Acknowledgments

- [React Documentation](https://react.dev)
- [Firebase Documentation](https://firebase.google.com/docs)
- [PrimeReact Components](https://primereact.org/)
- [Vite Documentation](https://vitejs.dev)

---

**Last Updated**: April 2026
