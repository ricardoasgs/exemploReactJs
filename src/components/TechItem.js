import React from "react";

// import { Container } from './styles';

function TechItem({tech, onDelete}) {
  return (
    <li>
      {tech}
      <button type="button" onClick={onDelete}>
        Remover
      </button>
    </li>
  );
}

export default TechItem;
