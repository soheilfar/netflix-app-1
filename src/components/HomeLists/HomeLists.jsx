import React, { useEffect } from "react";
import { List } from "./List/List";
import { HomeListsSec } from "./StyleHomeLists";
import { useHomeContext } from "../../context/HomeContext/HomeContext";

export const HomeLists = ({ type }) => {
  const { allMovies, filtHandler, filtLists } = useHomeContext();
  // FIRST filter all movies by type
  useEffect(() => {
    filtHandler(type);
  }, [type]);

  return (
    <>
      <HomeListsSec>
        {filtLists.map((genre, indx) => {
          return (
            <List allMovies={allMovies} type={type} genre={genre} key={indx} />
          );
        })}
      </HomeListsSec>
    </>
  );
};
