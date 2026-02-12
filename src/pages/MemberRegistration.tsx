// import React, { useState } from "react";
// import {
//   User,
//   MapPin,
//   Save,
//   UserPlus,
//   Globe,
//   AlertCircle,
//   XCircle,
//   Upload as IconUpload,
//   Camera,
//   FileCheck,
//   Info,
//   Users,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTheme } from "../hooks/useTheme";
// import { InputField, FileUploadField } from "../helperfunctions/helperfunction";

// const MemberRegistration: React.FC = () => {
//   const { mode } = useTheme();
//   const isDark = mode === "dark";

//   // States
//   const [fileError, setFileError] = useState<string | null>(null);
//   const [errors, setErrors] = useState<{ [key: string]: string }>({});
//   const [formData, setFormData] = useState<any>({
//     fullName: "",
//     cnic: "",
//     dob: "",
//     gender: "",
//     fatherName: "",
//     grandFatherName: "",
//     surname: "",
//     contact: "",
//     email: "",
//     maritalStatus: "",
//     censusNumber: "",
//     address: "",
//     country: "Pakistan",
//     state: "",
//     city: "",
//     area: "",
//     reference: "",
//     photo: null,
//     cnicFront: null,
//     cnicBack: null,
//   });

//   const validate = () => {
//     let newErrors: any = {};
//     if (!formData.fullName) newErrors.fullName = "Full name is required";
//     if (!formData.cnic) newErrors.cnic = "CNIC is required";
//     if (!formData.dob) newErrors.dob = "Date of birth is required";
//     if (!formData.fatherName)
//       newErrors.fatherName = "Father's name is required";
//     if (!formData.contact) newErrors.contact = "Contact number is required";
//     if (!formData.address)
//       newErrors.address = "Residential address is required";
//     if (!formData.photo) newErrors.photo = "Member photo is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleUpload = (file: File, field: string) => {
//     if (file.size > 500 * 1024) {
//       setFileError(`${file.name} is too large. Max 500KB.`);
//       return;
//     }
//     setFormData({ ...formData, [field]: file });
//     setErrors({ ...errors, [field]: "" });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log("Form Submitted Successfully:", formData);
//       alert("Form Submitted Successfully!");
//     } else {
//       setFileError("Please fill all required fields correctly.");
//     }
//   };

//   const SectionHeader = ({ icon: Icon, title, subtitle }: any) => (
//     <div className="mb-8 mt-12 border-b pb-3 border-emerald-500/20">
//       <div className="flex items-center gap-3">
//         <div className="p-2.5 bg-emerald-500 rounded-xl text-white shadow-lg">
//           <Icon size={22} />
//         </div>
//         <h3
//           className={`text-xl font-black uppercase tracking-widest ${isDark ? "text-emerald-400" : "text-emerald-800"}`}
//         >
//           {title}
//         </h3>
//       </div>
//       {subtitle && (
//         <p className="text-[10px] text-red-500 mt-2 font-bold uppercase tracking-tight italic">
//           {subtitle}
//         </p>
//       )}
//     </div>
//   );

//   return (
//     <div
//       className={`min-h-screen py-16 px-4 sm:px-8 ${isDark ? "bg-[#0f172a]" : "bg-[#f8fafc]"}`}
//     >
//       {/* Error Alert Box */}
//       <AnimatePresence>
//         {fileError && (
//           <motion.div
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 20, opacity: 1 }}
//             exit={{ y: -50, opacity: 0 }}
//             className="fixed top-0 left-1/2 -translate-x-1/2 z-[100] bg-red-500 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-bold text-sm"
//           >
//             <XCircle size={20} /> {fileError}
//             <button onClick={() => setFileError(null)} className="ml-4 text-xl">
//               &times;
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className={`max-w-7xl mx-auto rounded-[40px] border shadow-2xl overflow-hidden ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-white"}`}
//       >
//         {/* Banner Section */}
//         <div className="bg-emerald-500 p-10 text-white relative">
//           <div className="relative z-10">
//             <h1 className="text-4xl font-black uppercase tracking-tight">
//               Member Registration
//             </h1>
//             <p className="text-emerald-100 font-bold mt-1 opacity-80 uppercase text-[10px] tracking-[0.2em]">
//               Bhavnagar Association Karachi • Membership 2026
//             </p>
//             <div className="mt-6 flex items-center gap-2 bg-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-md">
//               <AlertCircle size={14} />
//               <p className="text-[11px] font-medium italic">
//                 Fields with <span className="text-red-400 font-bold">*</span>{" "}
//                 are required
//               </p>
//             </div>
//           </div>
//           <UserPlus className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10 w-32 h-32" />
//         </div>

