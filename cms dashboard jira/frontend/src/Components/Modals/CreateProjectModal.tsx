import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { projectModalProps, projectFormProps } from "../../types";
import axios from "axios";
import { baseURL } from "../../utils/api";
import TextField from "@mui/material/TextField";
const CreateProjectModal = (props: projectModalProps) => {
  const { open, handleClose } = props;

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={handleClose}
          ></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
              <div className="flex items-center justify-between p-4 border-b">
                <h4 className="text-lg font-medium text-gray-800">
                  Add a New Project
                </h4>
                <button
                  className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                  onClick={handleClose}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mx-auto"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="space-y-2 p-4 mt-3 text-[15.5px] leading-relaxed text-gray-500">
                <ProjectForm handleClose={handleClose} />
              </div>
              <div className="flex items-center gap-3 p-4 mt-5 border-t">
                <button
                  type="button"
                  className="px-6 py-2 text-gray-800 border rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                  onClick={handleClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateProjectModal;

const ProjectForm = (props: projectFormProps) => {
  const { handleClose } = props;
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [formData, setFormData] = useState({
    projectName: "",
    desc: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const addNewProject = async (e: any) => {
    try {
      const { data } = await axios.post(
        `${baseURL}/project/new/project`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("New Project Added");
      handleClose();
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(addNewProject)}>
          <div className="grid grid-cols-2 gap-10">
            <TextField
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              id="outlined-basic"
              label="Project Name"
              variant="outlined"
              required
            />
            <TextField
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              id="outlined-basic"
              label="Description"
              variant="outlined"
              required
            />
          </div>
          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="px-6 py-2 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
            >
              Add
            </button>
          </div>
          {isSubmitting && (
            <span style={{ fontWeight: "bold" }}>Loading...</span>
          )}
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </form>
      </div>
    </>
  );
};
