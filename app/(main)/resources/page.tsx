'use client'

import resources from "@/mock-data/resources-sites.json";
import Image from "next/image";
import "./resources.module.css";
import { Fragment, useState } from "react";
import Link from "next/link";
import { IoArrowRedo } from "react-icons/io5";


const resourceData = resources.resources;
const PAGINATION_LIMIT = 10;

interface ResourceIcon { provider?: string, iconName: string, url?: string, iconUrl?: string | null };

function getResourceIcon(resource: ResourceIcon): string {
    const { provider = "devicon", iconName, url, iconUrl } = resource;
    console.log(resource)

    if (iconUrl) return iconUrl;

    if (provider == "devicon" && iconName) {
        return `https://devicons.io/devicons/icons/${encodeURIComponent(resource.iconName)}.svg`
    }
    return "missing.png"
}

function formatDate(timestamp: string) {
    const date = new Date(timestamp);

    if (Number.isNaN(date.getTime())) return "Invalid Date"

    return new Intl.DateTimeFormat("en-us", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
    }).format(date);
}

export default function Resources() {
    const [page, setPage] = useState(1);
    const pageCount = Math.ceil(resourceData.length / PAGINATION_LIMIT);
    const start = (page - 1) * PAGINATION_LIMIT;
    const currentResources = resourceData.slice(start, start + PAGINATION_LIMIT);

    return (
        <main className="grow flex flex-col">
            <header className="justify-center flex flex-col px-10 pt-10 h-1/5">
                <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">Resources</h1>
                <div className="w-full text-lg">
                    A curated collection of docs, guides, and useful resources.
                </div>
            </header>
            {/* search bar */}
            {/* <section className="border border-amber-600">
                search input
            </section> */}
            {/* featured */}
            <section className=" grid grid-cols-1 place-content-center gap-5 px-5 py-8 sm:grid-cols-2 sm:px-8 xl:grid-cols-3 xl:gap-8 xl:px-10">
                {resourceData.map((r) => {
                    if (r.isFeatured) {
                        return (
                            <div key={r.slug} className="group flex min-h-50 w-full flex-col items-center justify-center rounded-2xl border-3 border-purple-500 bg-dark-purple p-4 text-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                                <div>
                                    <Image
                                        src={getResourceIcon({ iconName: r.iconName })}
                                        alt={r.slug}
                                        width={64}
                                        height={64}
                                    />
                                </div>
                                <div className="text-xl font-bold">{r.name}</div>
                                <div>{r.notes}</div>
                            </div>
                        )
                    }
                })}
            </section>
            <hr className="h-1 border-0 bg-linear-to-r from-transparent via-purple-900 to-transparent" />
            {/* all resources
                should also contain a button that goes to a page that list all of them out in alphabetical order 
            */}
            <section className="flex flex-1 flex-col min-h-0">
                <div className="min-h-0 flex-1 overflow-y-auto border border-purple-900 rounded-2xl">
                    <table className="w-full">
                        <thead className="bg-dark-void">
                            <tr>
                                <th className="px-2 py-2 text-start sticky top-0 z-10 bg-dark-void">Name</th>
                                <th className="px-2 py-2 text-start sticky top-0 z-10 bg-dark-void">Category</th>
                                <th className="px-2 py-2 text-start sticky top-0 z-10 bg-dark-void">Notes</th>
                                <th className="px-2 py-2 text-start sticky top-0 z-10 bg-dark-void">Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentResources.map((r, index) => {
                                return (
                                    <Fragment key={r.slug}>
                                        <tr className="">
                                            <td className="px-2 pb-3">
                                                <div className="flex gap-6">
                                                    <Link href={r.url}>
                                                        <Image
                                                            src={getResourceIcon({ iconName: r.iconName, iconUrl: r.iconUrl })}
                                                            alt={r.iconName}
                                                            width={32}
                                                            height={32}
                                                        />
                                                    </Link>
                                                    <div className="flex gap-1">
                                                        <Link href={r.url} className="hover:underline">{r.name} </Link>
                                                        <Link href={r.url}><IoArrowRedo size={12} /></Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-2 pb-3">
                                                <span className="border border-purple-400 block w-full rounded-2xl bg-purple-950 px-2 py-1 text-center">
                                                    {r.categoryId}
                                                </span>
                                            </td>
                                            <td className="px-2 pb-3 w-150">{r.notes}</td>
                                            <td className="px-2 pb-3">{formatDate(r.dateUpdated)}</td>
                                        </tr>
                                        {index < currentResources.length - 1 && (
                                            <tr aria-hidden="true">
                                                <td colSpan={4} className="p-0">
                                                    <hr className="h-px border-0 bg-linear-to-r from-transparent via-purple-900 to-transparent" />
                                                </td>
                                            </tr>
                                        )}
                                    </Fragment>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="flex shrink-0 items-center justify-center gap-3 py-4">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage((current) => current - 1)}
                    >
                        Previous
                    </button>
                    <span> Page {page} of {pageCount} </span>
                    <button
                        disabled={page === pageCount}
                        onClick={() => setPage((current) => current + 1)}
                    >
                        Next
                    </button>
                </div>
            </section>
        </main>
    )
};
