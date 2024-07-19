import React from 'react';
import EditorBlog from '../components/EditorBlog';

function CreateBlog() {
  let act_name = "Tạo mới"
  return (
    <EditorBlog act={act_name}/>
  );
}

export default CreateBlog;