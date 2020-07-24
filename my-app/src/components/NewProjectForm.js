import React, { useState, useEffect } from "react";
import axios from "axios";

export default function NewProjectForm() {
  const [formState, setFormState] = useState({
    projectTitle: "",
    projectDescription: "",
    goalAmount: "",
    amountReceived: "",
    fundingCompleted: "", 
  });
  return (
    <form>
      <label htmlFor="projectTitle">
        <input type="text" name="projectTitle" value={formState.projectTitle}></input>
      </label>
      <label htmlFor="projectDescription">
        <textarea type="text" name="projectDescription" value={formState.projectDescription}></textarea>
      </label>
      <label htmlFor="goalAmount">
        <input type="text" name="goalAmount" value={formState.goalAmount}></input>
      </label>
      <label htmlFor="amountReceived">
        <input type="text" name="amountReceived" value={formState.amountReceived}></input>
      </label>
      <label htmlFor="fundingCompleted">
        <input type="text" name="fundingCompleted" value={formState.fundingCompleted}></input>
      </label>
      <label></label>
    </form>
  );
}
