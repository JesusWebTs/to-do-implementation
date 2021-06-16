import React, { useContext } from "react";
import "./styles.css";
import useModal from "../../../../hooks/useModal";
import { Modal } from "../../../";
import { EditPage } from "../../../../pages";
import { useLocation } from "wouter";
function ListItem({ item, type, upload, remove }) {
  const { done, title, _id, folder, tasks } = item;
  const { openModal, closeModal, showModal } = useModal();
  const storage = window.localStorage;
  const [location, setLocation] = useLocation();
  const F_id = storage.getItem("F_id");
  console.log(F_id);
  return (
    <>
      {type === "task" ? (
        <div className="grid-item grid-item--task">
          <input
            type="checkbox"
            checked={done}
            onChange={() => upload(_id, { done: !done })}
          />
          <a>{title}</a>
          <button onClick={openModal} className=".item__buttom">
            Edit
          </button>
        </div>
      ) : null}

      {type === "folder" ? (
        <div className="grid-item grid-item--folder">
          <a>- {folder}</a>
          <button
            onClick={async () => {
              storage.setItem("folder", folder);
              storage.setItem("tasks", JSON.stringify(tasks));
              setLocation(`/folder/${_id}`);
            }}
            className="item__buttom"
          >
            View items
          </button>
          <button
            onClick={() => {
              remove(_id);
            }}
            className="item__buttom"
          >
            Remove
          </button>
        </div>
      ) : null}
      <Modal closeModal={closeModal} show={showModal}>
        <EditPage _id={_id} title={title} upload={upload} close={closeModal} />
      </Modal>
    </>
  );
}

export default ListItem;
