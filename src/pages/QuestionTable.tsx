
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteQuestion } from "../slice/questionsSlice";
import { Question } from "../type/questionsTypes";
import QuestionForm from "./QuestionForm";
import { Pencil, Trash2 } from "lucide-react";

interface Props {
  questions: Question[];
}

export default function QuestionTable({ questions }: Props) {
  const dispatch = useDispatch();

  const [openEdit, setOpenEdit] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );

  return (
    <>
      {openEdit && selectedQuestion && (
        <QuestionForm
          mode="edit"
          initialData={selectedQuestion}
          onClose={() => {
            setOpenEdit(false);
            setSelectedQuestion(null);
          }}
        />
      )}

      <table className="min-w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Tags</th>
            <th className="border p-2">Difficulty</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {questions.map((q) => (
            <tr key={q.id}>
              <td className="border p-2">{q.title}</td>
              <td className="border p-2">{q.tags.join(", ")}</td>
              <td className="border p-2">{q.difficulty}</td>
              <td className="border p-2 text-center">
                <button
                  onClick={() => {
                    setSelectedQuestion(q);
                    setOpenEdit(true);
                  }}
                  className="text-blue-600 mr-3"
                >
                    <Pencil size={16} />
                </button>

                <button
                  onClick={() => dispatch(deleteQuestion(q.id))}
                  className="text-red-600"
                >
                  <Trash2 size={ 16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
