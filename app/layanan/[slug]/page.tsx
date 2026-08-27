import type { Metadata } from "next";
import ServiceDetailComponent from "@/components/layanan/ServiceDetailComponent";
import { fetchServiceDetailBySlug } from "@/lib/api/services";

import { constructMetadata, LOCAL_BUSINESS_JSON_LD } from "@/lib/seo";

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
  return constructMetadata({
    seo: data?.seo,
    fallbackTitle: `${data.title} — CV. AN NASR KONSULTAN`,
    fallbackDescription: data.shortDescription,
    path: `/layanan/${slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const data = await fetchServiceDetailBySlug(slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
      />
      <ServiceDetailComponent data={data} />
    </>
  );
}
