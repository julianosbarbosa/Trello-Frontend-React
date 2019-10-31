import React from "react";
import List from "../List";
import { ContainerBoard } from "./styles";

export default function Board() {
  return (
    <ContainerBoard>
      <List />
      <List />
      <List />
      <List />
    </ContainerBoard>
  );
}
