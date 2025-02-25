import { RefObject, TextareaHTMLAttributes } from "react";
import styles from "./Textarea.module.scss";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  textareaRef?: RefObject<HTMLTextAreaElement>;
}

const Textarea = ({ textareaRef, ...props }: TextAreaProps) => {
  return (
    <label className={styles.textarea}>
      <textarea ref={textareaRef} {...props} />
    </label>
  );
};

export default Textarea;
