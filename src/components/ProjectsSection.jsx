import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Food Delivery Application",
    description: "An Android Application using XML and Java",
    image: "/projects/project1.png",
    tags: ["XML", "Java", "Android Studio"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/RohitKhobare/Food-Delivery-Android-Application",
  },
  {
    id: 2,
    title: "2D to 3D Asset Generator",
    description: "Interactive web app that converts 2D images into 3D models.",
    image: "/projects/project2.png",
    tags: ["HTML/CSS", "Python", "Flask"],
    demoUrl: "#",
    githubUrl: "https://github.com/RohitKhobare/2D-to-3D-Asset-Generator",
  },
  {
    id: 3,
    title: "Airline Reservation System",
    description:
      "A beautiful Airline Reservation System built with React and Tailwind CSS and Javascript.",
    image: "/projects/project3.png",
    tags: ["React", "CSS", "Javascript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Coffee Shop Web Application",
    description:
      "Frontend of a Coffee Shop built with HTML and CSS and Javascript.",
    image: "/projects/project4.png",
    tags: ["HTML", "CSS", "Javascript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Disney Clone Web Application",
    description:
      "An website clone of Disney+ built with React and Javascript and CSS.",
    image: "/projects/project5.png",
    tags: ["React", "CSS", "Javascript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "online Examination System",
    description:
      "A comprehensive online examination system built with React and Typescript and CSS.",
    image: "/projects/project6.png",
    tags: ["React", "CSS", "Typescript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Split Smart",
    description:
      "A bill-splitting app built with React and Typescript and CSS.",
    image: "/projects/project7.png",
    tags: ["React", "CSS", "Typescript"],
    demoUrl: "#",
    githubUrl: "https://github.com/RohitKhobare/-SplitSmart-",
  },
  {
    id: 8,
    title: "Hotel Management System",
    description:
      "A hotel management system web application built with React and CSS and Java.",
    image: "/projects/project8.png",
    tags: ["React", "CSS", "Java"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 9,
    title: "Smart Attendance System",
    description:
      "A smart attendance system web application built For College/School with HTML/CSS and Javasript.",
    image: "/projects/project9.png",
    tags: ["HTML", "CSS", "Javascript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 10,
    title: "Online Food Ordering System",
    description:
      "A food ordering system web application built with HTML/CSS and Java.",
    image: "/projects/project10.png",
    tags: ["HTML", "CSS", "Java"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 11,
    title: "Emotion AI",
    description:
      "A web application that detects human emotions using AI, built with HTML/CSS and Python.",
    image: "/projects/project11.png",
    tags: ["HTML", "CSS", "Python"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 12,
    title: "Topic",
    description:
      "A Web Application for Learning Online with HTML/CSS and Javascript",
    image: "/projects/project12.png",
    tags: ["HTML", "CSS", "Javascript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 13,
    title: "Farming Assistant",
    description:
      "A web application that assists farmers with HTML/CSS and Javascript",
    image: "/projects/project13.png",
    tags: ["HTML", "CSS", "Javascript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 14,
    title: "Super Market",
    description: "A Super Market Management System built with Java and SQL.",
    image: "/projects/project14.png",
    tags: ["Java", "SQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/RohitKhobare/SuperMarketApp",
  },
  {
    id: 15,
    title: "Movie Ticket Booking System",
    description: "A Movie Ticket Booking System built with Python and SQL.",
    image: "/projects/project15.png",
    tags: ["Python", "SQL"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/RohitKhobare/Movie-Ticket-Booking-System-DBMS-",
  },
  {
    id: 16,
    title: "Blood Bank",
    description:
      "A Blood Bank Management System built with HTML/CSS and JavaScript.",
    image: "/projects/project16.png",
    tags: ["HTML/CSS", "Javascript", "Node", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/RohitKhobare/Blood-Bank-Web-Application",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/RohitKhobare"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
