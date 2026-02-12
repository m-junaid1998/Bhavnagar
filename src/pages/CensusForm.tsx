// import React, { useState } from "react";
// import {
//   User, MapPin, Briefcase, Save, Plus, Users, Globe, AlertCircle, Trash2, XCircle, Upload as IconUpload
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTheme } from "../hooks/useTheme";
// import { InputField, FileUploadField } from "../helperfunctions/helperfunction";

// interface UploadedFiles {
//   [key: string]: File | null;
// }

// interface FamilyMember {
//   id: number;
//   name: string;
//   relation: string;
//   cnic: string;
// }

// const CensusForm: React.FC = () => {
//   const { mode } = useTheme();
//   const isDark = mode === "dark";

//   const [isLifetime, setIsLifetime] = useState(false);
//   const [fileError, setFileError] = useState<string | null>(null);
//   const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);
//   const [uploadedFiles, setUploadedFiles] = useState<UploadedFiles>({
//     bForm: null,
//     cnicFront: null,
//     cnicBack: null,
//   });

//   const validateAndUpload = (file: File, type: string) => {
//     setFileError(null);
//     const maxSize = 500 * 1024;
//     const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];

//     if (!allowedTypes.includes(file.type)) {
//       setFileError("Only PNG, JPG & JPEG files are allowed.");
//       return;
//     }
//     if (file.size > maxSize) {
//       setFileError(`${file.name} must be less than 500KB.`);
//       return;
//     }
//     setUploadedFiles((prev) => ({ ...prev, [type]: file }));
//   };

//   const addMember = () => {
//     const newMember = { id: Date.now(), name: "", relation: "", cnic: "" };
//     setFamilyMembers([...familyMembers, newMember]);
//   };

//   const removeMember = (id: number) => {
//     setFamilyMembers(familyMembers.filter((m) => m.id !== id));
//   };

//   const SectionHeader = ({ icon: Icon, title, subtitle }: any) => (
//     <div className="mb-8 mt-12 border-b pb-3 border-emerald-500/20">
//       <div className="flex items-center gap-3">
//         <div className="p-2.5 bg-emerald-500 rounded-xl text-white shadow-lg">
//           <Icon size={22} />
//         </div>
//         <h3 className={`text-xl font-black uppercase tracking-widest ${isDark ? "text-emerald-400" : "text-emerald-800"}`}>
//           {title}
//         </h3>
//       </div>
//       {subtitle && (
//         <p className="text-[10px] text-red-500 mt-2 font-bold uppercase tracking-tight">
//           {subtitle}
//         </p>
//       )}
//     </div>
//   );

//   return (
//     <div className={`min-h-screen py-16 px-4 sm:px-8 ${isDark ? "bg-[#0f172a]" : "bg-[#f8fafc]"}`}>
//       <AnimatePresence>
//         {fileError && (
//           <motion.div
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 20, opacity: 1 }}
//             exit={{ y: -50, opacity: 0 }}
//             className="fixed top-0 left-1/2 -translate-x-1/2 z-[100] bg-red-500 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-bold text-sm"
//           >
//             <XCircle size={20} /> {fileError}
//             <button onClick={() => setFileError(null)} className="ml-4 text-xl">&times;</button>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className={`max-w-7xl mx-auto rounded-[40px] border shadow-2xl overflow-hidden ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-white"}`}
//       >

//         <div className="bg-emerald-500 p-10 text-white relative">
//           <div className="relative z-10">
//             <h1 className="text-4xl font-black uppercase tracking-tight">Head of Family</h1>
//             <p className="text-emerald-100 font-bold mt-1 opacity-80 uppercase text-[10px] tracking-[0.2em]">
//               Bhavnagar Association Karachi • Census 2026
//             </p>
//             <div className="mt-6 flex items-center gap-2 bg-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-md">
//               <AlertCircle size={14} />
//               <p className="text-[11px] font-medium italic">Fields with <span className="text-red-400 font-bold">*</span> are required</p>
//             </div>
//           </div>
//           <Users className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10 w-32 h-32" />
//         </div>

