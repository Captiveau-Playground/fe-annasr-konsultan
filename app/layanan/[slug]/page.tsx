import type { Metadata } from "next";
import ServiceDetailComponent from "@/components/layanan/ServiceDetailComponent";
import { fetchServiceDetailBySlug } from "@/lib/api/services";

export const dynamic = "force-dynamic";

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchServiceDetailBySlug(slug);
  return {
    title: `${data.title} — CV. AN NASR KONSULTAN`,
    description: data.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const data = await fetchServiceDetailBySlug(slug);

  return <ServiceDetailComponent data={data} />;
}
