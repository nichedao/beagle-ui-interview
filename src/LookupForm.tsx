import React from 'react';

interface Props {
  onLoad: (specName: string, id: string) => void;
}

const LookupForm = ({ onLoad }: Props) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      
      const specName = formData.get('spec_name') as string;
      const id = formData.get('id') as string;
      if (!specName || !id) {
        return alert('Select a spec and enter an id!');
      }

      onLoad(specName, id);
    }}>
      <label>spec type:
        <select name="spec_name">
          <option>user</option>
        </select>
      </label>
      <label>Existing spec id:
        <input name="id" type="text" />
      </label>
      <button type="submit">Load</button>
    </form>
  );
};

export default LookupForm;
