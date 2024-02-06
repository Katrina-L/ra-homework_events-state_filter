export default function ProjectList({ projectsListFiltered }) {
    return (
        <ul className="project-list">
            {projectsListFiltered.map( (project, index) => {
                return (
                    <li key={index} className="project-list_item">
                        <img className="project-list_img" src={project.img} />
                    </li>
                )
            })}
        </ul>
    );
}
