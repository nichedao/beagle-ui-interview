import React from 'react';

interface Props {
  specName: string;
  id?: string;
  existingFieldValues?: Record<string, any>;
  onSave: (specName: string, id: string | null, values: Record<string, any>) => void; 
}

const SpecForm = ({specName, id, existingFieldValues, onSave}: Props) => {
  const [formValues, setFormValues] = React.useState<Record<string, any>>({});

  React.useEffect(() => {
    if (!existingFieldValues) {
      return;
    }

    setFormValues(existingFieldValues);
  }, [existingFieldValues]);

  const handleSubmit = React.useCallback(() => {
    onSave(specName, id || null, formValues);
  }, [specName, id, formValues, onSave]);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit();
      setFormValues({});
    }}>
      <div>
        <label>example field
          <input 
            type="text" 
            name="example_field" 
            value={formValues['example_field'] || ''}
            onChange={(e) => {
              setFormValues({
                [e.target.name]: e.target.value, 
                ...setFormValues,
              });
            }} 
          />
        </label>
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default SpecForm;
