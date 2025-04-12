import { ErrorMessage, Field } from "formik";
 
interface SelectProps {
  label: string;
  name: string;
  required?: boolean;
  options: { value: string | undefined; label: string }[];
  style? : string
}
 
const Dropdown: React.FC<SelectProps> = ({ label, name, required, options, style }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 mt-3 text-sm text-start font-medium text-gray-900 ">{label}<span className='text-red-500'>&nbsp;{required && '*'}</span></label>
      <Field as="select" name={name} className={`${style} w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200`}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value? opt.value : undefined}>
            {opt.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
    </div>
  );
};
 
export default Dropdown;