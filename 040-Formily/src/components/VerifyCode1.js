export const VerifyCode1 = ({ value, onChange, readyPost, phoneNumber, ...props }) => {
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
      />
    </div>
  );
}