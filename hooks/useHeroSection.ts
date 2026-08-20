import { useQuery } from "@tanstack/react-query";
import { fetchHeroSectionData } from "@/lib/api/hero";
import { HeroSectionData } from "@/types/hero";

export function useHeroSection() {
  return useQuery<HeroSectionData, Error>({
    queryKey: ["heroSection"],
    queryFn: fetchHeroSectionData,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
