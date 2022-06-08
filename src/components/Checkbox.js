export default function Checkbox({className, label, id}) {
  return (
    <label className={className} for={id}>
      <input type="checkbox" id={id} required/>
      <span> {label}</span>
    </label>
  );
}
