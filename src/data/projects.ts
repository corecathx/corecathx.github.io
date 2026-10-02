import { Utils } from "../utils/Utils"

// ohhh typedef here is just type...
type Project = {
    name: string
    description: string
    url?: string
    repo?: string
    tags: string[]
    status: "active" | "inactive" | "archived"
}

export type ProjectWithStars = Project & {
    stars?: number;
};

//// helper functions ////
export function getByTag(tag: string) {
    return projects.filter(project => project.tags.includes(tag))
}

export function getByStatus(status: Project["status"]) {
    return projects.filter(project => project.status === status)
}

export async function getProjectsWithStars(
    list = projects,
): Promise<ProjectWithStars[]> {
    return Promise.all(
        list.map(async (project) => ({
            ...project,
            stars: project.repo
                ? await Utils.getGithubStars(project.repo)
                : undefined,
        })),
    );
}

export async function getLatestProjects(count = 3) {
    return getProjectsWithStars(projects.slice(0, count));
}

//// project list ////
export const projects: Project[] = [
    {
        name: "Whisker",
        description: "A desktop shell for Hyprland, focusing on usability and customization (and cats).",
        url: Utils.getGithubRepo('whisker'),
        repo: "whisker",
        tags: ["quickshell", "qml", "linux", "qt"],
        status: "active"
    },
    {
        name: "Whisker-CLI",
        description: "A small helper program for Whisker.",
        url: Utils.getGithubRepo('whisker-cli'),
        repo: "whisker-cli",
        tags: ["haxe", "cli"],
        status: "active"
    },
    {
        name: "LineTapper",
        description: "A rhythm game made with HaxeFlixel.",
        url: Utils.getGithubRepo('LineTapper'),
        repo: "LineTapper",
        tags: ["rhythm", "haxeflixel", "haxe"],
        status: "inactive"
    },
    {
        name: "drawaline",
        description: "A drawing app made in HaxeFlixel.",
        url: Utils.getGithubRepo('drawaline'),
        repo: "drawaline",
        tags: ["haxeflixel", "haxe"],
        status: "inactive"
    },
    {
        name: "FNF CDEV Engine",
        description: "A Friday Night Funkin' Engine.",
        url: Utils.getGithubRepo('FNF-CDEV-Engine'),
        repo: "FNF-CDEV-Engine",
        tags: ["friday-night-funkin", "rhythm", "haxe", "haxeflixel"],
        status: "archived"
    },
    {
        name: "CoreCat Website",
        description: "My personal website.",
        url: "https://corecathx.github.io",
        tags: ["astro", "typescript", "web"],
        status: "active"
    },
    {
        name: "HaxeFlixel Window Transparency",
        description: "A library for making HaxeFlixel windows transparent.",
        url: Utils.getGithubRepo('haxeflixel-window-transparency'),
        repo: "haxeflixel-window-transparency",
        tags: ["haxeflixel", "haxe", "library", "windows"],
        status: "inactive"
    },
    {
        name: "hxdc",
        description: "A Discord client made with Haxe and HaxeUI.",
        url: Utils.getGithubRepo('hxdc'),
        repo: "hxdc",
        tags: ["haxe", "haxeui", "discord", "client"],
        status: "inactive"
    },
]