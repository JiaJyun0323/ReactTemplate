import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

export default function ConfirmDialog({
  open,
  onClose,
  onConfirm,
  title,
  content,
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={onConfirm}>
          確定
        </Button>
        <Button variant="contained" color="secondary" onClick={onClose}>
          取消
        </Button>
      </DialogActions>
    </Dialog>
  );
}
