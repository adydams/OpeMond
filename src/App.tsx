import { Button } from "./components/ui/button";
import { BookText, GraduationCap, Globe, School } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
//import { Badge } from "./components/ui/badge";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  Users,
  Award,
  Clock,
  Search,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Residential Cleaning",
      description:
        "Professional home cleaning services for houses, flats, and apartments across the UK.",
      features: [
        "Deep cleaning",
        "Regular maintenance",
        "Move-in/out cleaning",
        "Post-construction cleanup",
      ],
    },
    {
      title: "Commercial Cleaning",
      description:
        "Comprehensive cleaning solutions for offices, retail spaces, and commercial properties.",
      features: [
        "Office cleaning",
        "Retail spaces",
        "Medical facilities",
        "Educational institutions",
      ],
    },
    {
      title: "Carpet & Upholstery",
      description:
        "Specialist carpet and upholstery cleaning using advanced equipment and eco-friendly products.",
      features: [
        "Steam cleaning",
        "Stain removal",
        "Odour elimination",
        "Fabric protection",
      ],
    },
    {
      title: "Window Cleaning",
      description:
        "Crystal clear window cleaning for residential and commercial properties.",
      features: [
        "Interior & exterior",
        "High-rise access",
        "Frame cleaning",
        "Regular maintenance",
      ],
    },
  ];

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "PROFESSIONAL CLEANING SERVICES",
      subtitle: "Excellence in Every Clean",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1667520405114-47d3677f966e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "COMMERCIAL CLEANING EXPERTS",
      subtitle: "Trusted Across the UK",
    },
    {
      url: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      title: "RESIDENTIAL CLEANING SOLUTIONS",
      subtitle: "Your Home, Our Priority",
    },
  ];
  