//         <form className="p-8 lg:p-16" onSubmit={handleSubmit}>
//           {/* Section 1: Photos */}
//           <SectionHeader
//             icon={Camera}
//             title="Documents Upload"
//             subtitle="PNG, JPEG or JPG under 500KB"
//           />
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             <FileUploadField
//               label="Member Photo"
//               required
//               file={formData.photo}
//               isDark={isDark}
//               error={errors.photo}
//               onUpload={(f) => handleUpload(f, "photo")}
//               onRemove={() => setFormData({ ...formData, photo: null })}
//             />
//             <FileUploadField
//               label="CNIC Front"
//               required
//               file={formData.cnicFront}
//               isDark={isDark}
//               onUpload={(f) => handleUpload(f, "cnicFront")}
//               onRemove={() => setFormData({ ...formData, cnicFront: null })}
//             />
//             <FileUploadField
//               label="CNIC Back"
//               required
//               file={formData.cnicBack}
//               isDark={isDark}
//               onUpload={(f) => handleUpload(f, "cnicBack")}
//               onRemove={() => setFormData({ ...formData, cnicBack: null })}
//             />
//           </div>

//           {/* Section 2: Personal Info */}
//           <SectionHeader icon={Info} title="Basic Information" />
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
//             <InputField
//               label="Full Name"
//               placeholder="Enter name"
//               required
//               isDark={isDark}
//               error={errors.fullName}
//               value={formData.fullName}
//               onChange={(e) =>
//                 setFormData({ ...formData, fullName: e.target.value })
//               }
//             />
//             <InputField
//               label="CNIC Number"
//               placeholder="42101-XXXXXXX-X"
//               required
//               isDark={isDark}
//               error={errors.cnic}
//               value={formData.cnic}
//               onChange={(e) =>
//                 setFormData({ ...formData, cnic: e.target.value })
//               }
//             />
//             <InputField
//               label="Date of Birth"
//               type="date"
//               required
//               isDark={isDark}
//               error={errors.dob}
//               value={formData.dob}
//               onChange={(e) =>
//                 setFormData({ ...formData, dob: e.target.value })
//               }
//             />
//             <InputField
//               label="Gender"
//               options={["Male", "Female", "Other"]}
//               required
//               isDark={isDark}
//               value={formData.gender}
//               onChange={(e) =>
//                 setFormData({ ...formData, gender: e.target.value })
//               }
//             />
//             <InputField
//               label="Father's/Husband's Name"
//               placeholder="Enter name"
//               required
//               isDark={isDark}
//               error={errors.fatherName}
//               value={formData.fatherName}
//               onChange={(e) =>
//                 setFormData({ ...formData, fatherName: e.target.value })
//               }
//             />
//             <InputField
//               label="Grand Father Name"
//               placeholder="Enter name"
//               isDark={isDark}
//               value={formData.grandFatherName}
//               onChange={(e) =>
//                 setFormData({ ...formData, grandFatherName: e.target.value })
//               }
//             />
//             <InputField
//               label="Surname"
//               options={["Bhavnagri", "Dhoraji", "Other"]}
//               required
//               isDark={isDark}
//               value={formData.surname}
//               onChange={(e) =>
//                 setFormData({ ...formData, surname: e.target.value })
//               }
//             />
//             <InputField
//               label="Mobile Number"
//               placeholder="03XX-XXXXXXX"
//               required
//               isDark={isDark}
//               error={errors.contact}
//               value={formData.contact}
//               onChange={(e) =>
//                 setFormData({ ...formData, contact: e.target.value })
//               }
//             />
//             <InputField
//               label="Email Address"
//               type="email"
//               placeholder="Enter email"
//               isDark={isDark}
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//             />
//             <InputField
//               label="Marital Status"
//               options={["Single", "Married", "Widowed", "Divorced"]}
//               required
//               isDark={isDark}
//               value={formData.maritalStatus}
//               onChange={(e) =>
//                 setFormData({ ...formData, maritalStatus: e.target.value })
//               }
//             />
//             <InputField
//               label="Census Number"
//               placeholder="Enter number"
//               isDark={isDark}
//               value={formData.censusNumber}
//               onChange={(e) =>
//                 setFormData({ ...formData, censusNumber: e.target.value })
//               }
//             />
//           </div>