//         <form className="p-8 lg:p-16" onSubmit={(e) => e.preventDefault()}>
          
  
//           <SectionHeader icon={Globe} title="Community" />
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <InputField label="Census Form Number" placeholder="For Office Use Only" required isDark={isDark} />
//             <InputField label="Filled By" options={["Self", "Representative"]} required isDark={isDark} />
//           </div>

//           <SectionHeader icon={User} title="Basic Information" />
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
//             <InputField label="Full Name" placeholder="Enter name" required isDark={isDark} />
//             <InputField label="Father's/Husband's Name" placeholder="Enter name" required isDark={isDark} />
//             <InputField label="Grand Father Name" placeholder="Enter name" isDark={isDark} />
//             <InputField label="CNIC Number" placeholder="42101-XXXXXXX-X" required isDark={isDark} />
            
//             <div className="flex flex-col gap-2">
//               <label className={`text-[11px] font-bold uppercase ${isDark ? "text-slate-400" : "text-slate-500"}`}>
//                 CNIC Expiry <span className="text-red-500 font-bold">*</span>
//               </label>
//               <div className="flex items-center gap-3">
//                 <input
//                   type={isLifetime ? "text" : "date"}
//                   value={isLifetime ? "Lifetime" : undefined}
//                   disabled={isLifetime}
//                   readOnly={isLifetime}
//                   className={`flex-1 px-4 py-3 rounded-xl border outline-none text-sm ${isDark ? "bg-slate-800 border-slate-700 text-white" : "bg-white border-slate-200"} ${isLifetime ? "opacity-50" : ""}`}
//                 />
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input type="checkbox" checked={isLifetime} onChange={(e) => setIsLifetime(e.target.checked)} className="w-4 h-4 accent-emerald-500" />
//                   <span className="text-xs font-bold text-slate-500">Lifetime</span>
//                 </label>
//               </div>
//             </div>

//             <InputField label="Membership Number" placeholder="Enter number" required isDark={isDark} />
//             <InputField label="Date of Birth" type="date" required isDark={isDark} />
//             <InputField label="Surname" options={["Bhavnagri", "Dhoraji", "Other"]} required isDark={isDark} />
//             <InputField label="Mobile Number" placeholder="03XX-XXXXXXX" required isDark={isDark} />
//             <InputField label="Email" type="email" placeholder="Enter email" isDark={isDark} />
//             <InputField label="Gender" options={["Male", "Female", "Other"]} required isDark={isDark} />
//             <InputField label="Marital Status" options={["Single", "Married", "Widowed", "Divorced"]} required isDark={isDark} />
//             <InputField label="Disability" options={["None", "Physical", "Visual", "Hearing"]} isDark={isDark} />
//           </div>


//           <SectionHeader icon={MapPin} title="Residential Details" />
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="md:col-span-2">
//               <InputField label="Residential Address" placeholder="Enter address" required isDark={isDark} />
//             </div>
//             <InputField label="Country" options={["Pakistan", "Other"]} required isDark={isDark} />
//             <InputField label="State" options={["Sindh", "Punjab", "KPK", "Balochistan"]} required isDark={isDark} />
//             <InputField label="City" options={["Karachi", "Hyderabad", "Other"]} required isDark={isDark} />
//             <InputField label="Area" options={["Dhoraji", "Bahadurabad", "Gulshan", "Other"]} required isDark={isDark} />
//             <InputField label="Residential Status" options={["Owner", "Rental"]} required isDark={isDark} />
//             <InputField label="Residential Type" options={["House", "Apartment", "Bungalow"]} required isDark={isDark} />
//           </div>

 
//           <SectionHeader icon={Briefcase} title="Professional Details" />
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <InputField label="Academic Qualification" placeholder="Matric, Bachelors etc." isDark={isDark} />
//             <InputField label="Professional Qualification" placeholder="Skills" isDark={isDark} />
//             <InputField label="Occupational Status" options={["Employed", "Business", "Student", "Unemployed"]} required isDark={isDark} />
//             <InputField label="Monthly Income" options={["Below 50k", "50k - 100k", "Above 100k"]} required isDark={isDark} />
//           </div>

