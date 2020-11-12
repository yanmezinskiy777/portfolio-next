import React from "react";
import BasePage from "@/components/layouts/basePage";
import Base from "@/components/layouts/base";
import WithAuth from "@/hoc/withAuth";
import { Editor } from 'slate-simple-editor';
import { toast } from "react-toastify";
import { useGetBlogById, useUpdateBlog } from "@/actions/blogs";
import { useRouter } from "next/router";

const BlogUpdater = () => {
  const router = useRouter();
  const { data: blog } = useGetBlogById(router.query.id);
  const [ saveBlog, { data, error, loading } ] = useUpdateBlog();

  const onHandleSaveBlog = async (data) => {
    await saveBlog(router.query.id, data);
    if (!error) toast.success('Updated blog');
  }

  if(error) {
    toast.error(error);
  }

  console.log(blog);
  return (
  <Base>
    <BasePage>
      <div>
        {!error && blog && blog.content && <Editor header="update your post"
         initialContent={blog.content}
         loading={loading}
         onSave={onHandleSaveBlog} /> }
      </div>
    </BasePage>
  </Base>
  );
};

export default WithAuth(BlogUpdater)("admin");
