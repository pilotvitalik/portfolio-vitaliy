import { Link } from "react-router-dom";

function TableContents() {
  const listProjects = [
    {
      id: 1,
      title: 'Projects',
      link: 'projects'
    },
    {
      id: 2,
      title: 'Wiki',
      link: 'wiki'
    },
    {
      id: 3,
      title: 'Telegram projects',
      link: 'telegram-projects'
    },
    {
      id: 4,
      title: 'Онлайн тестированиe',
      link: 'online-testing'
    }
  ]

  const links = listProjects.map(project =>
    <li key={project.id.toString()}>
      <Link to={`${process.env.REACT_APP_PROJECT_URL}/${project.link}/`} target="_blank">{project.title}</Link>
    </li>
  )

  return (
    <nav>
      <ul>
        {links}
      </ul>
    </nav>
  )
}

export default TableContents;
