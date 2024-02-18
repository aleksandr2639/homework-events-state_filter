import { useState } from 'react';
import projects from '../projects';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';

function Portfolio() {
  const[item, setState] = useState({selected: 'All'});
  const menu = ["All", "Websites", "Flayers", "Business Cards"];

  return (
    <>
      <Toolbar
        menu={menu}
        selected={item.selected}
        onSelectFilter={(filter) => setState(() => ({ selected: filter }))} />
      <ProjectList item={item.selected === "All" ? projects : projects.filter(el => el.category === item.selected)}/>
    </>
  )
}

export default Portfolio