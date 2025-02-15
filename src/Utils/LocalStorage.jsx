// localStorage.clear();

const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskNo: {
      activeTaskNo: 2,
      newTaskNo: 1,
      completedTaskNo: 1,
      failedTaskNo: 0,
    },
    tasks: [
      {
        title: "Prepare Monthly Report",
        description:
          "Compile financial and performance data for the monthly report.",
        date: "2025-02-12",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update CRM Records",
        description:
          "Ensure all client interactions are logged into the CRM system.",
        date: "2025-02-14",
        category: "Management",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Conduct Team Meeting",
        description: "Discuss weekly goals and project updates with the team.",
        date: "2025-02-15",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "Vikram",
    email: "employee2@example.com",
    password: "123",
    taskNo: {
      activeTaskNo: 2,
      newTaskNo: 1,
      completedTaskNo: 1,
      failedTaskNo: 0,
    },
    tasks: [
      {
        title: "Fix Website Bugs",
        description:
          "Identify and resolve frontend and backend bugs reported by users.",
        date: "2025-02-13",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Optimize Database Queries",
        description: "Improve SQL queries to enhance website performance.",
        date: "2025-02-14",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Deploy Application Update",
        description:
          "Deploy the latest version of the application with bug fixes.",
        date: "2025-02-16",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    firstName: "Neha",
    email: "employee3@example.com",
    password: "123",
    taskNo: {
      activeTaskNo: 4,
      newTaskNo: 2,
      completedTaskNo: 0,
      failedTaskNo: 2,
    },
    tasks: [
      {
        title: "Social Media Campaign",
        description: "Launch a new campaign to increase engagement.",
        date: "2025-02-12",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Write Blog Post",
        description: "Create a blog post about upcoming company initiatives.",
        date: "2025-02-13",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Email Newsletter",
        description: "Prepare and send the monthly email newsletter.",
        date: "2025-02-14",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    firstName: "Rajesh",
    email: "employee4@example.com",
    password: "123",
    taskNo: {
      activeTaskNo: 2,
      newTaskNo: 1,
      completedTaskNo: 1,
      failedTaskNo: 0,
    },
    tasks: [
      {
        title: "Conduct User Interviews",
        description: "Interview users to collect feedback on the product.",
        date: "2025-02-12",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Prototype New Feature",
        description: "Develop a prototype for the upcoming feature release.",
        date: "2025-02-14",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Bug Fix Review",
        description: "Review and test fixes submitted by developers.",
        date: "2025-02-15",
        category: "QA",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    firstName: "Priya",
    email: "employee5@example.com",
    password: "123",
    taskNo: {
      activeTaskNo: 2,
      newTaskNo: 1,
      completedTaskNo: 1,
      failedTaskNo: 0,
    },
    tasks: [
      {
        title: "Customer Support Training",
        description: "Train new support staff on handling customer queries.",
        date: "2025-02-12",
        category: "Support",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Resolve Open Tickets",
        description: "Work on pending support tickets from customers.",
        date: "2025-02-13",
        category: "Support",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Improve Knowledge Base",
        description: "Update FAQ and documentation for common issues.",
        date: "2025-02-15",
        category: "Support",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    firstName: "Arjun",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
