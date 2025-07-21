type Project = {
	name: string;
	description: string;
	url: string;
  image: string;
}

const projects: Project[] = [
	{
    name: "Mi Blog",
    description: "Blog personal sobre desarrollo web.",
    url: "https://miblog.com",
    image: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png", // ejemplo
  },
  {
    name: "App de Tareas",
    description: "Gestor de tareas simple y rápido.",
    url: "https://apptareas.com",
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png", // ejemplo
  },
  {
    name: "Portfolio Web",
    description: "Mi portafolio profesional.",
    url: "https://portfolio.com",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // ejemplo
  },
];

export function Portfolio(){
	return (
		<div className="w-full max-w-xl mx-auto p-6 bg-white dark:bg-neutral-900 rounded-lg shadow-md">
			<h2 className="text-2xl font-bold mb-6 text-green-600">Mis Proyectos</h2>
      <ul className="flex flex-col gap-4">
        {projects.map((project) => (
          <li key={project.url} className="border-b pb-4 last:border-b-0 flex items-center gap-4">
            <img
              src={project.image}
              alt={project.name}
              className="w-12 h-12 rounded-lg object-cover border"
            />
            <div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-600 hover:underline"
              >
                {project.name}
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
            </div>
          </li>
        ))}
      </ul>
		</div>
	);	
};