//           <SectionHeader icon={Users} title="Family Members" />
//           <div className="space-y-4">
//             <AnimatePresence>
//               {familyMembers.map((member, index) => (
//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, scale: 0.95 }}
//                   key={member.id}
//                   className={`p-6 rounded-[32px] border flex flex-wrap lg:flex-nowrap items-end gap-4 ${isDark ? "bg-slate-800/40 border-slate-700" : "bg-slate-50 border-slate-100"}`}
//                 >
//                   <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs mb-1">{index + 1}</div>
//                   <div className="flex-1 min-w-[200px]"><InputField label="Member Name" placeholder="Full name" isDark={isDark} /></div>
//                   <div className="flex-1 min-w-[150px]"><InputField label="Relation" options={["Wife", "Son", "Daughter", "Brother", "Sister"]} isDark={isDark} /></div>
//                   <div className="flex-1 min-w-[180px]"><InputField label="CNIC / B-Form" placeholder="Number" isDark={isDark} /></div>
//                   <button type="button" onClick={() => removeMember(member.id)} className="p-3 bg-red-100 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all mb-1">
//                     <Trash2 size={20} />
//                   </button>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//             <button type="button" onClick={addMember} className="w-full py-4 border-2 border-dashed border-emerald-500/30 rounded-3xl text-emerald-500 font-bold uppercase text-[10px] tracking-widest hover:bg-emerald-500/5 transition-all flex items-center justify-center gap-2">
//               <Plus size={16} /> Add New Family Member
//             </button>
//           </div>

//           <SectionHeader icon={IconUpload} title="Attachments" subtitle="PNG, JPEG or JPG under 500KB" />
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             <FileUploadField
//               label="B-Form / FRC Form"
//               file={uploadedFiles.bForm}
//               isDark={isDark}
//               required
//               onUpload={(file) => validateAndUpload(file, "bForm")}
//               onRemove={() => setUploadedFiles((p) => ({ ...p, bForm: null }))}
//             />
//             <FileUploadField
//               label="CNIC Front"
//               file={uploadedFiles.cnicFront}
//               isDark={isDark}
//               required
//               onUpload={(file) => validateAndUpload(file, "cnicFront")}
//               onRemove={() => setUploadedFiles((p) => ({ ...p, cnicFront: null }))}
//             />
//             <FileUploadField
//               label="CNIC Back"
//               file={uploadedFiles.cnicBack}
//               isDark={isDark}
//               required
//               onUpload={(file) => validateAndUpload(file, "cnicBack")}
//               onRemove={() => setUploadedFiles((p) => ({ ...p, cnicBack: null }))}
//             />
//           </div>

//           {/* Footer Section */}
//           <div className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-6">
//             <p className="text-[11px] text-slate-400 font-bold uppercase italic">Please review everything before submitting!</p>
//             <button type="submit" className="w-full sm:w-auto flex items-center justify-center gap-2 px-12 py-4 rounded-2xl bg-emerald-500 text-white font-black uppercase text-[11px] tracking-[0.2em] shadow-2xl hover:bg-emerald-600 transition-all active:scale-95">
//               <Save size={20} /> Submit Records
//             </button>
//           </div>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default CensusForm;

