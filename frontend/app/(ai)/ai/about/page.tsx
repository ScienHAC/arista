export default function AboutPage() {
  return (
    <div className="pt-24">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">About Arista AI</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Revolutionizing travel with AI-powered planning and premium smart products.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="mb-12 rounded-xl bg-card p-8 shadow-md">
            <h2 className="mb-4 text-2xl font-bold">Our Story</h2>
            <p className="mb-4 text-muted-foreground">
              Arista AI was founded with a vision to transform the travel experience through the power of artificial
              intelligence and innovative smart products. Our journey began when our founders, experienced travelers
              themselves, recognized the need for more intelligent travel planning and secure, tech-enhanced travel
              accessories.
            </p>
            <p className="text-muted-foreground">
              Today, we're proud to partner with EaseMyTrip to offer comprehensive travel solutions that combine
              cutting-edge AI technology with premium smart products. Our mission is to make travel more seamless,
              secure, and enjoyable for everyone.
            </p>
          </div>

          <div className="mb-12 rounded-xl bg-card p-8 shadow-md">
            <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground">At Arista AI, we're committed to:</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-arista-orange" />
                <span>
                  Leveraging AI to create personalized travel experiences that match each traveler's unique preferences
                  and needs.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-arista-orange" />
                <span>
                  Designing and manufacturing premium smart products that enhance security, convenience, and peace of
                  mind while traveling.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-arista-orange" />
                <span>
                  Continuously innovating and improving our technology to stay at the forefront of the travel industry.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-arista-orange" />
                <span>
                  Providing exceptional customer service and support to ensure complete satisfaction with our products
                  and services.
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-card p-8 shadow-md">
            <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
            <p className="mb-4 text-muted-foreground">
              We'd love to hear from you! Whether you have questions about our products, need assistance with your
              travel planning, or want to explore partnership opportunities, our team is here to help.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-semibold">Email</h3>
                <p className="text-muted-foreground">info@aristaai.com</p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Address</h3>
                <p className="text-muted-foreground">
                  123 AI Boulevard
                  <br />
                  Tech City, TC 12345
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9am - 6pm
                  <br />
                  Saturday: 10am - 4pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

