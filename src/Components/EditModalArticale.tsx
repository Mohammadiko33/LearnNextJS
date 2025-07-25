"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import {
  IOptionToast,
  closeTime,
  optionToast,
} from "@/Components/DeleteModalArticle";
import { useRouter } from "next/navigation";

interface EditModalProps {
  id: number | string;
  title: string;
  caption: string;
  onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({
  id,
  title,
  caption,
  onClose,
}) => {
  const [newTitle, setNewTiTle] = useState(title);
  const [newCaption, setNewCaption] = useState(caption);
  const router = useRouter();

  const handledit = async (
    id: number | string,
    title: string,
    caption: string
  ) => {
    try {
      axios
        .put(`http://localhost:8000/articles/${id}`, {
          title,
          caption,
        })
        .then((res) => {
          if (res.status === 200) {
            toast.success(
              "Article updated successfully",
              optionToast as IOptionToast
            );
            setNewTiTle("");
            setNewCaption("");
            setTimeout(() => {
              router.refresh();
              onClose();
            }, closeTime);
          }
        });
    } catch (error) {
      toast.error("Error Updating article", optionToast as IOptionToast);
      console.error("Error updating article:", error);
      
      setTimeout(() => {
        setNewTiTle("");
        setNewCaption("");
        onClose();
      }, closeTime);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <ToastContainer />
      <div className="bg-zinc-900 text-zinc-100 rounded-xl shadow-xl w-full max-w-md p-6">
        <h2 className="text-xl font-bold mb-4">Edit Article</h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTiTle(e.target.value)}
            className="bg-zinc-800 text-zinc-100 p-3 rounded-md outline-none"
            placeholder="Title"
          />

          <textarea
            value={newCaption}
            onChange={(e) => setNewCaption(e.target.value)}
            className="bg-zinc-800 text-zinc-100 p-3 rounded-md h-32 resize-none outline-none"
            placeholder="Caption"
          />

          <div className="flex justify-end gap-3 mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md text-sm bg-zinc-700 hover:bg-zinc-600 transition"
            >
              Cancel
            </button>
            <button
              onClick={() => handledit(id, newTitle, newCaption)}
              className="px-4 py-2 rounded-md text-sm bg-blue-600 hover:bg-blue-700 transition"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
