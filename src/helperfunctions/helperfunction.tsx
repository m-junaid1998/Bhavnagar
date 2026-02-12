

// import React from "react";
// import { Upload, FileText } from "lucide-react";

// export interface InputFieldProps {
//   label: string;
//   placeholder?: string;
//   type?: string;
//   required?: boolean;
//   options?: string[];
//   disabled?: boolean;
//   value?: string;
//   isDark?: boolean;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
// }

// export const InputField: React.FC<InputFieldProps> = ({
//   label, placeholder, type = "text", required = false, options, disabled = false, value, isDark = false, onChange
// }) => (
//   <div className="flex flex-col gap-2 w-full">
//     <label className={`text-[11px] font-bold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>
//       {label} {required && <span className="text-red-500 font-bold">*</span>}
//     </label>
//     {options ? (
//       <select
//         disabled={disabled}
//         onChange={onChange}
//         value={value}
//         className={`px-4 py-3 rounded-xl border outline-none transition-all appearance-none cursor-pointer text-sm ${
//           isDark ? "bg-slate-800 border-slate-700 text-white focus:border-emerald-500" : "bg-white border-slate-200 text-slate-800 focus:border-emerald-500 shadow-sm"
//         }`}
//       >
//         <option value="">Select {label}</option>
//         {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
//       </select>
//     ) : (
//       <input
//         type={type}
//         placeholder={placeholder}
//         disabled={disabled}
//         value={value}
//         onChange={onChange}
//         className={`px-4 py-3 rounded-xl border outline-none transition-all text-sm ${
//           isDark ? "bg-slate-800 border-slate-700 text-white focus:border-emerald-500" : "bg-white border-slate-200 text-slate-800 focus:border-emerald-500 shadow-sm"
//         } ${disabled ? "opacity-50 bg-slate-100 cursor-not-allowed" : ""}`}
//       />
//     )}
//   </div>
// );

// export interface FileUploadFieldProps {
//   label: string;
//   file: File | null;
//   onUpload: (file: File) => void;
//   onRemove: () => void;
//   isDark?: boolean;
//   required?: boolean;
// }

// export const FileUploadField: React.FC<FileUploadFieldProps> = ({
//   label, file, onUpload, onRemove, isDark = false, required = false
// }) => (
//   <div className="flex flex-col gap-3">
//     <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
//        {label} {required && <span className="text-red-500 font-bold">*</span>}
//     </label>
//     <div
//       onDragOver={(e) => e.preventDefault()}
//       onDrop={(e) => {
//         e.preventDefault();
//         if (e.dataTransfer.files?.[0]) onUpload(e.dataTransfer.files[0]);
//       }}
//       className={`relative h-44 border-2 border-dashed rounded-[32px] flex flex-col items-center justify-center transition-all ${
//         file ? "border-emerald-500 bg-emerald-500/5" : isDark ? "bg-slate-800/40 border-slate-700" : "bg-slate-50 border-slate-200"
//       }`}
//     >
//       {file ? (
//         <div className="text-center p-4">
//           <div className="bg-emerald-500/10 p-3 rounded-full w-fit mx-auto mb-2">
//             <FileText className="text-emerald-500" size={24} />
//           </div>
//           <p className="text-[10px] font-bold text-slate-600 dark:text-slate-300 truncate max-w-[180px] mb-1">{file.name}</p>
//           <button type="button" onClick={onRemove} className="text-[10px] text-red-500 font-black uppercase hover:underline">
//             Remove File
//           </button>
//         </div>
//       ) : (
//         <>
//           <Upload className="text-slate-300 mb-3" size={28} />
//           <p className="text-[10px] text-slate-400 font-bold uppercase mb-4 text-center px-4">Drag & Drop or click to upload</p>
//           <label className="cursor-pointer bg-emerald-500 text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all">
//             Select File
//             <input type="file" className="hidden" accept=".png,.jpg,.jpeg" onChange={(e) => { if (e.target.files?.[0]) onUpload(e.target.files[0]); }} />
//           </label>
//         </>
//       )}
//     </div>
//   </div>
// );
import React from "react";
import { Upload, FileText, AlertCircle } from "lucide-react"; // AlertCircle add kiya hai

