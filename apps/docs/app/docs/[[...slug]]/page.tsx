import type {Metadata} from "next";

import {notFound} from "next/navigation";
import {allDocs} from "contentlayer/generated";

import {MDXContent} from "@/components/mdx-content";
import {siteConfig} from "@/config/site";
import {DocsPager, DocsToc} from "@/components/docs";
import {Route} from "@/libs/docs/page";
import {getHeadings} from "@/libs/docs/utils";

interface DocPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams({params}: DocPageProps) {
  const slug = params.slug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    null;
  }

  const headings = getHeadings(doc?.body.raw);

  const currentRoute: Route = {
    key: doc?._id,
    title: doc?.title,
    path: `/${doc?._raw?.sourceFilePath}`,
  };

  return {doc, headings, currentRoute};
}

export async function generateMetadata({params}: DocPageProps): Promise<Metadata> {
  const {doc} = await getDocFromParams({params});

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: doc.url,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [siteConfig.ogImage],
      creator: siteConfig.creator,
    },
  };
}

export async function generateStaticParams(): Promise<DocPageProps["params"][]> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

export default async function DocPage({params}: DocPageProps) {
  const {doc, headings, currentRoute} = await getDocFromParams({params});

  if (!doc) {
    notFound();
  }

  return (
    <>
      <div className="col-span-12 lg:col-span-10 xl:col-span-8 lg:px-16 mt-10">
        <div className="w-full prose prose-neutral">
          <MDXContent code={doc.body.code} />
        </div>
        {currentRoute && <DocsPager currentRoute={currentRoute} />}
      </div>
      {headings && headings.length > 0 && (
        <div className="hidden z-10 xl:flex xl:col-span-2 mt-8 pl-4">
          <DocsToc headings={headings} />
        </div>
      )}
    </>
  );
}