import React, { useState } from "react";
import {
  User, MapPin, Briefcase, Save, Plus, Users, Globe, AlertCircle, Trash2, XCircle, Upload as IconUpload
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import { InputField, FileUploadField } from "../helperfunctions/helperfunction";

interface FamilyMember {
  id: number;
  name: string;
  relation: string;
  cnic: string;
}

const CensusForm: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  // States
  const [isLifetime, setIsLifetime] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);
  const [formData, setFormData] = useState<any>({
    censusNumber: "",
    filledBy: "",
    fullName: "",
    fatherName: "",
    grandFatherName: "",
    cnic: "",
    cnicExpiry: "",
    membershipNo: "",
    dob: "",
    surname: "",
    contact: "",
    email: "",
    gender: "",
    maritalStatus: "",
    disability: "None",
    address: "",
    country: "Pakistan",
    state: "Sindh",
    city: "Karachi",
    area: "",
    residentialStatus: "",
    residentialType: "",
    academic: "",
    professional: "",
    occupationalStatus: "",
    monthlyIncome: "",
    bForm: null,
    cnicFront: null,
    cnicBack: null,
  });

  const validate = () => {
    let newErrors: any = {};

    // Basic & Community
    if (!formData.censusNumber) newErrors.censusNumber = "Required";
    if (!formData.filledBy) newErrors.filledBy = "Select one";
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.fatherName) newErrors.fatherName = "Father's name is required";
    if (!formData.cnic) newErrors.cnic = "CNIC is required";
    if (!isLifetime && !formData.cnicExpiry) newErrors.cnicExpiry = "Expiry date required";
    if (!formData.membershipNo) newErrors.membershipNo = "Membership No. required";
    if (!formData.dob) newErrors.dob = "DOB is required";
    if (!formData.surname) newErrors.surname = "Required";
    if (!formData.contact) newErrors.contact = "Contact is required";
    if (!formData.gender) newErrors.gender = "Required";
    if (!formData.maritalStatus) newErrors.maritalStatus = "Required";

    // Residential
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.area) newErrors.area = "Area is required";
    if (!formData.residentialStatus) newErrors.residentialStatus = "Required";
    if (!formData.residentialType) newErrors.residentialType = "Required";

    // Professional
    if (!formData.occupationalStatus) newErrors.occupationalStatus = "Required";
    if (!formData.monthlyIncome) newErrors.monthlyIncome = "Required";

    // Attachments
    if (!formData.bForm) newErrors.bForm = "B-Form is required";
    if (!formData.cnicFront) newErrors.cnicFront = "CNIC Front is required";
    if (!formData.cnicBack) newErrors.cnicBack = "CNIC Back is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpload = (file: File, field: string) => {
    setFileError(null);
    if (file.size > 500 * 1024) {
      setFileError(`${file.name} is too large (Max 500KB)`);
      return;
    }
    setFormData({ ...formData, [field]: file });
    setErrors(prev => ({ ...prev, [field]: "" }));
  };

  const addMember = () => {
    setFamilyMembers([...familyMembers, { id: Date.now(), name: "", relation: "", cnic: "" }]);
  };

  const removeMember = (id: number) => {
    setFamilyMembers(familyMembers.filter((m) => m.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", formData);
      console.log("Family Members:", familyMembers);
      alert("Census Form Submitted Successfully!");
    } else {
      setFileError("Please fill all mandatory fields.");
      window.scrollTo({ top: 0, behavior: "smooth" });
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
      {subtitle && <p className="text-[10px] text-red-500 mt-2 font-bold uppercase italic">{subtitle}</p>}
    </div>
  );

  return (
    <div className={`min-h-screen py-16 px-4 sm:px-8 ${isDark ? "bg-[#0f172a]" : "bg-[#f8fafc]"}`}>
      <AnimatePresence>
        {fileError && (
          <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 20, opacity: 1 }} exit={{ y: -50, opacity: 0 }}
            className="fixed top-0 left-1/2 -translate-x-1/2 z-[100] bg-red-500 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-bold text-sm"
          >
            <XCircle size={20} /> {fileError}
            <button onClick={() => setFileError(null)} className="ml-4 text-xl">&times;</button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className={`max-w-7xl mx-auto rounded-[40px] border shadow-2xl overflow-hidden ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-white"}`}
      >
        <div className="bg-emerald-500 p-10 text-white relative">
          <div className="relative z-10">
            <h1 className="text-4xl font-black uppercase tracking-tight">Census Form</h1>
            <p className="text-emerald-100 font-bold mt-1 opacity-80 uppercase text-[10px] tracking-[0.2em]">Bhavnagar Association Karachi • 2026</p>
          </div>
          <Users className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10 w-32 h-32" />
        </div>

        <form className="p-8 lg:p-16" onSubmit={handleSubmit}>
          
          <SectionHeader icon={Globe} title="Community Details" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InputField label="Census Form Number" required isDark={isDark} error={errors.censusNumber} value={formData.censusNumber} onChange={(e) => setFormData({...formData, censusNumber: e.target.value})} />
            <InputField label="Filled By" options={["Self", "Representative"]} required isDark={isDark} error={errors.filledBy} value={formData.filledBy} onChange={(e) => setFormData({...formData, filledBy: e.target.value})} />
          </div>

          <SectionHeader icon={User} title="Head of Family Information" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            <InputField label="Full Name" required isDark={isDark} error={errors.fullName} value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
            <InputField label="Father's/Husband's Name" required isDark={isDark} error={errors.fatherName} value={formData.fatherName} onChange={(e) => setFormData({...formData, fatherName: e.target.value})} />
            <InputField label="Grand Father Name" isDark={isDark} value={formData.grandFatherName} onChange={(e) => setFormData({...formData, grandFatherName: e.target.value})} />
            <InputField label="CNIC Number" required isDark={isDark} error={errors.cnic} value={formData.cnic} onChange={(e) => setFormData({...formData, cnic: e.target.value})} />
            
            <div className="flex flex-col gap-2">
              <label className={`text-[11px] font-bold uppercase ${isDark ? "text-slate-400" : "text-slate-500"}`}>CNIC Expiry <span className="text-red-500">*</span></label>
              <div className="flex items-center gap-3">
                <input type={isLifetime ? "text" : "date"} value={isLifetime ? "Lifetime" : formData.cnicExpiry} disabled={isLifetime} onChange={(e) => setFormData({...formData, cnicExpiry: e.target.value})}
                  className={`flex-1 px-4 py-3 rounded-xl border outline-none text-sm transition-all ${errors.cnicExpiry ? "border-red-500" : isDark ? "bg-slate-800 border-slate-700 text-white" : "bg-white border-slate-200"}`}
                />
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={isLifetime} onChange={(e) => setIsLifetime(e.target.checked)} className="w-4 h-4 accent-emerald-500" /><span className="text-xs font-bold text-slate-500">Lifetime</span></label>
              </div>
              {errors.cnicExpiry && !isLifetime && <p className="text-[10px] text-red-500 font-bold">{errors.cnicExpiry}</p>}
            </div>

            <InputField label="Membership Number" required isDark={isDark} error={errors.membershipNo} value={formData.membershipNo} onChange={(e) => setFormData({...formData, membershipNo: e.target.value})} />
            <InputField label="Date of Birth" type="date" required isDark={isDark} error={errors.dob} value={formData.dob} onChange={(e) => setFormData({...formData, dob: e.target.value})} />
            <InputField label="Surname" options={["Bhavnagri", "Dhoraji", "Other"]} required isDark={isDark} error={errors.surname} value={formData.surname} onChange={(e) => setFormData({...formData, surname: e.target.value})} />
            <InputField label="Mobile Number" required isDark={isDark} error={errors.contact} value={formData.contact} onChange={(e) => setFormData({...formData, contact: e.target.value})} />
            <InputField label="Email" type="email" isDark={isDark} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            <InputField label="Gender" options={["Male", "Female", "Other"]} required isDark={isDark} error={errors.gender} value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})} />
            <InputField label="Marital Status" options={["Single", "Married", "Widowed", "Divorced"]} required isDark={isDark} error={errors.maritalStatus} value={formData.maritalStatus} onChange={(e) => setFormData({...formData, maritalStatus: e.target.value})} />
            <InputField label="Disability" options={["None", "Physical", "Visual", "Hearing"]} isDark={isDark} value={formData.disability} onChange={(e) => setFormData({...formData, disability: e.target.value})} />
          </div>

          <SectionHeader icon={MapPin} title="Residential Details" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <InputField label="Residential Address" required isDark={isDark} error={errors.address} value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
            </div>
            <InputField label="Country" options={["Pakistan", "Other"]} required isDark={isDark} value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})} />
            <InputField label="State" options={["Sindh", "Punjab", "KPK", "Balochistan"]} required isDark={isDark} value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})} />
            <InputField label="City" options={["Karachi", "Hyderabad", "Other"]} required isDark={isDark} value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} />
            <InputField label="Area" options={["Dhoraji", "Bahadurabad", "Gulshan", "Other"]} required isDark={isDark} error={errors.area} value={formData.area} onChange={(e) => setFormData({...formData, area: e.target.value})} />
            <InputField label="Residential Status" options={["Owner", "Rental"]} required isDark={isDark} error={errors.residentialStatus} value={formData.residentialStatus} onChange={(e) => setFormData({...formData, residentialStatus: e.target.value})} />
            <InputField label="Residential Type" options={["House", "Apartment", "Bungalow"]} required isDark={isDark} error={errors.residentialType} value={formData.residentialType} onChange={(e) => setFormData({...formData, residentialType: e.target.value})} />
          </div>

          <SectionHeader icon={Briefcase} title="Professional Details" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InputField label="Academic Qualification" isDark={isDark} value={formData.academic} onChange={(e) => setFormData({...formData, academic: e.target.value})} />
            <InputField label="Professional Qualification" isDark={isDark} value={formData.professional} onChange={(e) => setFormData({...formData, professional: e.target.value})} />
            <InputField label="Occupational Status" options={["Employed", "Business", "Student", "Unemployed"]} required isDark={isDark} error={errors.occupationalStatus} value={formData.occupationalStatus} onChange={(e) => setFormData({...formData, occupationalStatus: e.target.value})} />
            <InputField label="Monthly Income" options={["Below 50k", "50k - 100k", "Above 100k"]} required isDark={isDark} error={errors.monthlyIncome} value={formData.monthlyIncome} onChange={(e) => setFormData({...formData, monthlyIncome: e.target.value})} />
          </div>

          <SectionHeader icon={Users} title="Family Members" />
          <div className="space-y-4">
            {familyMembers.map((member, index) => (
              <div key={member.id} className={`p-6 rounded-[32px] border flex flex-wrap lg:flex-nowrap items-end gap-4 ${isDark ? "bg-slate-800/40 border-slate-700 text-white" : "bg-slate-50 border-slate-100"}`}>
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs mb-1">{index + 1}</div>
                <div className="flex-1 min-w-[200px]"><InputField label="Member Name" isDark={isDark} /></div>
                <div className="flex-1 min-w-[150px]"><InputField label="Relation" options={["Wife", "Son", "Daughter", "Brother", "Sister"]} isDark={isDark} /></div>
                <div className="flex-1 min-w-[180px]"><InputField label="CNIC / B-Form" isDark={isDark} /></div>
                <button type="button" onClick={() => removeMember(member.id)} className="p-3 bg-red-100 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all mb-1"><Trash2 size={20} /></button>
              </div>
            ))}
            <button type="button" onClick={addMember} className="w-full py-4 border-2 border-dashed border-emerald-500/30 rounded-3xl text-emerald-500 font-bold uppercase text-[10px] tracking-widest hover:bg-emerald-500/5 transition-all flex items-center justify-center gap-2"><Plus size={16} /> Add New Family Member</button>
          </div>

          <SectionHeader icon={IconUpload} title="Attachments" subtitle="All documents are required" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <FileUploadField label="B-Form / FRC Form" file={formData.bForm} isDark={isDark} required error={errors.bForm} onUpload={(f) => handleUpload(f, "bForm")} onRemove={() => setFormData({...formData, bForm: null})} />
            <FileUploadField label="CNIC Front" file={formData.cnicFront} isDark={isDark} required error={errors.cnicFront} onUpload={(f) => handleUpload(f, "cnicFront")} onRemove={() => setFormData({...formData, cnicFront: null})} />
            <FileUploadField label="CNIC Back" file={formData.cnicBack} isDark={isDark} required error={errors.cnicBack} onUpload={(f) => handleUpload(f, "cnicBack")} onRemove={() => setFormData({...formData, cnicBack: null})} />
          </div>

          <div className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-[11px] text-slate-400 font-bold uppercase italic">Double check family member details before submitting!</p>
            <button type="submit" className="w-full sm:w-auto flex items-center justify-center gap-2 px-12 py-4 rounded-2xl bg-emerald-500 text-white font-black uppercase text-[11px] tracking-[0.2em] shadow-2xl hover:bg-emerald-600 transition-all active:scale-95">
              <Save size={20} /> Submit Records
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default CensusForm;