//           {/* Section 3: Address */}
//           <SectionHeader icon={MapPin} title="Residential Details" />
//           <div className="space-y-6">
//             <div className="flex flex-col gap-2">
//               <label
//                 className={`text-[11px] font-bold uppercase ${isDark ? "text-slate-400" : "text-slate-500"}`}
//               >
//                 Permanent Address{" "}
//                 <span className="text-red-500 font-bold">*</span>
//               </label>
//               <textarea
//                 className={`w-full p-4 rounded-3xl border outline-none min-h-[100px] transition-all ${errors.address ? "border-red-500" : isDark ? "bg-slate-800 border-slate-700 text-white focus:border-emerald-500" : "bg-white border-slate-200 focus:border-emerald-500"}`}
//                 placeholder="Enter complete permanent address"
//                 value={formData.address}
//                 onChange={(e) =>
//                   setFormData({ ...formData, address: e.target.value })
//                 }
//               />
//               {errors.address && (
//                 <p className="text-[10px] text-red-500 font-bold ml-1">
//                   {errors.address}
//                 </p>
//               )}
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//               <InputField
//                 label="Country"
//                 options={["Pakistan", "Other"]}
//                 required
//                 isDark={isDark}
//                 value={formData.country}
//                 onChange={(e) =>
//                   setFormData({ ...formData, country: e.target.value })
//                 }
//               />
//               <InputField
//                 label="State"
//                 placeholder="Enter state"
//                 required
//                 isDark={isDark}
//                 value={formData.state}
//                 onChange={(e) =>
//                   setFormData({ ...formData, state: e.target.value })
//                 }
//               />
//               <InputField
//                 label="City"
//                 placeholder="Enter city"
//                 required
//                 isDark={isDark}
//                 value={formData.city}
//                 onChange={(e) =>
//                   setFormData({ ...formData, city: e.target.value })
//                 }
//               />
//               <InputField
//                 label="Area"
//                 placeholder="Enter area"
//                 required
//                 isDark={isDark}
//                 value={formData.area}
//                 onChange={(e) =>
//                   setFormData({ ...formData, area: e.target.value })
//                 }
//               />
//             </div>
//           </div>

//           {/* Section 4: Reference */}
//           <SectionHeader icon={Users} title="Member Reference" />
//           <div
//             className={`p-8 rounded-[40px] border ${isDark ? "bg-slate-800/40 border-slate-700" : "bg-slate-50 border-slate-100"}`}
//           >
//             <div className="flex flex-wrap gap-8 items-center">
//               <span className="text-xs font-black uppercase text-slate-500 tracking-wider">
//                 Member Reference <span className="text-red-500">*</span> :
//               </span>
//               {["Grand Father", "Father", "Brother", "Husband", "None"].map(
//                 (ref) => (
//                   <label
//                     key={ref}
//                     className="flex items-center gap-3 cursor-pointer group"
//                   >
//                     <input
//                       type="radio"
//                       name="reference"
//                       value={ref}
//                       onChange={(e) =>
//                         setFormData({ ...formData, reference: e.target.value })
//                       }
//                       className="w-5 h-5 accent-emerald-500"
//                     />
//                     <span
//                       className={`text-xs font-bold transition-colors ${isDark ? "text-slate-300 group-hover:text-emerald-400" : "text-slate-600 group-hover:text-emerald-600"}`}
//                     >
//                       {ref}
//                     </span>
//                   </label>
//                 ),
//               )}
//             </div>

