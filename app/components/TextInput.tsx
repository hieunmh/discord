import { TextInputTypes } from "../type";

export default function TextInput({ string, placeholder, onUpdate, inputType, error } : TextInputTypes) {
    return (
        <>
            <input type={inputType} placeholder={placeholder} autoComplete="off"
                className="block w-full bg-[#f1f1f2] text-gray-800 border 
                border-gray-300 rounded-md py-2.5 px-3 focus:outline-none"
                value={string || ''} onChange={(event) => onUpdate(event.target.value)}
            />

            <div className="text-red-500 text-[14px] font-semibold">
                {error ? (error): null}
            </div>
        </>
    )
}