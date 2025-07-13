import { SelectField, Option } from '@admiral-ds/react-ui';

interface Props {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
  allowAll?: boolean;
}

export const SelectFieldBlock = ({ label, value, options, onChange, allowAll }: Props) => (
  <SelectField label={label} value={value} onChange={(e) => onChange(e.target.value)}>
    {allowAll && <Option value="All">Все</Option>}
    {options.map((opt) => (
      <Option key={opt} value={opt}>{opt}</Option>
    ))}
  </SelectField>
);