//             {/* Alignment Fixed Here */}
//             <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-700">
//               <label className="flex items-center gap-4 cursor-pointer group">
//                 <input
//                   type="checkbox"
//                   checked={formData.declared}
//                   onChange={(e) =>
//                     setFormData({ ...formData, declared: e.target.checked })
//                   }
//                   // Removed mt-1 for perfect center alignment
//                   className="w-5 h-5 accent-emerald-500 rounded-lg flex-shrink-0"
//                 />
//                 <span
//                   className={`text-[11px] font-medium leading-none italic ${isDark ? "text-slate-400" : "text-slate-500"}`}
//                 >
//                   I declare that I belong to{" "}
//                   <span className="text-emerald-500 font-bold">
//                     Dhoraji Memon Community
//                   </span>{" "}
//                   & solemnly affirm that information stated above is correct.
//                 </span>
//               </label>
//             </div>
//           </div>

//           {/* Footer Section */}
//           <div className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-6">
//             <p className="text-[11px] text-slate-400 font-bold uppercase italic tracking-widest">
//               Double check before submitting!
//             </p>
//             <button
//               type="submit"
//               className="w-full sm:w-auto flex items-center justify-center gap-3 px-16 py-5 rounded-[24px] bg-emerald-500 text-white font-black uppercase text-[12px] tracking-[0.2em] shadow-2xl hover:bg-emerald-600 transition-all active:scale-95"
//             >
//               <Save size={20} /> Submit Records
//             </button>
//           </div>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default MemberRegistration;


import React, { useState } from "react";
import {
  User,
  MapPin,
  Save,
  UserPlus,
  AlertCircle,
  XCircle,
  Camera,
  Info,

} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import { InputField, FileUploadField } from "../helperfunctions/helperfunction";

