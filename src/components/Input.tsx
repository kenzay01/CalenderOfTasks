export default function Input({
  placeholder,
  text,
  onChangeText,
  type,
  autoFocus,
  maxLength,
}: {
  placeholder: string;
  text: string;
  onChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  autoFocus?: boolean;
  maxLength?: number;
}) {
  return (
    <input
      value={text}
      onChange={onChangeText}
      placeholder={placeholder}
      type={type}
      autoFocus={autoFocus}
      maxLength={maxLength}
    />
  );
}
