import React from "react";
import { getRecipeFromChefClaude } from "../ai";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";

export default function AiRecipe(props) {
  return (
    
      <section>
        <h2>ChefAI recommands:</h2>
        <ReactMarkdown>{props.text}</ReactMarkdown>
      </section>
    
  );
}
