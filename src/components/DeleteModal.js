import { useParams, useNavigate } from "react-router-dom";
import { Button, Modal } from "semantic-ui-react";
import { useState, useContext } from "react";
import { AppContext } from "../AppContext";

const DeleteModal = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const { api, getArticles } = useContext(AppContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async () => {
    try {
      await api().delete(`/posts/${id}`);
      setError("");
      getArticles();
      navigate("/", { replace: true });
    } catch (error) {
      setError("Beim Löschen ist ein Fehler aufgetreten!");
    }
  };
  return (
    <>
      <Modal
        centered={false}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={<Button >Löschen</Button>}
      >
        <Modal.Header>Artikel löschen!</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p> Möchten Sie diesen Artikel wirklich löschen?</p>
            {error && <p>{error}</p>}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
        <div className="ui buttons">
          <Button className="ui black button" onClick={() => setOpen(false)}>Absagen</Button>
          <div className="or" data-text="<>"></div>
          <Button className="ui button" onClick={() => handleDelete(id)}>Löschen</Button>
          </div>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default DeleteModal;
