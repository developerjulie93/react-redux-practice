import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../store";
import { Link } from "react-router-dom";

const Todo = ({ text, onBtnClick, id }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>X</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => dispatch(deleteTodo(ownProps.id)),
  };
};
export default connect(null, mapDispatchToProps)(Todo);
