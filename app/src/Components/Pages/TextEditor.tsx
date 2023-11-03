import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TextEditor: React.FC = () => {
  const handleEditorChange = (content: string) => {
    console.log(content);
  };

  return (
    <div>
      <Editor
        initialValue="<p>Seu conteúdo inicial aqui</p>"
        apiKey="ppdm3waziny1vi10yhh3re50li27artiwhftdhp0ah0uxvef" // Substitua pela sua chave de API do TinyMCE
        init={{
          height: 500, // Altura do editor
          menubar: true, // Barra de menus
          plugin_version: '6.6.0',
          plugins: 'advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table code help wordcount',
          toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
        }}
        onEditorChange={handleEditorChange}
      />
    </div>
  );
};

export default TextEditor;