export interface InputFieldProps {
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  options?: string[];
  disabled?: boolean;
  value?: string;
  isDark?: boolean;
  error?: string; // Error prop add kiya
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  label, placeholder, type = "text", required = false, options, disabled = false, value, isDark = false, error, onChange
}) => (
  <div className="flex flex-col gap-2 w-full">
    <label className={`text-[11px] font-bold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>
      {label} {required && <span className="text-red-500 font-bold">*</span>}
    </label>
    {options ? (
      <select
        disabled={disabled}
        onChange={onChange}
        value={value}
        className={`px-4 py-3 rounded-xl border outline-none transition-all appearance-none cursor-pointer text-sm ${
          error ? "border-red-500" : isDark ? "bg-slate-800 border-slate-700 text-white focus:border-emerald-500" : "bg-white border-slate-200 text-slate-800 focus:border-emerald-500 shadow-sm"
        }`}
      >
        <option value="">Select {label}</option>
        {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        className={`px-4 py-3 rounded-xl border outline-none transition-all text-sm ${
          error ? "border-red-500 ring-1 ring-red-500/20" : isDark ? "bg-slate-800 border-slate-700 text-white focus:border-emerald-500" : "bg-white border-slate-200 text-slate-800 focus:border-emerald-500 shadow-sm"
        } ${disabled ? "opacity-50 bg-slate-100 cursor-not-allowed" : ""}`}
      />
    )}
    {/* Error Message Section */}
    {error && (
      <p className="text-[10px] text-red-500 font-bold flex items-center gap-1 mt-0.5 ml-1 animate-pulse">
        <AlertCircle size={10} /> {error}
      </p>
    )}
  </div>
);

export interface FileUploadFieldProps {
  label: string;
  file: File | null;
  onUpload: (file: File) => void;
  onRemove: () => void;
  isDark?: boolean;
  required?: boolean;
  error?: string; // Error prop add kiya
}

export const FileUploadField: React.FC<FileUploadFieldProps> = ({
  label, file, onUpload, onRemove, isDark = false, required = false, error
}) => (
  <div className="flex flex-col gap-3">
    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
       {label} {required && <span className="text-red-500 font-bold">*</span>}
    </label>
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        if (e.dataTransfer.files?.[0]) onUpload(e.dataTransfer.files[0]);
      }}
      className={`relative h-44 border-2 border-dashed rounded-[32px] flex flex-col items-center justify-center transition-all ${
        error ? "border-red-500 bg-red-50/5" : file ? "border-emerald-500 bg-emerald-500/5" : isDark ? "bg-slate-800/40 border-slate-700" : "bg-slate-50 border-slate-200"
      }`}
    >
      {file ? (
        <div className="text-center p-4">
          <div className="bg-emerald-500/10 p-3 rounded-full w-fit mx-auto mb-2">
            <FileText className="text-emerald-500" size={24} />
          </div>
          <p className="text-[10px] font-bold text-slate-600 dark:text-slate-300 truncate max-w-[180px] mb-1">{file.name}</p>
          <button type="button" onClick={onRemove} className="text-[10px] text-red-500 font-black uppercase hover:underline">
            Remove File
          </button>
        </div>
      ) : (
        <>
          <Upload className={error ? "text-red-300 mb-3" : "text-slate-300 mb-3"} size={28} />
          <p className={`text-[10px] font-bold uppercase mb-4 text-center px-4 ${error ? "text-red-400" : "text-slate-400"}`}>
            {error ? error : "Drag & Drop or click to upload"}
          </p>
          <label className={`cursor-pointer px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
            error ? "bg-red-500 text-white" : "bg-emerald-500 text-white hover:bg-emerald-600"
          }`}>
            Select File
            <input type="file" className="hidden" accept=".png,.jpg,.jpeg" onChange={(e) => { if (e.target.files?.[0]) onUpload(e.target.files[0]); }} />
          </label>
        </>
      )}
    </div>
  </div>
);