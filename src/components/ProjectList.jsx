import { v4 as uuidv4 } from "uuid";

function ProjectList({item}) {
    return (
      <div className="list_project">
        {
          item.map((el) => (
            <div key={uuidv4()}>
              <img src={el.img} alt="image" className="img"></img>
            </div>
          ))
        }
      </div>
    )
}

export default ProjectList