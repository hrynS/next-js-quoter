import { mockQuotes } from "@/app/constants";

export async function generateStaticParams() {
    const authors = await new Promise((resolve) => {
        resolve(mockQuotes)
    });

    return authors.map((author) => ({
        id: author.id,
    }))
}

export async function getAuthors() {
    try {
        const authors = await new Promise((resolve) => {
            resolve(mockQuotes)
        });

        return authors;
    } catch (e) {
        throw e;
    }
}


export default async function Authors({params}) {
    const { id } = params;
    const authors = await getAuthors();

    return (
        <div className='flex flex-row gap-10'>
            {authors.map((author) => {
                return <div key={id} className='flex justify-center items-center p-5 bg-white rounded-lg border-gray-300 min-h-24'>{author.author} tile</div>
            })}
        </div>
    );
}