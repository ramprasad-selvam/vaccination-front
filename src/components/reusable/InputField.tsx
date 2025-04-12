import { ErrorMessage, Field } from 'formik'

interface InputProps {
    label : string;
    name : string;
    type? : string;
    placeholder? : string;
    required? : boolean;
    style? : string;
    [key: string]: unknown
}

const InputField: React.FC<InputProps> = ({label, name, type, placeholder, required, style, ...otherprops}) => {
    return(
        <div className="mb-4">
            <label className="block mb-1 mt-3 text-sm text-start font-medium text-gray-900 " >{label}<span className='text-red-500'>&nbsp;{required && '*'}</span></label>
            <Field
                name={name}
                type={type}
                required={required}
                placeholder={placeholder}
                {...otherprops}
                className={`${style} w-full px-4 py-2 bg-white border rounded-lg focus:ring=blue-200`}
            />
            <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
        </div>
    )
}

export default InputField;