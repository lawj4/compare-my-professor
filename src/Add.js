import React from "react";
import { getEntireDB, readCourseData, addProfessor, doesCourseProfExist} from './Firebase'

function dontRefresh (e) {
    e.preventDefault();
    console.log('started');
    addProfessor("ics31","Irene Gassko");
    addProfessor("ics32","alex thornton");
    addProfessor("ics32","richard pattis");
    addProfessor("ics33","alex thornton");
    addProfessor("ics45c","emily navarro");
}


export default function Add() {
    

  return (
    <div>
      <form onSubmit={(e) => dontRefresh(e)}>
        <label>Enter Mesage</label>
        <input type="text" />
        <button type="submit">save</button>
      </form>
    </div>
  );
}
