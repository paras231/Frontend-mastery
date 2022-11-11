import { useState } from "react";

interface postProps {
  title: String;
  likes: Number;
  desc: String;
  comments?: [];
}

const Post = (props: postProps) => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Paras Sharma",
      language: "JS",
    },
    {
      id: 2,
      name: "Shyam Sharma",
      language: "PY",
    },
    {
      id: 3,
      name: "Raja Dey",
      language: "Dart",
    },
  ]);

  return (
    <>
      <h4>{String(props.likes)}</h4>
      <span>{props.title}</span>

      {data.map((value) => {
        return (
          <>
            <span>{value.language}</span>
          </>
        );
      })}
    </>
  );
};

export default Post;
