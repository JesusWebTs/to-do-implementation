import React, { useContext } from "react";
import "./styles.css";
import useModal from "../../../../hooks/useModal";
import { Modal } from "../../../";
import { EditPage } from "../../../../pages";
import { useLocation } from "wouter";
function ListItem({ item, type, upload, remove }) {
  const { done, title, uuid, folder, tasks } = item;
  const { openModal, closeModal, showModal } = useModal();
  const storage = window.localStorage;
  const [location, setLocation] = useLocation();

  return (
    <>
      {type === "task" ? (
        <div className="grid-item grid-item--task">
          <input
            type="checkbox"
            checked={done}
            onChange={() => upload(uuid, { done: !done })}
          />
          <a>{title}</a>
          <button onClick={openModal}>Edit</button>
        </div>
      ) : null}

      {type === "folder" ? (
        <div className="grid-item grid-item--folder">
          <a>- {folder}</a>
          <button
            onClick={async () => {
              storage.setItem("folder", folder);
              storage.setItem("tasks", JSON.stringify(tasks));
              setLocation(`/folder/${uuid}`);
            }}
          >
            View items
          </button>
          <button
            onClick={() => {
              remove(uuid);
            }}
          >
            Remove
          </button>
        </div>
      ) : null}
      <Modal closeModal={closeModal} show={showModal}>
        <EditPage
          uuid={uuid}
          title={title}
          upload={upload}
          close={closeModal}
        />
      </Modal>
    </>
  );
}

export default ListItem;
