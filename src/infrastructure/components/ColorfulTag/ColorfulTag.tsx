import colorGenerator from "@/utils/colorGenerator";

type Props = {
  value: string;
  monochrome?: boolean;
};


export default function ColorfulTag({ value, monochrome }: Props) {
   const { text, border, background} =  monochrome
     ? { text: 'white', background: 'transparent', border: 'white'}
     : colorGenerator(value);

  return (
    <div
      style={{ backgroundColor: background, borderColor: border, color: text }}
      className="px-2.5 py-0.5 text-white rounded-2xl border font-medium text-sm"
    >
      {value}
    </div>
  );
}
