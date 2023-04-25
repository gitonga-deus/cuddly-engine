import { defineDocumentType, makeSource } from 'contentlayer/source-files'

import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

import readingTime from 'reading-time'

import { rehypePrettyCodeOptions } from './lib/rehypePrettyCode'

const Posts = defineDocumentType(() => ({
	name: "Posts",
	filePathPattern: "**/*.mdx",
	contentType: "mdx",
	fields: {
		title: {
			type: "string",
			description: "The title of the post",
			required: true,
		},
		excerpt: {
			type: "string",
			description: "The excerpt of the post",
			required: true,
		},
		publishedAt: {
			type: "date",
			description: "The date the post was published",
			required: true,
		},
	},

	computedFields: {
		slug: {
			type: "string",
			resolve: (doc) => `${doc._raw.flattenedPath}`,
		},
		readingTime: {
			type: "json",
			resolve: (doc) => readingTime(doc.body.raw),
		},
	},
}));

export default makeSource({
	contentDirPath: 'posts',
	documentTypes: [Posts],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			[rehypePrettyCode, rehypePrettyCodeOptions],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ['absolute left-0 top-0 bottom-0 w-full group'],
					},
				},
			],
		]
	}
});