const MemberRegistration: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  const [fileError, setFileError] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState<any>({
    fullName: "",
    cnic: "",
    dob: "",
    gender: "",
    fatherName: "",
    grandFatherName: "",
    surname: "",
    contact: "",
    email: "",
    maritalStatus: "",
    censusNumber: "",
    address: "",
    country: "Pakistan",
    state: "",
    city: "",
    area: "",
    reference: "",
    declared: false,
    photo: null,
    cnicFront: null,
    cnicBack: null,
  });


  const validate = () => {
    let newErrors: any = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.cnic.trim()) newErrors.cnic = "CNIC is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender selection is required";
    if (!formData.fatherName.trim()) newErrors.fatherName = "Father/Husband name is required";
    if (!formData.surname) newErrors.surname = "Surname is required";
    if (!formData.contact.trim()) newErrors.contact = "Contact number is required";
    if (!formData.maritalStatus) newErrors.maritalStatus = "Marital status is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.area.trim()) newErrors.area = "Area is required";
    if (!formData.reference) newErrors.reference = "Please select a reference";
    if (!formData.declared) newErrors.declared = "Please accept the declaration";

    // Required File Fields
    if (!formData.photo) newErrors.photo = "Member photo is required";
    if (!formData.cnicFront) newErrors.cnicFront = "CNIC Front is required";
    if (!formData.cnicBack) newErrors.cnicBack = "CNIC Back is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpload = (file: File, field: string) => {
    if (file.size > 500 * 1024) {
      setFileError(`${file.name} is too large. Max 500KB.`);
      return;
    }
    setFormData({ ...formData, [field]: file });

    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted Successfully:", formData);
      alert("Form Submitted Successfully!");
      setFileError(null);
    } else {
      setFileError("Please fill all required fields correctly.");
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }
  };

  const SectionHeader = ({ icon: Icon, title, subtitle }: any) => (
    <div className="mb-8 mt-12 border-b pb-3 border-emerald-500/20">
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-emerald-500 rounded-xl text-white shadow-lg">
          <Icon size={22} />
        </div>
        <h3 className={`text-xl font-black uppercase tracking-widest ${isDark ? "text-emerald-400" : "text-emerald-800"}`}>
          {title}
        </h3>
      </div>
      {subtitle && (
        <p className="text-[10px] text-red-500 mt-2 font-bold uppercase tracking-tight italic">
          {subtitle}
        </p>
      )}
    </div>
  );

  return (
    <div className={`min-h-screen py-16 px-4 sm:px-8 ${isDark ? "bg-[#0f172a]" : "bg-[#f8fafc]"}`}>
      <AnimatePresence>
        {fileError && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="fixed top-0 left-1/2 -translate-x-1/2 z-[100] bg-red-500 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-bold text-sm"
          >
            <XCircle size={20} /> {fileError}
            <button onClick={() => setFileError(null)} className="ml-4 text-xl">&times;</button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`max-w-7xl mx-auto rounded-[40px] border shadow-2xl overflow-hidden ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-white"}`}
      >
        {/* Banner Section */}
        <div className="bg-emerald-500 p-10 text-white relative">
          <div className="relative z-10">
            <h1 className="text-4xl font-black uppercase tracking-tight">Member Registration</h1>
            <p className="text-emerald-100 font-bold mt-1 opacity-80 uppercase text-[10px] tracking-[0.2em]">
              Bhavnagar Association Karachi • Membership {new Date().getFullYear()}
            </p>
          </div>
           <div className="mt-6 flex items-center gap-2 bg-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-md">
               <AlertCircle size={14} />
              <p className="text-[11px] font-medium italic">
                Fields with <span className="text-red-400 font-bold">*</span>{" "}
                are required
              </p>
            </div>
          <UserPlus className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10 w-32 h-32" />
        </div>

        <form className="p-8 lg:p-16" onSubmit={handleSubmit}>
          {/* Section 1: Photos */}
          <SectionHeader icon={Camera} title="Documents Upload" subtitle="All fields are mandatory" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <FileUploadField
              label="Member Photo"
              required
              file={formData.photo}
              isDark={isDark}
              error={errors.photo}
              onUpload={(f) => handleUpload(f, "photo")}
              onRemove={() => setFormData({ ...formData, photo: null })}
            />
            <FileUploadField
              label="CNIC Front"
              required
              file={formData.cnicFront}
              isDark={isDark}
              error={errors.cnicFront}
              onUpload={(f) => handleUpload(f, "cnicFront")}
              onRemove={() => setFormData({ ...formData, cnicFront: null })}
            />
            <FileUploadField
              label="CNIC Back"
              required
              file={formData.cnicBack}
              isDark={isDark}
              error={errors.cnicBack}
              onUpload={(f) => handleUpload(f, "cnicBack")}
              onRemove={() => setFormData({ ...formData, cnicBack: null })}
            />
          </div>

    
          <SectionHeader icon={Info} title="Basic Information" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            <InputField label="Full Name" placeholder="Enter name" required isDark={isDark} error={errors.fullName} value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
            <InputField label="CNIC Number" placeholder="42101-XXXXXXX-X" required isDark={isDark} error={errors.cnic} value={formData.cnic} onChange={(e) => setFormData({ ...formData, cnic: e.target.value })} />
            <InputField label="Date of Birth" type="date" required isDark={isDark} error={errors.dob} value={formData.dob} onChange={(e) => setFormData({ ...formData, dob: e.target.value })} />
            <InputField label="Gender" options={["Male", "Female", "Other"]} required isDark={isDark} error={errors.gender} value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })} />
            <InputField label="Father's/Husband's Name" placeholder="Enter name" required isDark={isDark} error={errors.fatherName} value={formData.fatherName} onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })} />
            <InputField label="Grand Father Name" placeholder="Enter name" isDark={isDark} value={formData.grandFatherName} onChange={(e) => setFormData({ ...formData, grandFatherName: e.target.value })} />
            <InputField label="Surname" options={["Noorani", "Pirwani", "Bambotia" , "Other"]}  required isDark={isDark} error={errors.surname} value={formData.surname} onChange={(e) => setFormData({ ...formData, surname: e.target.value })} />
            <InputField label="Mobile Number" placeholder="03XX-XXXXXXX" required isDark={isDark} error={errors.contact} value={formData.contact} onChange={(e) => setFormData({ ...formData, contact: e.target.value })} />
            <InputField label="Email Address" type="email" placeholder="Enter email" isDark={isDark} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <InputField label="Marital Status" options={["Single", "Married", "Widowed", "Divorced"]} required isDark={isDark} error={errors.maritalStatus} value={formData.maritalStatus} onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })} />
            <InputField label="Census Number" placeholder="Enter number" isDark={isDark} value={formData.censusNumber} onChange={(e) => setFormData({ ...formData, censusNumber: e.target.value })} />
          </div>

   
          <SectionHeader icon={MapPin} title="Residential Details" />
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className={`text-[11px] font-bold uppercase ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                Permanent Address <span className="text-red-500 font-bold">*</span>
              </label>
              <textarea
                className={`w-full p-4 rounded-3xl border outline-none min-h-[100px] transition-all ${errors.address ? "border-red-500" : isDark ? "bg-slate-800 border-slate-700 text-white focus:border-emerald-500" : "bg-white border-slate-200 focus:border-emerald-500"}`}
                placeholder="Enter complete permanent address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
              {errors.address && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.address}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <InputField label="Country" options={["Pakistan", "Other"]} required isDark={isDark} value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} />
              <InputField label="State" placeholder="Enter state" required isDark={isDark} error={errors.state} value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} />
              <InputField label="City" placeholder="Enter city" required isDark={isDark} error={errors.city} value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
              <InputField label="Area" placeholder="Enter area" required isDark={isDark} error={errors.area} value={formData.area} onChange={(e) => setFormData({ ...formData, area: e.target.value })} />
            </div>
          </div>

          {/* Section 4: Reference */}
         <SectionHeader icon={User} title="Member Reference" />
          <div className={`p-8 rounded-[40px] border ${errors.reference || errors.declared ? "border-red-500" : isDark ? "bg-slate-800/40 border-slate-700" : "bg-slate-50 border-slate-100"}`}>
            <div className="flex flex-wrap gap-8 items-center">
              <span className="text-xs font-black uppercase text-slate-500 tracking-wider">
                Member Reference <span className="text-red-500">*</span> :
              </span>
              {["Grand Father", "Father", "Brother", "Husband", "None"].map((ref) => (
                <label key={ref} className="flex items-center gap-3 cursor-pointer group">
                  <input type="radio" name="reference" value={ref} checked={formData.reference === ref} onChange={(e) => setFormData({ ...formData, reference: e.target.value })} className="w-5 h-5 accent-emerald-500" />
                  <span className={`text-xs font-bold transition-colors ${isDark ? "text-slate-300 group-hover:text-emerald-400" : "text-slate-600 group-hover:text-emerald-600"}`}>{ref}</span>
                </label>
              ))}
            </div>
            {errors.reference && <p className="text-[10px] text-red-500 font-bold mt-2">{errors.reference}</p>}

            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-700">
              <label className="flex items-center gap-4 cursor-pointer group">
                <input type="checkbox" checked={formData.declared} onChange={(e) => setFormData({ ...formData, declared: e.target.checked })} className="w-5 h-5 accent-emerald-500 rounded-lg flex-shrink-0" />
                <span className={`text-[11px] font-medium italic ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  I declare that I belong to <span className="text-emerald-500 font-bold">Bhavnagar Memon Community</span> & solemnly affirm that information stated above is correct.
                </span>
              </label>
              {errors.declared && <p className="text-[10px] text-red-500 font-bold mt-2">{errors.declared}</p>}
            </div>
          </div>

          {/* Footer Section */}
          <div className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-[11px] text-slate-400 font-bold uppercase italic tracking-widest">Double check before submitting!</p>
            <button type="submit" className="w-full sm:w-auto flex items-center justify-center gap-3 px-16 py-5 rounded-[24px] bg-emerald-500 text-white font-black uppercase text-[12px] tracking-[0.2em] shadow-2xl hover:bg-emerald-600 transition-all active:scale-95">
              <Save size={20} /> Submit Records
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default MemberRegistration;