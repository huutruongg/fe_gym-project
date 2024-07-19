import React, { useEffect } from 'react';
import EditorBlog from '../components/EditorBlog';

function UpdateBlog() {
  useEffect(() => {
    document.title = "Cập nhật Blog";
  }, []);
  const act_name = "Cập nhật";
  return (
    <EditorBlog act={act_name} />
  );
}

export default UpdateBlog;
