import React, { useEffect } from "react";
import axios from "axios";

const Blogs = () => {
  const [data, setData] = React.useState([]);
  const fetchBlogs = async () => {
    const { data } = await axios.get("http://localhost:5000/api/get/blogs");
    setData(data?.blogs);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  console.log(data);
  return (
    <>
      <div>
        {data?.map((b) => {
          return (
            <div key={b._id}>
              <div dangerouslySetInnerHTML={{ __html: b?.content }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
