import FounderBiography from "./FounderBiography";
import { FounderSectionData } from "@/types/founder";

interface FounderSectionProps {
  data?: FounderSectionData;
  useBiography?: boolean;
}

export default async function FounderSection({
  data,
  useBiography = false,
}: FounderSectionProps) {
  return <FounderBiography data={data} useBiography={useBiography} />;
}

export { FounderBiography };
