import React,{ useState} from 'react'
import SignupInfo from "./SignupInfo";
import OtherInfo from "./OtherInfo";
import PersonalInfo from "./PersonalInfo";

const Form = () => {
    const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });
  const FormTitles = ["Sign Up", "Personal Info", "Other"];
  const PageDisplay = () => {
    if (page === 0) {
      return <SignupInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };
  return (
   <>
   <h1>{FormTitles[page]}</h1>
   <div className="body">{PageDisplay()}</div>
   <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
   </>
  )
}

export default Form