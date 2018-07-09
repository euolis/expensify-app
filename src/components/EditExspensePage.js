import React from 'react';

const EditExspensePage = (props) => {
    console.log(props);
    return (
        <div>
            Editing the exspense with id of {props.match.params.id}
        </div>
    );
}

export default EditExspensePage;
