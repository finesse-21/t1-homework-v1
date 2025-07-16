import { SelectField, Option } from '@admiral-ds/react-ui';

/**
 * Пропсы для компонента SelectFieldBlock.
 * @property label - Подпись для поля выбора.
 * @property value - Текущее выбранное значение.
 * @property options - Список опций для выбора.
 * @property onChange - Колбэк при изменении значения.
 * @property allowAll - Если true, добавляет опцию "Все".
 */
interface Props {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
  allowAll?: boolean;
}

/**
 * Универсальный компонент выпадающего списка с подписью.
 * Используется для выбора значения из списка с возможностью добавить опцию "Все".
 */
export const SelectFieldBlock = ({ label, value, options, onChange, allowAll }: Props) => (
  <SelectField
    label={label}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{ width: 150 }}
  >
    {allowAll && <Option value="All">Все</Option>}
    {options.map((opt) => (
      <Option key={opt} value={opt}>
        {opt}
      </Option>
    ))}
  </SelectField>
);
