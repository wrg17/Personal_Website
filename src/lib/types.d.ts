export interface ProjectDates {
	start: string;
	end?: string;
}

export interface Project {
	slug: string;
	title: string;
	image: string;
	imageSrcset?: string;
	imageAvifSrcset?: string;
	imageOg?: string;
	imageAlt: string;
	description: string;
	link: string;
	body?: string[];
	techStack?: string[];
	repoUrl?: string;
	liveUrl?: string;
	dates?: ProjectDates;
	featured?: boolean;
}
