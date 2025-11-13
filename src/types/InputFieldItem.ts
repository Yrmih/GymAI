export type InputFieldItem = {
  placeholder: string;
  value: string;
  setValue: (val: string) => void;
  keyboardType?: 
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  secureTextEntry?: boolean;
};