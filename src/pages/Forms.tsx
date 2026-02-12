import React from 'react';
import { FileText, Eye, Download } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

// Interface for TypeScript to avoid errors
interface FormItem {
  id: number;
  title: string;
  fileName: string;
}

const Forms: React.FC = () => {
  const { mode } = useTheme();
  const isDark = mode === 'dark';

  const formList: FormItem[] = [
    { id: 1, title: "72AGM Agenda & Minutes", fileName: "72agm_Agenda_&_Meeting_Minutes.pdf" },
    { id: 2, title: "Audited Accounts 2024", fileName: "Audited_Accounts_2024.pdf" },
    { id: 3, title: "Business Form", fileName: "Business_Form.pdf" },
    { id: 4, title: "Census Form", fileName: "Census_Form.pdf" },
    { id: 5, title: "Death Certificate Form", fileName: "Death_Certificate_Form.pdf" },
    { id: 6, title: "Higher Education Form", fileName: "Higher_Education_Form.pdf" },
    { id: 7, title: "Marriage Help Form", fileName: "Marriage_Help_Form.pdf" },
    { id: 8, title: "Membership Card Form", fileName: "Membership_card_Form.pdf" },
    { id: 9, title: "Microfinance Form", fileName: "Microfinance_Form.pdf" },
    { id: 10, title: "Monthly Help Form", fileName: "Monthly_Help_Form.pdf" },
    { id: 11, title: "Motorcycle Form", fileName: "Motorcycle_Form.pdf" },
    { id: 12, title: "Nikah NOC Form", fileName: "Nikah_NOC_Form.pdf" },
    { id: 13, title: "Primary & Secondary Education", fileName: "Primary_and_Secondary_Form_of_Education.pdf" }
  ];

  const handleAction = (fileName: string, isDownload: boolean): void => {
    const filePath = `/forms/${fileName}`;
    if (isDownload) {
      const link = document.createElement('a');
      link.href = filePath;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(filePath, '_blank');
    }
  };

  return (
    <section className={`py-16 px-6 transition-colors duration-300 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Forms & Documents
          </h2>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formList.map((form) => (
            <div key={form.id} className={`p-6 rounded-2xl border transition-all duration-300 ${isDark ? 'bg-slate-800/50 border-slate-700 shadow-xl' : 'bg-slate-50 border-emerald-100 shadow-sm hover:border-emerald-400'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${isDark ? 'bg-slate-900' : 'bg-white shadow-sm'}`}>
                    <FileText className="text-emerald-500 w-6 h-6" />
                  </div>
                  <h3 className={`font-bold text-lg ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>{form.title}</h3>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleAction(form.fileName, false)} 
                    className={`p-2.5 rounded-lg border transition-colors ${isDark ? 'bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600' : 'bg-white border-slate-200 text-slate-600 hover:bg-emerald-50'}`}
                  >
                    <Eye size={20} />
                  </button>
                  <button 
                    onClick={() => handleAction(form.fileName, true)} 
                    className="p-2.5 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-transform active:scale-90"
                  >
                    <Download size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Forms;