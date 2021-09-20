import React, { useState } from 'react';
import CKEditor from 'react-ckeditor-component';

const textContent =
  '<h2>Awesome Rich Content</h2>\n' +
  '<p>Suspendisse id sollicitudin dui. <strong>Vestibulum eu sapien pharetra,</strong> bibendum ligula id, ullamcorper ligula.</p>\n' +
  '\n' +
  '<ul>\n' +
  '        <li>ullamcorper ligula</li>\n' +
  '        <li>Duis vel neque</li>\n' +
  '</ul>\n' +
  '\n' +
  '<p><em>Sed feugiat hendrerit risus, quis efficitur massa facilisis vitae. Aliquam erat volutpat. </em></p>\n';

const CkEditorExample = () => {
  const [content, setContent] = useState(textContent);

  const onChange = evt => {
    const newContent = evt.editor.getData();
    setContent(newContent);
  };

  const onBlur = evt => {
    console.log('onBlur event called with event info: ', evt);
  };

  const afterPaste = evt => {
    console.log('afterPaste event called with event info: ', evt);
  };

  return (
    <React.Fragment>
      <CKEditor
        activeClass="p10"
        content={content}
        events={{
          blur: onBlur,
          afterPaste: afterPaste,
          change: onChange,
        }}
      />
    </React.Fragment>
  );
};

export default CkEditorExample;
