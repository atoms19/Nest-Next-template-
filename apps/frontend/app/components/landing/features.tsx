import Image from "next/image";

export function Features() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-primary/10 via-white to-secondary">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="flex flex-col items-center text-center space-y-3">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Why You’ll Love Us
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Features Designed for Real Connections
          </h2>
          <p className="mt-2 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Our platform brings people together with features built to make socializing effortless, safe, and fun.
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto mt-16 grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          {/* Text side */}
          <div className="flex flex-col space-y-8">
            <div className="grid gap-2">
              <h3 className="text-2xl font-bold">Smart Matchmaking</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our algorithm suggests people who share your interests and values.
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-2xl font-bold">Photo Sharing & Stories</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Upload photos, post stories, and express yourself visually.
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-2xl font-bold">Private & Secure Chats</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enjoy real-time messaging with strong privacy controls.
              </p>
            </div>
          </div>

          {/* Image side */}
          <div className="flex justify-center lg:justify-end">
            <img
              alt="App preview"
              className="mx-auto aspect-[4/3] overflow-hidden rounded-2xl object-cover shadow-lg sm:w-full"
              height="400"
              src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width="550"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
