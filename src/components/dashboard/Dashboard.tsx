
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import QuestionTable from "../../pages/QuestionTable";
import QuestionForm from "../../pages/QuestionForm";
import { useState } from "react";

export default function Dashboard() {
  const questions = useSelector((state: RootState) => state.questions);
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-lg sm:text-xl font-bold">Interview Questions</h1>

        <button
          onClick={() => setOpenForm(true)}
          className="w-full sm:w-auto px-5 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition"
        >
          + Add
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
        <QuestionTable questions={questions} />
      </div>

      {openForm && (
        <QuestionForm mode="add" onClose={() => setOpenForm(false)} />
      )}
    </>
  );
}
