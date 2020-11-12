import React from "react";
import BasePage from "@/components/layouts/basePage";
import Base from "@/components/layouts/base";
import WithAuth from "@/hoc/withAuth";
import { Editor } from 'slate-simple-editor';
import { useCreateBlog } from "@/actions/blogs"
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const BlogEditor = ({ data, loading }) => {
  const router = useRouter();
  const [createBlog, {error, loading: loadingBlog}] = useCreateBlog();
  
  const saveContent = async (data) => {
    const post = await createBlog(data);
    debugger;
    router.push("/blogs/editor/[id]", `/blogs/editor/${post._id}`)
   
  }

  if(error) {
    debugger;
    toast.error(error);
  }

  return (
  <Base>
    <BasePage>
      <div>
        <Editor onSave={saveContent} loading={loadingBlog} />
      </div>
    </BasePage>
  </Base>
  );
};

export default WithAuth(BlogEditor)("admin");
