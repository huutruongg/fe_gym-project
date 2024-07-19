import React from 'react';
import '../assets/css/EditorGuide.css'
import EditorGuide from '../components/EditorGuide';


const CreateGuide = () => {
    let act_name = "Tạo mới"
    return (
        <EditorGuide act={act_name} />
    );
};

export default CreateGuide;