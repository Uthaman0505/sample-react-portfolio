import React from "react";
import AllBlogs from "../components/AllBlogs";
import Title from "../components/Title";

function BlogPage() {
  return (
    <>
      <div className="blog-title">
        <Title title={"Recent Blogs"} span={"Recent Blogs"} />
      </div>
      <div className="blog-page">
        {AllBlogs.map((blog) => {
          return (
            <div className="blog" key={blog.id}>
              <div className="blog-content">
                <img src={blog.image} alt="" />
                <a href={blog.link} className="blog-link">
                  {blog.title}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BlogPage;
