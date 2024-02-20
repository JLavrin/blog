import colorGenerator from "@/utils/colorGenerator";

type Props = {
  value: string;
};


export default function ColorfulTag({ value }: Props) {
   const { text, border, background} = colorGenerator(value);

  return (
    <div
      style={{ backgroundColor: background, borderColor: border, color: text }}
      className="px-2.5 py-0.5 text-white rounded-2xl border font-medium text-sm"
    >
      {value}
    </div>
  );
}
