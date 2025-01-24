import Link from "next/link";

const Home = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await posts.json();

  return (
    <div className="pb-12 md:px-12 px-6">
      <h2 className="text-4xl font-extrabold text-center m-2 text-gray-800">Blog Posts</h2>

      <div className="grid md:grid-cols-3 grid-cols-2 gap-8 pt-4">
        {result.map((post) => (
          <div
            key={post?.id}
            className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-r-4 border-teal-500 flex flex-col transform transition duration-300 ease-in-out hover:scale-105"
          >
              <h2 className="text-gray-800 text-xl font-semibold mb-4 hover:text-teal-600 transition-colors">
                {post?.id}. {post?.title}
              </h2>
            <p className="text-gray-600 text-sm font-medium mb-4 flex-grow">
              {post?.body.length > 150 ? `${post?.body.substring(0, 150)}...` : post?.body}
            </p>
            <div className="text-center mt-auto">
              <Link href={`/blog/${post.id}`}>
                <button className="bg-teal-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-teal-600">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;