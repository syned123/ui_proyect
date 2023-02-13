import { useDispatch, useSelector } from "react-redux";
import { onCloseClientModal, onOpenClientModal } from "../store/ui/uiSlice";

export const useUiStore = () => {
  const dispatch = useDispatch();
  const { isClientModalOpen } = useSelector((state) => state.ui);
  const openClientModal = () => {
    dispatch(onOpenClientModal());
  };
  const closeClientModal = () => {
    dispatch(onCloseClientModal());
  };
  return {
    isClientModalOpen,

    openClientModal,
    closeClientModal,
  };
};
