import React, { useEffect } from 'react'
import EditorGuide from '../components/EditorGuide';


function UpdateGuide() {
    useEffect(() => {
        document.title = "Cập nhật Guide";
    }, []);
    let act_name = "Cập nhật"
    return (
        <EditorGuide act={act_name} />
    );
}

export default UpdateGuide
