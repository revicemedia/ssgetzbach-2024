/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    slug: "boost-conversation-rate",
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    description:
      "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    slug: "boost-conversation-rate",
  },
  {
    title: "Improve your customer experience",
    href: "#",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    slug: "boost-conversation-rate",
  },
  {
    title: "Writing effective landing page copy",
    href: "#",
    description:
      "Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.",
    date: "Jan 29, 2020",
    datetime: "2020-01-29",
    slug: "boost-conversation-rate",
  },
];

export default function Spielberichte() {
  return (
    <div className="bg-white px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div className="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <p className="text-sm text-gray-500">
                <time dateTime={post.datetime}>{post.date}</time>
              </p>
              <a href="#" className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">
                  {post.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {post.description}
                </p>
              </a>
              <div className="mt-3">
                <a
                  href={"/verein/spielberichte/" + post.slug}
                  className="text-base font-semibold text-red-600"
                >
                  Zum Spielbericht
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
