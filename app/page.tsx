import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';

import { allPosts } from 'contentlayer/generated';

export default function Home() {
	return (
		<section>
			<h1 className='text-4xl font-semibold tracking-tight py-2'>Posts</h1>

			{allPosts.sort((a, b) => (
				compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))))
				.map((post) => {
					const { slug, title, excerpt, publishedAt, readingTime } = post;

					return <>
						<Link
							key={slug}
							className='block select-none p-2 my-1 -mx-2 rounded-md duration-500 transition-colors hover:bg-gray-200/60'
							href={`posts/${slug}`}
						>
							<div className='flex pt-1 items-center text-shade-2 text-sm tracking-tight'>
								<time dateTime={publishedAt}>
									{format(parseISO(publishedAt), 'MMM dd, yyyy')}
								</time>
								<span className="mx-1">
									&#8226;
								</span>
								<span>{readingTime.text}</span>
							</div>

							<h2
								className='py-1 text-base text-gitonga-fg font-semibold leading-6 tracking-tight'
							>
								{title}
							</h2>
							<p className='text-base tracking-tight text-shade-3'>{excerpt}</p>
						</Link>
					</>
				})
			}
		</section>
	)
}