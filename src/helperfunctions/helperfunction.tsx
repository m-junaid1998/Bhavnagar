import React from "react";

interface InputFieldProps {
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  options?: string[];
  disabled?: boolean;
  value?: string;
  isDark?: boolean; 
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  required = false,
  options,
  disabled = false,
  value,
  isDark = false, 
}) => (
  <div className="flex flex-col gap-2 w-full">
    <label
      className={`text-[11px] font-bold uppercase tracking-wider ${
        isDark ? "text-slate-400" : "text-slate-500"
      }`}
    >
      {label} {required && <span className="text-red-500 font-bold">*</span>}
    </label>
    {options ? (
      <select
        disabled={disabled}
        className={`px-4 py-3 rounded-xl border outline-none transition-all appearance-none cursor-pointer text-sm ${
          isDark
            ? "bg-slate-800 border-slate-700 text-white focus:border-emerald-500"
            : "bg-white border-slate-200 text-slate-800 focus:border-emerald-500 shadow-sm"
        }`}
      >
        <option value="">Select {label}</option>
        {options.map((opt: string) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        className={`px-4 py-3 rounded-xl border outline-none transition-all text-sm ${
          isDark
            ? "bg-slate-800 border-slate-700 text-white focus:border-emerald-500"
            : "bg-white border-slate-200 text-slate-800 focus:border-emerald-500 shadow-sm"
        } ${disabled ? "opacity-50 bg-slate-100 cursor-not-allowed" : ""}`}
      />
    )}
  </div>
);

export default InputField;