"use client";

import React, { useState } from "react";
import EditModal from "@/Components/EditModalArticale";
import DeleteModal from "@/Components/DeleteModalArticle";

interface Props {
  id: string | number;
  title: string;
  caption: string;
}

const ArticleActions = ({ id, title, caption }: Props) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div className="flex gap-4 mt-6">
      <button
        onClick={() => setShowEdit(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
      >
        Edit
      </button>
      <button
        onClick={() => setShowDelete(true)}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm"
      >
        Delete
      </button>

      {showEdit && (
        <EditModal
          id={id}
          title={title}
          caption={caption}
          onClose={() => setShowEdit(false)}
        />
      )}

      {showDelete && (
        <DeleteModal id={id} onClose={() => setShowDelete(false)} />
      )}
    </div>
  );
};

export default ArticleActions;
