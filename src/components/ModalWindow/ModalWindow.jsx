import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import {
  ModalButton,
  ModalList,
  ModalListItem,
  ModalPhone,
  ModalLinkButton,
} from "./ModalWindow.styled";

export const ModalWindow = ({ open, handleOpen, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "60%",
          transform: "translate(-50%, -50%)",
          width: 350,
          height: "100vh",
          bgcolor: "#ffffff",
          outline: "none",
          padding: "15px",
          color: "#303030",
        }}
      >
        <CloseIcon
          fontSize="large"
          sx={{
            cursor: "pointer",
            color: "#000000",
            marginLeft: "280px",
            marginTop: "85px",
            marginBottom: "30px",
          }}
          onClick={handleClose}
        />
        <ModalList>
          <ModalListItem>
            <ModalButton>О нас</ModalButton>
          </ModalListItem>
          <ModalListItem>
            <ModalButton>Товары</ModalButton>
          </ModalListItem>
          <a href="g">
            <ModalButton>Контакты</ModalButton>
          </a>
        </ModalList>
        <ModalPhone href="tel:+380441111111">+38 044 111 11 11</ModalPhone>
        <ModalLinkButton>Онлайн-запись</ModalLinkButton>
      </Box>
    </Modal>
  );
};
