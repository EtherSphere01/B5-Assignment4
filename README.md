# Library Management System - Frontend 📚

This is the frontend for the Library Management System, a client-side application built with React, Redux Toolkit, and TypeScript.

[Library Management System Backend](https://github.com/EtherSphere01/B5-Assignment4/tree/main/library-management-system-server).

[Library Management System Frontend](https://github.com/EtherSphere01/B5-Assignment4/tree/main/library-management-system-client).

### Live Link: [https://library-management-system.vercel.app/](https://library-management-system-client-silk.vercel.app/)

---

## 🚀 Features

-   **Seamless API Integration**: All communication with the backend is handled efficiently using **RTK Query**.
-   **Book Management**: A full-featured interface for CRUD operations on books.
    -   **View All Books**: Displays all books in a clear, tabular format.
    -   **Create Book**: Add new books to the library through a dedicated form.
    -   **Edit Book**: Update details of any existing book.
    -   **Delete Book**: Remove books from the system with a confirmation step.
-   **Book Borrowing System**:
    -   Users can borrow available books.
    -   The system validates against the number of available copies.
-   **Borrow Summary**: A dedicated page to view an aggregated summary of all borrowed books, showing which books are most popular.
-   **Real-time UI Updates**: The UI instantly reflects any changes (create, update, delete) without needing a page refresh, thanks to RTK Query's caching mechanism.
-   **User Feedback**: **Toast notifications** provide instant feedback for user actions like success or error.
-   **Responsive Design**: The entire application is fully responsive and optimized for desktop, tablet, and mobile devices.
-   **Typed Codebase**: Built entirely with **TypeScript**, ensuring type safety and robust code.

---

## 🛠️ Tech Stack

-   **Framework**: React
-   **Language**: TypeScript
-   **State Management**: Redux Toolkit with RTK Query
-   **Routing**: React Router
-   **Styling**: Tailwind CSS
-   **UI Notifications**: React Toastify

---

## 📋 Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn package manager
-   A running instance of the [Library Management System API](https://github.com/EtherSphere01/B5-Assignment4/tree/main/library-management-system-server)

---

## ⚙️ Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/EtherSphere01/B5-Assignment4/tree/main/library-management-system-client
    cd library-management-system-client
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Backend API Connection:**
    This frontend application requires the backend API to be running. The API endpoint is configured in `src/redux/apis/bookApi.ts` and `src/redux/apis/borrowApi.ts` to connect to `http://localhost:5000/api`.

    Please follow the instructions in the [backend README](https://github.com/EtherSphere01/B5-Assignment4/blob/main/library-management-system-server/README.md) to set up and run the server.

4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if specified).

---

## 📄 Pages & Routes

The application uses **React Router** to manage navigation between different views.

-   `/`
    -   **Component**: `<Home />`
    -   **Description**: The main landing page. Displays a list of all books with options to edit, delete, and borrow.
-   `/add-book`
    -   **Component**: `<AddBook />`
    -   **Description**: A form to add a new book to the library.
-   `/books/:id`
    -   **Component**: `<BookDetails />`
    -   **Description**: Shows detailed information for a single book.
-   `/edit-book/:id`
    -   **Component**: `<EditBook />`
    -   **Description**: A form, pre-filled with book data, to update an existing book.
-   `/borrow-summary`
    -   **Component**: `<BorrowSummary />`
    -   **Description**: Displays an aggregated summary of all borrowed books, showing the book title, ISBN, and total quantity borrowed.

---

## 🏗️ Architecture

The frontend is structured to be modular and scalable, with a clear separation of concerns.

-   **`main.tsx`**: The entry point of the application, responsible for rendering the root `App` component and wrapping it with the Redux `Provider` and `RouterProvider`.
-   **`App.tsx`**: The main layout component, which includes the `Header`, `Footer`, and `Outlet` for rendering nested routes. It also contains the `ToastContainer` for notifications.
-   **`/redux`**: This directory contains all Redux-related logic.
    -   **`store.ts`**: Configures the main Redux store and combines API middleware.
    -   **`apis/`**: Holds the RTK Query API slices (`bookApi.ts`, `borrowApi.ts`), which define endpoints, caching, and invalidation logic for interacting with the backend.
    -   **`hook.ts`**: Exports typed versions of `useDispatch` and `useSelector` for use throughout the application.
-   **`/routes`**: Contains the `routes.tsx` file, which defines all the application's URL paths and maps them to their respective components.
-   **`/components`**: Contains reusable UI components used across various pages, such as `<Header>`, `<Footer>`, forms, and tables.
