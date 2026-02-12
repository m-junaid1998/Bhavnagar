import React, { useState } from "react";
import { Save, AlertCircle, Image as ImageIcon, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import { InputField, FileUploadField } from "../helperfunctions/helperfunction";

const RequestDuplicateCard: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === "dark";

  // States
  const [formData, setFormData] = useState<any>({
    memberId: "",
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

  const handleUpload = (file: File, field: string) => {
    if (file.size > 500 * 1024) return; // Basic size check
    setFormData({ ...formData, [field]: file });
  };

  return (
    <div className={`min-h-screen py-12 px-4 ${isDark ? "bg-slate-950" : "bg-slate-50"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`max-w-6xl mx-auto rounded-3xl shadow-sm border overflow-hidden ${
          isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100"
        }`}
      >
        {/* Header Section */}
        <div className="p-8 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <CreditCard className="text-emerald-500" size={28} />
            <h1 className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
              Request Duplicate Card
            </h1>
          </div>
          <p className="text-sm text-slate-400 mt-2">
            Fields marked with <span className="text-red-500 font-bold">*</span> are required
          </p>
        </div>

        <form className="p-8 space-y-10" onSubmit={(e) => e.preventDefault()}>
          
          {/* Important Notice */}
          <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl flex items-center gap-3">
            <AlertCircle size={18} className="text-orange-500 flex-shrink-0" />
            <p className="text-[11px] font-bold text-orange-700 uppercase tracking-tight leading-relaxed">
              Please collect your <span className="underline decoration-2">card after 7 days</span> of submission. 
              The fee for a duplicate card is <span className="text-orange-900 text-xs font-black px-1 bg-orange-200/50 rounded">Rs. 200</span>.
            </p>
          </div>

          {/* Member Basic Info Section */}
          <section>
            <div className="mb-6 flex items-center gap-2 text-emerald-600">
              <ImageIcon size={18} />
              <h2 className="text-sm font-black uppercase tracking-wider">Member Basic Information</h2>
            </div>
            
            <div className="mb-10 max-w-sm">
               <InputField 
                 label="Member ID" 
                 placeholder="Enter the member id" 
                 required 
                 isDark={isDark} 
                 value={formData.memberId} 
                 onChange={(e) => setFormData({...formData, memberId: e.target.value})} 
               />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <FileUploadField label="Choose A Photo" required file={formData.photo} isDark={isDark} onUpload={(f) => handleUpload(f, "photo")} onRemove={() => setFormData({...formData, photo: null})} />
              <FileUploadField label="Choose Front Photo Of Your CNIC" required file={formData.cnicFront} isDark={isDark} onUpload={(f) => handleUpload(f, "cnicFront")} onRemove={() => setFormData({...formData, cnicFront: null})} />
              <FileUploadField label="Choose Back Photo Of Your CNIC" required file={formData.cnicBack} isDark={isDark} onUpload={(f) => handleUpload(f, "cnicBack")} onRemove={() => setFormData({...formData, cnicBack: null})} />
            </div>
          </section>

          {/* Personal Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            <InputField label="Full Name" placeholder="Enter the full name" required isDark={isDark} value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
            <InputField label="CNIC Number" placeholder="Enter the cnic" required isDark={isDark} value={formData.cnic} onChange={(e) => setFormData({...formData, cnic: e.target.value})} />
            <InputField label="Date of Birth" type="date" required isDark={isDark} value={formData.dob} onChange={(e) => setFormData({...formData, dob: e.target.value})} />
            <InputField label="Gender" options={["Male", "Female", "Other"]} required isDark={isDark} value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})} />
            <InputField label="Father's Name" placeholder="Enter the name" required isDark={isDark} value={formData.fatherName} onChange={(e) => setFormData({...formData, fatherName: e.target.value})} />
            <InputField label="Grand Father's Name" placeholder="Enter the name" isDark={isDark} value={formData.grandFatherName} onChange={(e) => setFormData({...formData, grandFatherName: e.target.value})} />
            <InputField label="Surname" options={["Bhavnagri", "Dhoraji", "Other"]} required isDark={isDark} value={formData.surname} onChange={(e) => setFormData({...formData, surname: e.target.value})} />
            <InputField label="Contact Number" placeholder="Enter the Number" required isDark={isDark} value={formData.contact} onChange={(e) => setFormData({...formData, contact: e.target.value})} />
            <InputField label="Email Address" placeholder="Enter the email" isDark={isDark} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            <InputField label="Marital Status" options={["Single", "Married", "Widowed", "Divorced"]} required isDark={isDark} value={formData.maritalStatus} onChange={(e) => setFormData({...formData, maritalStatus: e.target.value})} />
            <InputField label="Census Number" placeholder="Enter the census number" isDark={isDark} value={formData.censusNumber} onChange={(e) => setFormData({...formData, censusNumber: e.target.value})} />
          </div>

          {/* Residential Section */}
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className={`text-[11px] font-bold uppercase ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                Permanent Residential Address <span className="text-red-500 font-bold">*</span>
              </label>
              <textarea 
                className={`w-full p-4 rounded-xl border outline-none min-h-[100px] text-sm transition-all ${isDark ? "bg-slate-800 border-slate-700 text-white focus:border-emerald-500" : "bg-white border-slate-200 focus:border-emerald-500 shadow-sm"}`}
                placeholder="Enter the permanent residential address"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <InputField label="Country" options={["Pakistan"]} required isDark={isDark} value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})} />
              <InputField label="State" placeholder="Enter state" required isDark={isDark} value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})} />
              <InputField label="City" placeholder="Enter city" required isDark={isDark} value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} />
              <InputField label="Area" placeholder="Enter area" required isDark={isDark} value={formData.area} onChange={(e) => setFormData({...formData, area: e.target.value})} />
            </div>
          </div>

          {/* Reference & Declaration Box */}
          <div className={`mt-16 p-8 rounded-3xl border ${isDark ? "bg-slate-800/40 border-slate-700" : "bg-slate-50 border-slate-100"}`}>
            <h3 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-6">Member Reference</h3>
            
            <div className="flex flex-wrap gap-8 items-center mb-8">
              <span className="text-xs font-bold text-slate-500">Member Reference <span className="text-red-500">*</span> :</span>
              {["Grand Father", "Father", "Brother", "Husband", "None"].map((ref) => (
                <label key={ref} className="flex items-center gap-2 cursor-pointer group">
                  <input type="radio" name="reference" className="w-4 h-4 accent-emerald-500" />
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300">{ref}</span>
                </label>
              ))}
            </div>

            <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
              <label className="flex items-center gap-4 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 accent-emerald-500 rounded flex-shrink-0" 
                  checked={formData.declared}
                  onChange={(e) => setFormData({...formData, declared: e.target.checked})}
                />
                <span className={`text-[11px] font-medium leading-none italic ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  I declare that I belong to <span className="text-emerald-500 font-bold">Dhoraji Memon Community</span> & solemnly affirm that information stated above is correct.
                </span>
              </label>
            </div>
          </div>

          {/* Footer Action */}
          <div className="flex justify-end pt-6">
            <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-12 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 active:scale-95">
              Submit Request <Save size={18} />
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default RequestDuplicateCard;