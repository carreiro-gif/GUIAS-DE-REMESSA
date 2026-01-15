import React, { useState } from "react";

export type AppConfig = {
  showPrices: boolean;
  enableReplication: boolean;
  allowEditing: boolean;
};

const defaultConfig: AppConfig = {
  showPrices: true,
  enableReplication: true,
  allowEditing: true,
};

interface ConfigManagerProps {
  config?: AppConfig;
  onChange?: (config: AppConfig) => void;
}

export const ConfigManager: React.FC<ConfigManagerProps> = ({
  config = defaultConfig,
  onChange,
}) => {
  const [localConfig, setLocalConfig] = useState<AppConfig>(config);

  const updateConfig = (key: keyof AppConfig) => {
    const updatedConfig = {
      ...localConfig,
      [key]: !localConfig[key],
    };

    setLocalConfig(updatedConfig);

    if (onChange) {
      onChange(updatedConfig);
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
      }}
    >
      <h3 style={{ marginBottom: 12 }}>Configurações do Sistema</h3>

      <label style={{ display: "block", marginBottom: 8 }}>
        <input
          type="checkbox"
          checked={localConfig.showPrices}
          onChange={() => updateConfig("showPrices")}
        />{" "}
        Exibir preços
      </label>

      <label style={{ display: "block", marginBottom: 8 }}>
        <input
          type="checkbox"
          checked={localConfig.enableReplication}
          onChange={() => updateConfig("enableReplication")}
        />{" "}
        Permitir replicação
      </label>

      <label style={{ display: "block", marginBottom: 8 }}>
        <input
          type="checkbox"
          checked={localConfig.allowEditing}
          onChange={() => updateConfig("allowEditing")}
        />{" "}
        Permitir edição
      </label>
    </div>
  );
};
