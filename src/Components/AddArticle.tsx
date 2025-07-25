"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TBtn from "./TBtn";
import axios from "axios"
import { toast , ToastContainer } from "react-toastify";
import { IOptionToast,optionToast} from "@/Components/DeleteModalArticle"

interface Props { btnTiTle: string }

const AddArticle = ({ btnTiTle }: Props) => {

const getTodayDate = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  const month = `${today.getMonth() + 1}`.padStart(2, "0");
  const day = `${today.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
};

  
  const [openAddModal, setOpenAddModal] = useState(false);

  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [date, setDate] = useState(getTodayDate());
  const [image, setImage] = useState<File | null>(null);

  const [errors, setErrors] = useState<{ title?: string; caption?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!caption.trim()) newErrors.caption = "Caption is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
        axios.post("http://localhost:8000/articles" , {
            title,
            caption,
            date,
            image,
        }).then(res => {
          console.log(res)
          if (res.status === 201){
            toast.success("Article added successfully!", optionToast as IOptionToast);
            setOpenAddModal(false);
          } else {
            toast.error("Article could not be added.", optionToast as IOptionToast);
            console.error(res)
          }
        })
    }
  };

  return (
    <>
    <ToastContainer/>
      <TBtn
        title={btnTiTle}
        onClick={() => setOpenAddModal(true)}
        classNames="h-12"
      />

      <AnimatePresence>
        {openAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div
              onClick={() => setOpenAddModal(false)}
              className="absolute inset-0"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -50 }}
              transition={{ duration: 0.3 }}
              className="relative z-50 w-full max-w-md bg-white rounded-2xl p-6 shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-4 text-black">{btnTiTle}</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black">
                    Image (optional)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setImage(e.target.files ? e.target.files[0] : null)
                    }
                    className="mt-1 block w-full border border-zinc-400 rounded-md p-2 text-sm text-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black">
                    Title <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 block w-full border border-zinc-400 rounded-md p-2 text-sm text-black"
                  />
                  {errors.title && (
                    <p className="text-red-600 text-xs mt-1">{errors.title}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-black">
                    Caption <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="mt-1 block w-full border border-zinc-400 rounded-md p-2 text-sm text-black"
                    rows={3}
                  />
                  {errors.caption && (
                    <p className="text-red-600 text-xs mt-1">{errors.caption}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-black">
                    Date (optional)
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-1 block w-full border border-zinc-400 rounded-md p-2 text-sm text-black"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setOpenAddModal(false)}
                    className="px-4 py-2 text-sm bg-red-600 hover:bg-red-700 text-white rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AddArticle;
