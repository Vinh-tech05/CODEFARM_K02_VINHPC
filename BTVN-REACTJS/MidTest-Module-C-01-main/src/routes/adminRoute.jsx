import LayoutAdmin from "../layouts/LayoutAdmin";
import CourseForm from "../pages/CoursesForm";
import CoursesList from "../pages/CoursesList";
import LessonForm from "../pages/LessonForm";
import LessonList from "../pages/LessonList";
import ProtectedRoute from "./components/ProtectedRoute";

const adminRoute = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <LayoutAdmin />
      </ProtectedRoute>
    ),
    children: [
      { path: "courses", Component: CoursesList },
      { path: "courses/create", Component: CourseForm },
      { path: "courses/edit/:id", Component: CourseForm },
      { path: "courses/:courseId/lessons", Component: LessonList },
      { path: "courses/:courseId/lessons/create", Component: LessonForm },
      { path: "courses/:courseId/lessons/edit/:id", Component: LessonForm },
    ],
  },
];
export default adminRoute;