const stats = [
  {
    icon: BookText ,
    value: "94,532",
    label: "Learners",
  },
  {
    icon: GraduationCap ,
    value: "60,483",
    label: "Graduates",
  },
  {
    icon: Globe,
    value: "35",
    label: "Countries Reached",
  },
  {
    icon: School,
    value: "1,560",
    label: "Courses Published",
  },
];


  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Manchester",
      rating: 5,
      text: "OpeMond transformed our office space. Their attention to detail is exceptional and the staff are always professional.",
    },
    {
      name: "David Thompson",
      location: "Birmingham",
      rating: 5,
      text: "Reliable, thorough, and trustworthy. We've been using OpeMond for our home cleaning for over two years.",
    },
    {
      name: "Emma Wilson",
      location: "London",
      rating: 5,
      text: "Outstanding service! They accommodated our specific requirements and delivered beyond expectations.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-orange-600 text-white py-2 text-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
      
      {/* Left Side: Contact Info */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-center sm:text-left space-y-1 sm:space-y-0">
        <span className="flex items-center justify-center sm:justify-start">
          <span className="mr-1">Have any question?</span>
          <Phone className="h-4 w-4 mr-1" />
          +44 20 7123 4567
        </span>

        <span className="flex items-center justify-center sm:justify-start">
          <MapPin className="h-4 w-4 mr-1" />
          London, Manchester, Birmingham & UK Wide
        </span>
      </div>

      {/* Right Side: Email & Social */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-center sm:text-left space-y-1 sm:space-y-0">
        <span className="flex items-center justify-center sm:justify-start">
          <Mail className="h-4 w-4 mr-1" />
          info@opemond.co.uk
        </span>
        <div className="flex justify-center space-x-2">
          <Facebook className="h-4 w-4 hover:text-orange-300 cursor-pointer" />
          <Twitter className="h-4 w-4 hover:text-orange-300 cursor-pointer" />
          <Instagram className="h-4 w-4 hover:text-orange-300 cursor-pointer" />
        </div>
      </div>

    </div>
  </div>
</div>


      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-3xl font-bold text-orange-600">OpeMond.</h1>
              </div>
            </div>

            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-8 mr-8">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  About Us
                </a>
                <div className="relative group">
                  <a
                    href="#services"
                    className="text-gray-700 hover:text-orange-600 transition-colors font-medium flex items-center"
                  >
                    Services & Solutions
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </a>
                </div>
                <a
                  href="#blog"
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  Blog
                </a>
                <div className="relative group">
                  <a
                    href="#resources"
                    className="text-gray-700 hover:text-orange-600 transition-colors font-medium flex items-center"
                  >
                    Resources
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </a>
                </div>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
                >
                  Contact Us
                </a>
              </div>

              <div className="flex items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray-500 text-white placeholder-gray-300 px-4 py-2 rounded-none w-48 focus:outline-none focus:bg-gray-600"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white bg-slate-600 hover:bg-slate-700 cursor-pointer p-0.5 rounded" />
                </div>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              >
                About Us
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              >
                Services & Solutions
              </a>
              <a
                href="#blog"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              >
                Blog
              </a>
              <a
                href="#resources"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              >
                Resources
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Carousel Section */}
    <section id="home" className="relative w-full">
  <Carousel
    showThumbs={false}
    showStatus={false}
    autoPlay
    infiniteLoop
    interval={5000}
    stopOnHover={false}
    emulateTouch
    showArrows
  >
    {carouselImages.map((image, index) => (
      <div key={index} className="relative">
        <img
          src={image.url}
          alt={image.title}
          className="object-cover w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 text-center leading-snug">
            {image.title}
          </h1>
          <p className="text-sm sm:text-lg md:text-2xl font-light text-center max-w-2xl">
            {image.subtitle}
          </p>
        </div>
      </div>
    ))}
  </Carousel>
</section>


      {/* Services Training Section */}
      <section className="py-20 bg-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                CLEANING SERVICES TRAINING
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Are you looking to take your cleaning business to the next
                level? The OpeMond professional cleaning training in the United
                Kingdom can be your key to success.
              </p>

              <div className="flex items-center space-x-8 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Teacher</div>
                    <div className="font-semibold">Expert Trainers</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Categories</div>
                    <div className="font-semibold">All Cleaning Types</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1667520405114-47d3677f966e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Professional cleaning training"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From deep cleaning to regular maintenance, we offer comprehensive
              cleaning solutions tailored to your specific needs across the UK.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-orange-600">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose OpeMond?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over a decade of experience serving clients across the
                United Kingdom, OpeMond has built a reputation for excellence,
                reliability, and attention to detail.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Users className="h-8 w-8 text-orange-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Trained Professionals
                    </h3>
                    <p className="text-gray-600 text-sm">
                      All our staff are fully trained, insured, and background
                      checked.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Award className="h-8 w-8 text-orange-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Quality Guaranteed
                    </h3>
                    <p className="text-gray-600 text-sm">
                      100% satisfaction guarantee on all our cleaning services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-8 w-8 text-orange-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Flexible Scheduling
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We work around your schedule with convenient time slots.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-8 w-8 text-orange-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Eco-Friendly
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We use environmentally safe cleaning products and methods.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Professional cleaning equipment"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied
              customers across the UK.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

  <section
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`
    }}
    >
      <div className="absolute inset-0  z-0" />
      <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
        {stats.map(({ icon: Icon, value, label }, index) => (
          <div key={index} className="flex flex-col items-center">
            <Icon className="w-14 h-14 mb-4 text-white" />
            <h3 className="text-2xl font-bold">{value}</h3>
            <p className="text-sm mt-1">{label}</p>
            <div className="bg-white w-0.5"  ></div>
          </div> 
      ))}
      </div>
    </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-orange-600 mt-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-orange-100">
              Contact us today for a free quote and discover why OpeMond is the
              UK's trusted cleaning partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-lg p-6">
              <Phone className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+44 20 7123 4567</p>
              <p className="text-sm text-gray-500">Mon-Fri: 7AM-7PM</p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <Mail className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">info@opemond.co.uk</p>
              <p className="text-sm text-gray-500">24/7 Response</p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <MapPin className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Service Areas
              </h3>
              <p className="text-gray-600">Nationwide Coverage</p>
              <p className="text-sm text-gray-500">
                London, Manchester, Birmingham & More
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-orange-600 hover:bg-gray-50"
            >
              Get Your Free Quote Today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-4">
                OpeMond.
              </h3>
              <p className="text-gray-400 mb-4">
                Professional cleaning services across the United Kingdom. Your
                trusted partner for pristine spaces.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Residential Cleaning</li>
                <li>Commercial Cleaning</li>
                <li>Carpet & Upholstery</li>
                <li>Window Cleaning</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>Phone: +44 20 7123 4567</p>
                <p>Email: info@opemond.co.uk</p>
                <p>Serving all of the UK</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 OpeMond. All rights reserved. | Privacy Policy | Terms
              of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
