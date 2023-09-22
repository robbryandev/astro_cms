import type { WpPage } from "@/types/Page"

const wordpress = import.meta.env.WORDPRESS_URL;

export function getPageEndpoint(id: number) {
    return `${wordpress}/wp-json/wp/v2/pages/${id}`
}

export async function getPageBySlug(slug: string): Promise<WpPage | null> {
    let res: WpPage | null = null;
    let pageArray: WpPage[] | null = null;
    const fetchPage = await fetch(`${wordpress}/wp-json/wp/v2/pages/`);
    if (fetchPage.ok) {
        pageArray = await fetchPage.json();
        if (pageArray && pageArray.length > 0) {
            res = pageArray.filter((val) => val.link === `${wordpress}/${slug}/`)[0] ?? null;
        }
    }
    return res;
}
