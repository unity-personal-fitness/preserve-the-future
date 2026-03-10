import { Mail, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-20 relative overflow-hidden" style={{backgroundImage: 'linear-gradient(135deg, rgba(5, 150, 105, 0.85) 0%, rgba(34, 197, 94, 0.85) 50%, rgba(5, 150, 105, 0.85) 100%), url("https://cdn-jagbh.nitrocdn.com/TYVZHePxisufUuSiVWDElscksnaOxEbE/assets/images/source/rev-c0dc61e/s39613.pcdn.co/wp-content/uploads/2018/11/community.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Connected
          </h2>

          <p className="text-xl text-emerald-50 leading-relaxed mb-10">
            Join our community and receive inspiring stories of recovery, progress updates from the
            field, and opportunities to make a difference. Be part of the journey of hope and renewal.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 transition-shadow"
            />
            <button
              type="submit"
              className="group bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="text-emerald-100 text-sm mt-6">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
