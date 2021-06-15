import React from "react";
import "./styles.css";
import useModal from "../../../../hooks/useModal";
import { Modal } from "../../../";
import { EditPage } from "../../../../pages";
import { useHistory } from "react-router";
function ListItem({ item, type, upload, setTasks }) {
  const { done, title, uuid, folder, tasks } = item;
  const { openModal, closeModal, showModal } = useModal();

  const history = useHistory();
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
              setTasks(tasks, folder);
              history.push(`/folder/${uuid}`);
            }}
          >
            View items
          </button>
          <button>Remove</button>
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
