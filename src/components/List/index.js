import React from "react";
import Card from "../Card";
import { MdAdd } from "react-icons/md";
import { ContainerList } from "./styles";

export default function List() {
  return (
    <ContainerList>
      <header>
        <h2>Tarefas</h2>
        <button type="button">
          <MdAdd size={24} color="#fff" />
        </button>
      </header>
      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </ContainerList>
  );
}
