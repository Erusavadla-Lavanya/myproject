import React from "react";
import { useDispatch } from "react-redux";
import { addQuestion, updateQuestion } from "../slice/questionsSlice";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Question } from "../type/questionsTypes";

type FormValues = {
  title: string;
  tags: string;
  difficulty: "Easy" | "Medium" | "Hard";
};

const schema = yup.object({
  title: yup.string().required().min(5),
  tags: yup
    .string()
    .required()
    .test(
      "tags",
      "Enter at least one tag",
      (value) => !!value && value.split(",").filter(Boolean).length > 0
    ),
  difficulty: yup.mixed<"Easy" | "Medium" | "Hard">().required(),
});

interface Props {
  onClose: () => void;
  mode: "add" | "edit";
  initialData?: Question;
}

export default function QuestionForm({
  onClose,
  mode,
  initialData,
}: Props) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: initialData?.title || "",
      tags: initialData?.tags.join(", ") || "",
      difficulty: initialData?.difficulty || "Easy",
    },
  });

  const onSubmit = (data: FormValues) => {
    if (mode === "add") {
      dispatch(
        addQuestion({
          id: uuid(),
          title: data.title,
          tags: data.tags.split(",").map(t => t.trim()),
          difficulty: data.difficulty,
        })
      );
    } else {
      dispatch(
        updateQuestion({
          id: initialData!.id,
          changes: {
            title: data.title,
            tags: data.tags.split(",").map(t => t.trim()),
            difficulty: data.difficulty,
          },
        })
      );
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-xl w-full max-w-md p-6 space-y-4"
      >
        <h2 className="text-lg font-semibold">
          {mode === "add" ? "Add Question" : "Edit Question"}
        </h2>

        <input {...register("title")} className="w-full border p-2 rounded" />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        <input {...register("tags")} className="w-full border p-2 rounded" />
        {errors.tags && <p className="text-red-500">{errors.tags.message}</p>}

        <select {...register("difficulty")} className="w-full border p-2 rounded">
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <div className="flex justify-end gap-3">
          <button type="button" onClick={onClose} className="border px-4 py-2">
            Cancel
          </button>
          <button type="submit" className="bg-violet-600 text-white px-4 py-2">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

