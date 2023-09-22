export function getPageEndpoint(id: number) {
    return `${import.meta.env.WORDPRESS_URL}/wp-json/wp/v2/pages/${id}`
}
