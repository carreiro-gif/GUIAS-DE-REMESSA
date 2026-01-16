import React, { useState } from "react";

interface ConfigManagerProps {
  currentNextSequence: number;
  onSave: (value: number) => void;
}

export const ConfigManager: React.FC<ConfigManagerProps> = ({
  currentNextSequence,
  onSave,
}) => {
  const [value, setValue] = useState<number>(currentNextSequence);

  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-md">
      <h3 className="text-lg font-bold mb-4 text-slate-800">
        Configuração de Numeração
      </h3>

      <label className="block text-sm font-medium text-slate-600 mb-2">
        Próxima sequência mínima
      </label>

      <input
        type="number"
        min={1}
        className="w-full border border-slate-300 rounded px-3 py-2 mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />

      <button
        onClick={() => onSave(value)}
        className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition"
      >
        Salvar Numeração
      </button>
    </div>
  );
};
