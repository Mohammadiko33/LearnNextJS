"use client";
import React from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

interface DeleteModalProps {
  id: string | number;
  onClose: () => void;
}

export interface IOptionToast {
  position?:
    | "top-right"
    | "top-center"
    | "top-left"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left";
  autoClose?: number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
}
export const closeTime: number = 2000; // 2 seconds
export const optionToast: IOptionToast = {
  position: "bottom-right",
  autoClose: closeTime,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

const DeleteModal: React.FC<DeleteModalProps> = ({ id, onClose }) => {
  const router = useRouter();

  const handleDelete = async (articleId: string | number) => {
    try {
      axios
        .delete(`http://localhost:8000/articles/${articleId}`)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Article deleted successfully \n ", optionToast);
            setTimeout(() => {
              onClose();
              router.push("/articles");
            }, closeTime);
          }
        });
    } catch (error) {
      toast.error("Article delete failed , check console", optionToast);
      console.error("Error deleting article:", error);
      setTimeout(() => {
        onClose();
      }, closeTime);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <ToastContainer />
      <div className="bg-zinc-900 text-zinc-100 rounded-xl shadow-xl w-full max-w-sm p-6">
        <h2 className="text-xl font-bold mb-4 text-red-500">Delete Article</h2>
        <p className="text-zinc-400 mb-6 text-sm">
          Are you sure you want to delete article{" "}
          <span className="font-mono text-red-400">#{id}</span>?
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md text-sm bg-zinc-700 hover:bg-zinc-600 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => handleDelete(id)}
            className="px-4 py-2 rounded-md text-sm bg-red-600 hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
